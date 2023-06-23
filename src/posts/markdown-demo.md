---
title: "本站文章Markdown语法示例"
create: "2023-05-04T15:47:32.068Z"
update: "2023-05-08T05:15:54.226Z"
author: "蔡建文"
tags: ["规范", "文档"]
intro: "这是一篇Markdown示例文章，后人想要写新文章的时候可以拿来参考"
---

下面是本站目前支持度比较好的 markdown 语法示例，日常使用的话应该是足够的，后人想要继续丰富本站内容，写新的文章的时候可以参考这个文章。

# 一、常用

## 1. 链接

你可以尝试点击这个[示例链接](https://example.com)。

## 2. 表格

我们也可以加入一个表格：

| Title           | Date             |
| :-------------- | :--------------- |
| 学习 Python     | 2023-04-23 12:30 |
| 学习 Javascript | 2023-04-26 12:30 |
| 学习 Typescript | 2023-04-30 12:30 |

## 3. 图片

同样你也可以插入一张图片：

![friends](https://d1qxviojg2h5lt.cloudfront.net/images/01E4CFF623M99BXP6HHSVF10D7/friends570.webp)

## 4. 列表

- 早上睡懒觉
- 一起打篮球
- 出去骑单车

# 二、 进阶

## 1. 引用

我们可以引用一段文字：

> **注意：**
>
> 请联系管理员

## 2. 事项

添加一些待做事项：

- [x] Blog 支持 Markdown
- [x] Blog 添加 TOC
- [x] Blog 添加评论
- [x] Blog 添加页脚导航
- [ ] Blog 添加自定义组件

## 3. 代码

我们还可以添加代码，支持代码高亮：

```javascript
//javascript
export default function Button() {
  const handleClick = () => console.log("Button Clicked");

  return (
    <div onClick={handleClick} className="py-2 px-3 rounded-md bg-indigo-600 text-white">
      Click Me
    </div>
  );
}
```

# 三、其他

## 1. 分割线

---

## 2. 其他

有**强调**的文字，有`引用`的文字，有*斜体*的文字。
