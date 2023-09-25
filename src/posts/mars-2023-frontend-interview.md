---
title: "Mars工作室2023前端面试题"
create: "2023-09-25T02:31:20.629Z"
update: "2023-09-25T02:31:20.629Z"
author: "蔡建文"
tags: ["面试题", "前端"]
intro: "Mars工作室2023前端面试题"
---

本笔试共包含 2 题，限时 **60** 分钟，允许使用自己熟悉的 IDE 进行开发，允许使用自己熟悉的技术栈，允许查阅资料，严禁使用 **Chat-GPT** 等 AI 问答工具。

# 试题一、CSS 绘画

## 1. 试题内容

使用 CSS 绘制出以下雪人的图形，要求尽可能还原图中雪人，图中未指定的尺寸自行判断即可，不要求完全相同。

![snowman](/assets/images/mars-2023-frontend-interview/snowman.png)

## 2. 得分说明

评分点：

- 代码风格良好
- 完成雪人的绘制

加分项：

- 熟悉 CSS 语法

## 3. 参考代码

**index.html**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Snowman</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="hat">
      <div class="layer1"></div>
      <div class="layer2"></div>
      <div class="layer3"></div>
    </div>

    <div class="head">
      <div class="eye eye1"></div>
      <div class="eye eye2"></div>
      <div class="mouth"></div>
    </div>

    <div class="body">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="scarf"></div>
    </div>
  </body>
</html>
```

**style.css**

```css
* {
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: lightblue;
  height: 100vh;
  height: 100svh;
}

/* hat */
.hat {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.layer1 {
  width: 50px;
  height: 40px;
  background: black;
  border-radius: 5px 5px 0 0;
}

.layer2 {
  width: 50px;
  height: 5px;
  background: red;
}

.layer3 {
  width: 70px;
  height: 10px;
  background: black;
  border-radius: 3px 3px 0 0;
}

/* head */
.head {
  width: 70px;
  height: 70px;
  position: relative;
  background: white;
  clip-path: circle(50% at 50% 30%);
}

.eye {
  top: 15px;
  left: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  background: black;
  transform: translate(-50%, 0);
}

.eye1 {
  margin-left: 10px;
}

.eye2 {
  margin-left: -10px;
}

.mouth {
  top: 30px;
  left: 50%;
  width: 13px;
  height: 13px;
  position: absolute;
  background: orange;
  transform: translate(-50%, 0);
  clip-path: polygon(50% 0, 0 100%, 100% 100%);
}

/* body */
.body {
  width: 110px;
  height: 110px;
  background: white;
  border-radius: 50%;
  position: relative;
  transform: translate(0, -25px);

  gap: 7px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.dot {
  width: 8px;
  height: 8px;
  background: black;
  border-radius: 50%;
}

.scarf {
  top: 2px;
  width: 74px;
  height: 12px;
  background: red;
  position: absolute;
  border-radius: 5px 5px 0 0;
}
```

# 试题二、算术小能手

## 1. 试题内容

要求程序可以随机生成一道 **A\*B** 的乘法计算题，A，B 的值在 0-9 之间，用户输入点击确认后弹窗显示用户输入的答案是否正确。

本题允许使用自己熟悉的技术栈，不要求 CSS 样式，实现功能即可，但是复刻或者自定义新的样式可作为加分项。

![multiply](/assets/images/mars-2023-frontend-interview/multiply.png)

## 2. 得分说明

评分点：

- 代码风格良好
- 实现基本功能

加分项：

- 加入四则运算
- 复刻或自定义样式
- 答题正确后自动进入下一题
- 熟悉 JS，HTML，CSS 语法
- 记录答题时间，限时 60 秒，超过时间弹窗警告

## 3. 参考代码

**index.html**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>算术小能手</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <script src="index.js" defer></script>
  </head>
  <body>
    <form onsubmit="handleSubmit(event)">
      <p class="timer"></p>
      <p class="title"></p>
      <input type="number" name="answer" required placeholder="小能手，你知道答案吗" />
      <button type="submit">检查答案</button>
    </form>
  </body>
</html>
```

**style.css**

```css
* {
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  min-height: 100svh;
  background: #86aa97;
}

form {
  padding: 20px 30px;
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.title {
  font-size: x-large;
  font-weight: bold;
  text-align: center;
}

.timer {
  color: teal;
  margin-left: auto;
  font-weight: bold;
  text-align: right;
  font-size: smaller;
}

input {
  width: 200px;
  padding: 10px 15px;
  outline: solid 1.5px teal;
  border-radius: 3px;
  text-align: center;
}

button {
  width: 100%;
  padding-block: 12px;
  margin-top: 5px;
  color: white;
  background: teal;
  font-weight: bold;
  border: none;
  cursor: pointer;
}
```

**index.js**

```js
let first = 0;
let second = 0;
let countdown = 60;

const titleElement = document.getElementsByClassName("title")[0];
const timerElement = document.getElementsByClassName("timer")[0];

function updateTimer() {
  countdown = countdown - 1;
  timerElement.innerText = `用时:${countdown}`;
  if (countdown === 0) {
    alert("时间到，你太菜啦");
    countdown = 60;
  }
}

function generateQuiz() {
  first = Math.floor(Math.random() * 10);
  second = Math.floor(Math.random() * 10);
  titleElement.innerText = `${first}*${second}=?`;
}

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  if (first * second === parseInt(formData.get("answer"))) {
    generateQuiz();
    alert("恭喜你答对啦");
  } else {
    alert("真可惜答错啦");
  }
}

generateQuiz();
updateTimer();
setInterval(() => updateTimer(), 1000);
```
