---
title: "Mars工作室2023后端面试题"
create: "2023-09-25T10:40:22.133Z"
update: "2023-09-25T10:40:22.133Z"
author: "李志嘉"
tags: ["面试题", "后端"]
intro: "Mars工作室2023后端面试题"
---

**60**分钟。不限开发环境，不限编程语言及生态，不允许使用AI工具直接生成代码。

# 一、题目

> 漂流瓶，也称为浮标，是一种在海洋中漂流的瓶子，用于研究海洋洋流和浪漫目的。
>
> 公元前310年，希腊哲学家提奥弗拉斯托斯试图通过放置一些漂流瓶并等待它们的回归来证明地中海是由大西洋洋流形成的，不过它们最终并没有回来。在16世纪期间，英国海军通过发送加密的瓶中信件与伊丽莎白女王一世进行通信。这些漂流密码具有极高的战略价值，以至于女王任命了一位官方的“海洋瓶子开启者”——任何其他人敢于打开它们都将面临死刑。
>
> 1914年6月，格拉斯哥航海学校的C·亨特·布朗船长放置了近2000个编号的瓶子。找到瓶子的人被要求在最近的邮局投下一张说明其位置的便条。说明中解释道：“我们的目标是找出北海深层洋流的方向”。其中一个在2012年被发现，成为世界上最古老的漂流瓶中信。

现在，让我们来尝试模拟使用漂流瓶传递信息，请编写一个程序，监听`7000`端口，并通过 `HTTP` 协议实现如下功能，你可以自行设计API风格:

- 不需要任何用户认证和鉴权系统，所有操作完全匿名，如果需要，可以下发临时的认证token。
- 用户可以创建一个"瓶子"并附上信息，然后"抛入海洋"，随后将有可能被其它用户收到。
- 用户可以尝试获取一个瓶子，并查看其中信息，随后，用户可以做三个操作：

  - 保留该瓶子，后续不会继续被其它用户收到，签发给用户一个安全的token以便以后用户查询该瓶子。
  - 将该瓶子扔回"海洋"，该瓶子会继续漂流并有可能被更多用户收到。
  - 在瓶子中额外加入一段信息，然后扔回"海洋"，该瓶子会继续漂流并有可能被更多用户收到，下一个收到瓶子的用户将能看到附加的信息。
  - 但是，如果用户在30分钟后没有执行任何操作，则删除该瓶子，同时用户也无法再次访问该瓶子。

- 额外功能(可选，加分项):
  - 有 OpenAPI 文档，内建 Swagger UI 支持。
  - 采用`docker`打包，并提供`Dockerfile`

# 二、参考代码(Golang实现)

模块名为`git.online.njtech.edu.cn/online/backend_itv_2023_go`

## 1. 代码

**data.go**

```go
package main

import (
	"gorm.io/gorm"
)

type Bottle struct {
	gorm.Model
	Content     string
	Owner       string
	Attachments []Attachment
}

type Attachment struct {
	gorm.Model
	BottleID uint
	Content  string
}

type BottleRepo struct {
	db *gorm.DB
}

func (r *BottleRepo) Create(bottle *Bottle) error {
	return r.db.Create(bottle).Error
}

func (r *BottleRepo) GetById(id uint) (*Bottle, error) {
	var bottle Bottle
	err := r.db.Preload("Attachments").First(&bottle, id).Error
	return &bottle, err
}

func (r BottleRepo) GetByRandom() (*Bottle, error) {
	var bottle Bottle
	err := r.db.Preload("Attachments").Where("owner == ''").Order("RANDOM()").First(&bottle).Error
	return &bottle, err
}

func (r *BottleRepo) Delete(id uint) error {
	_, err := r.GetById(id)
	if err != nil {
		return err
	}
	return r.db.Delete(&Bottle{}, id).Error
}

func (r *BottleRepo) AttachMessage(id uint, content string) error {
	bottle, err := r.GetById(id)
	if err != nil {
		return err
	}
	attachment := Attachment{BottleID: bottle.ID, Content: content}
	return r.db.Create(&attachment).Error
}

func (r *BottleRepo) SetOwner(id uint, owner string) error {
	bottle, err := r.GetById(id)
	if err != nil {
		return err
	}
	bottle.Owner = owner
	return r.db.Save(bottle).Error
}

func NewBottleRepo(db *gorm.DB) *BottleRepo {
	db.AutoMigrate(&Bottle{}, &Attachment{})
	return &BottleRepo{db: db}
}
```

**service.go**

```go
package main

import (
	"crypto/hmac"
	"crypto/rand"
	"crypto/sha256"
	"encoding/base64"
	"encoding/json"
)

type BottleService struct {
	repo *BottleRepo
}

func NewBottleService(repo *BottleRepo) *BottleService {
	return &BottleService{repo: repo}
}

func (s *BottleService) Create(bottle *Bottle) error {
	return s.repo.Create(bottle)
}

func (s *BottleService) GetBottle() (*Bottle, error) {
	return s.repo.GetByRandom()
}

func (s *BottleService) GetBottleById(id uint) (*Bottle, error) {
	return s.repo.GetById(id)
}

const hmacKey = "SuPerSeCRetKeY"

type Token struct {
	Body TokenBody `json:"b"`
	Sum  string    `json:"s,omitempty"`
}

type TokenBody struct {
	BottleId uint   `json:"b"`
	OwnerId  string `json:"o"`
}

func (s *BottleService) SignToken(id uint) string {
	mac := hmac.New(sha256.New, []byte(hmacKey))

	buf := make([]byte, 16)
	rand.Read(buf)
	ownerId := base64.URLEncoding.EncodeToString(buf)
	tokenBody := TokenBody{
		BottleId: id,
		OwnerId:  ownerId,
	}
	s.repo.SetOwner(id, ownerId)

	data, _ := json.Marshal(tokenBody)
	mac.Write([]byte(data))
	sum := mac.Sum(nil)
	tokenRaw := Token{
		Body: tokenBody,
		Sum:  base64.StdEncoding.EncodeToString(sum),
	}
	token, _ := json.Marshal(tokenRaw)
	return base64.URLEncoding.EncodeToString(token)
}

func (s *BottleService) DecodeToken(token string) (id uint, ok bool) {
	tokenRaw, err := base64.URLEncoding.DecodeString(token)
	if err != nil {
		return 0, false
	}
	var tokenBody Token
	err = json.Unmarshal(tokenRaw, &tokenBody)
	if err != nil {
		return 0, false
	}
	bottle, err := s.repo.GetById(tokenBody.Body.BottleId)
	if err != nil {
		return 0, false
	}
	if bottle.Owner != tokenBody.Body.OwnerId {
		return 0, false
	}
	mac := hmac.New(sha256.New, []byte(hmacKey))
	data, _ := json.Marshal(tokenBody.Body)
	mac.Write([]byte(data))
	sum := mac.Sum(nil)
	if base64.StdEncoding.EncodeToString(sum) != tokenBody.Sum {
		return 0, false
	}
	return tokenBody.Body.BottleId, true
}

func (s *BottleService) DecodeAndRevokeToken(token string) (uint, bool) {
	id, ok := s.DecodeToken(token)
	err := s.repo.SetOwner(id, "")
	if err != nil {
		return 0, false
	}
	return id, ok
}

func (s *BottleService) AttachMessage(id uint, message string) error {
	return s.repo.AttachMessage(id, message)
}

func (s *BottleService) DeleteBottle(id uint) error {
	return s.repo.Delete(id)
}
```

**handlers.go**

```go
package main

import (
	"context"
	"time"

	"github.com/gin-gonic/gin"
)

type BottleHandler struct {
	srv *BottleService
}

type BottleDto struct {
	Token       string   `json:"token"`
	Content     string   `json:"content"`
	Attachments []string `json:"attachments"`
}

type CreateBottleReq struct {
	Content string `json:"content"`
}

type AttachMessageReq struct {
	Content string
}

// @Summary		Create a bottle
// @Description	Create a bottle
// @Tags			bottles
// @Accept			json
// @Produce		json
// @Param			bottle	body	CreateBottleReq	true	"The bottle to Create"
// @Success		201
// @Router			/bottles/ [post]
func (h *BottleHandler) CreateBottle(ctx *gin.Context) {
	var req CreateBottleReq
	if err := ctx.ShouldBindJSON(&req); err != nil {
		ctx.JSON(400, gin.H{"error": err.Error()})
		return
	}
	entity := &Bottle{Content: req.Content}
	if err := h.srv.Create(entity); err != nil {
		ctx.JSON(500, gin.H{"error": err.Error()})
		return
	}
	// will not respond the bottle to the client
	ctx.JSON(201, gin.H{})
}

var timeoutCancelers = make(map[uint]context.CancelFunc)

// @Summary		Get a bottle
// @Description	Get a bottle
// @Tags			bottles
// @Accept			json
// @Produce		json
// @Success		200	{object}	BottleDto
// @Router			/bottles/ [get]
func (h *BottleHandler) GetBottle(ctx *gin.Context) {
	entity, err := h.srv.GetBottle()
	if err != nil {
		ctx.JSON(500, gin.H{"error": err.Error()})
		return
	}

	// set timer to delete the bottle after 30 minutes
	// if user have made any decision, should call the corrosponding cancel Function.
	go func() {
		ctx, cancel := context.WithCancel(context.Background())
		defer cancel()
		timeoutCancelers[entity.ID] = cancel
		timer := time.NewTimer(30 * time.Minute)
		<-timer.C
		// not canceled by user, do the default behavior
		if ctx.Err() == nil {
			delete(timeoutCancelers, entity.ID)
			h.srv.DeleteBottle(entity.ID)
		}
	}()
	dto := &BottleDto{
		Token:       h.srv.SignToken(entity.ID),
		Content:     entity.Content,
		Attachments: make([]string, len(entity.Attachments)),
	}
	for i, attachment := range entity.Attachments {
		dto.Attachments[i] = attachment.Content
	}
	ctx.JSON(200, dto)
}

// @Summary		Get a bottle by a signd token
// @Description	Get a bottle by a signd token
// @Tags			bottles
// @Accept			json
// @Produce		json
// @Param			token	path		string	true	"The token of the bottle"
// @Success		200		{object}	BottleDto
// @Router			/bottles/{token} [get]
func (h *BottleHandler) GetBottleByToken(ctx *gin.Context) {
	token := ctx.Param("token")
	id, ok := h.srv.DecodeToken(token)
	if !ok {
		ctx.JSON(400, gin.H{"error": "invalid token"})
		return
	}
	entity, err := h.srv.GetBottleById(id)
	if err != nil {
		ctx.JSON(500, gin.H{"error": err.Error()})
		return
	}
	dto := &BottleDto{
		Token:       token,
		Content:     entity.Content,
		Attachments: make([]string, len(entity.Attachments)),
	}
	for i, attachment := range entity.Attachments {
		dto.Attachments[i] = attachment.Content
	}
	ctx.JSON(200, dto)
}

// @Summary		Keep the bottle
// @Description	Keep the bottle the user have got by token
// @Tags			bottles
// @Accept			json
// @Produce		json
// @Param			token	path	string	true	"The token of the bottle"
// @Success		200
// @Router			/bottles/{token} [put]
func (h *BottleHandler) KeepBottle(ctx *gin.Context) {
	token := ctx.Param("token")
	id, ok := h.srv.DecodeToken(token)
	if !ok {
		ctx.JSON(400, gin.H{"error": "you cannot do this"})
		return
	}
	if cancel, ok := timeoutCancelers[uint(id)]; ok {
		cancel()
	} else {
		ctx.JSON(400, gin.H{"error": "bad request"})
	}
	return
}

// @Summary		Throw back the bottle
// @Description	Throw back bottle the user have got by token
// @Tags			bottles
// @Accept			json
// @Produce		json
// @Param			token	path	string	true	"The token of the bottle"
// @Success		200
// @Router			/bottles/{token} [post]
func (h *BottleHandler) ThrowBackBottle(ctx *gin.Context) {
	token := ctx.Param("token")

	id, ok := h.srv.DecodeAndRevokeToken(token)
	if !ok {
		ctx.JSON(400, gin.H{"error": "invalid token"})
		return
	}
	if cancel, ok := timeoutCancelers[uint(id)]; ok {
		cancel()
	} else {
		ctx.JSON(400, gin.H{"error": "bad request"})
	}
	return
}

// @Summary		Attach message to the bottle
// @Description	Attach message to the bottle the user have got by token
// @Tags			bottles
// @Accept			json
// @Produce		json
// @Param			token		path	string				true	"The token of the bottle"
// @param			attachment	body	AttachMessageReq	true	"The message to attach"
// @Success		200
// @Router			/bottles/{token}/attachments/ [post]
func (h *BottleHandler) AttachMessage(ctx *gin.Context) {
	token := ctx.Param("token")
	var req AttachMessageReq
	if err := ctx.ShouldBindJSON(&req); err != nil {
		ctx.JSON(400, gin.H{"error": err.Error()})
		return
	}

	id, ok := h.srv.DecodeAndRevokeToken(token)
	if !ok {
		ctx.JSON(400, gin.H{"error": "invalid token"})
		return
	}
	if cancel, ok := timeoutCancelers[uint(id)]; ok {
		cancel()
		h.srv.AttachMessage(uint(id), req.Content)
	} else {
		ctx.JSON(400, gin.H{"error": "bad request"})
	}
	return
}

func NewBottleHandler(srv *BottleService) *BottleHandler {
	return &BottleHandler{
		srv,
	}
}
```

**main.go**

```go
package main

import (
	"log"

	_ "git.online.njtech.edu.cn/online/backend_itv_2023_go/docs"
	"github.com/gin-gonic/gin"
	ginSwagger "github.com/swaggo/gin-swagger"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"

	swaggerFiles "github.com/swaggo/files"
)

//	@title			Drifting Bottle Simulating (MARS Studio 2023 interview of backend)
//	@version		0.1.0
//	@description	This is an implement of the backend of the Drifting Bottle Simulating project, which is a part of the interview of MARS Studio 2023.

//	@contact.name	MARS Studio
//	@contact.url	https://njtechmars.online/
//	@contact.email	mars@njtech.edu.cn

//	@license.name	CC BY-NC-SA 4.0
//	@license.url	https://creativecommons.org/licenses/by-nc-sa/4.0/

// @host		localhost:7000
// @BasePath	/api/v1
func main() {
	db, err := gorm.Open(sqlite.Open("drifting_bottle.db"), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	}
	repo := NewBottleRepo(db)
	service := NewBottleService(repo)
	handler := NewBottleHandler(service)

	r := gin.Default()
	r.GET("/api/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
	v1 := r.Group("/api/v1")
	v1.GET("/bottles/", handler.GetBottle)
	v1.POST("/bottles/", handler.CreateBottle)
	v1.GET("/bottles/:token", handler.GetBottleByToken)
	v1.PUT("/bottles/:token", handler.KeepBottle)
	v1.POST("/bottles/:token", handler.ThrowBackBottle)
	v1.POST("/bottles/:token/attachments/", handler.AttachMessage)

	r.Run(":7000")
}
```

## 2. 运行

```sh
# 使用 swaggo 生成 openapi 文档
go install github.com/swaggo/swag/cmd/swag@latest
swag init
go run .
```
