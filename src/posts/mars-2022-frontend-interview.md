---
title: "Mars工作室2022前端面试题"
create: "2022-09-26T15:47:32.068Z"
update: "2023-05-11T09:10:00.944Z"
author: "蔡建文"
tags: ["面试题", "前端"]
intro: "Mars工作室2022前端的面试题"
---

Mars 工作室 2022 前端面试题，由朱文昊出题，由我整理编辑。

# 试题一，JS 异步函数

### 1. 试题内容

实现一个在异步函数内可以使用的 sleep 函数，接收一个参数 ms（等待 ms 毫秒再执行下一个语句）。

### 2. 得分说明

- 实现功能（10 分）

### 3. 参考代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>延时函数</title>
  </head>
  <body>
    <h1>Sleeped 1 second!</h1>
    <script>
      function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }
      async function main() {
        let count = 1;
        while (true) {
          await sleep(1000);
          document.querySelector("h1").innerText = `Sleeped ${++count} seconds!`;
        }
      }
      main();
    </script>
  </body>
</html>
```

# 试题二，简单的计时器

### 1. 试题内容

编写倒计时程序，实现用户在输入框中输入数字后点击开始按钮便会开始倒计时。点击暂停/继续按钮则会暂停/继续倒计时，点击结束按钮或计时结束会恢复为上次点击开始之前设置的值。

用户以任意顺序点击按钮不会产生意外的错误，保证不需要刷新页面即可再次使用。

用户任何操作造成计时的误差不得大于 0.1 秒。如若使用 setInterval，则周期不得小于 100 毫秒。（任何函数的执行周期也不得小于 100 毫秒）

试题时间限时 2 小时。

可以使用技术文档、搜索引擎等一切工具，但是禁止复制、抄袭网上的代码，禁止查找和考题内容一致的代码。

### 2. 得分说明

- 功能和交互方式尽可能合理、容错、人性化的酌情加分（0~10 分）
- 做到任何按钮导致的误差小于等于 1 毫秒（不考虑代码执行耗费时间）可以加分（15 分）
- 代码风格优良的酌情加分（0~5 分）
- 使用弹性或网格布局可以酌情加分（0~10 分）
- 样式实现（0~40 分）
- 功能实现（0~60 分），其中使用不同的框架分数上限不同：
  > - 函数式组件（React Hooks）（60 分）
  > - React-Redux（50 分）
  > - 类式组件（setState）（40 分）
  > - 未使用 React（10 分）

### 3. 样式

- 需要计时器整体在页面居中（水平、垂直）。（5-5 分）
- 计时器整体长 15em、宽 5em。（4 分）
- 红色实线边框，边框宽度为 1px，2px 圆角。（4 分）
- 计时器由展示框和按钮组成，输入框和按钮各占一行。（5 分）
- 输入框和按钮分别位于整个展示框的顶部和底部。（5 分）
- 展示框在其行内整体居中。（5 分）
- 三个按钮占满一行，第一个在最左边，第二个在中间，第三个在最右边。（7 分）
  > 注： 按钮和输入框均使用默认宽高，不要进行宽高设置。
  > 不需要任何额外的美化样式，有了也不会加分。

### 4. 参考代码

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <script src="index.js" defer></script>
    <title>计时器</title>
  </head>
  <body>
    <div class="container">
      <input type="text" />
      <div class="buttons">
        <button id="begin_but">开始</button>
        <button id="pause_but">暂停/继续</button>
        <button id="reset_but">重置</button>
      </div>
    </div>
  </body>
</html>
```

**style.css**

```css
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container {
  width: 15em;
  height: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: solid red 1px;
  border-radius: 5px;
}

.container .buttons {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
```

**index.js**

```js
// variable
let step = 0.1;
let is_paused = false;
let count_down_value = 0;
let origin_count_down_value = 0;
let count_down_input = document.querySelector(".container input");

// interval
setInterval(() => {
  if (count_down_value > step && !is_paused) {
    count_down_value -= step;
    count_down_value = Math.round(count_down_value * 10) / 10;
    count_down_input.value = count_down_value;
  }
}, 100);

// begin button
document.getElementById("begin_but").addEventListener("click", () => {
  is_paused = false;
  origin_count_down_value = count_down_input.value;
  count_down_value = origin_count_down_value;
});

// pause/resume button
document.getElementById("pause_but").addEventListener("click", () => {
  is_paused = !is_paused;
});

// reset button
document.getElementById("reset_but").addEventListener("click", () => {
  count_down_value = origin_count_down_value;
  count_down_input.value = count_down_value;
});
```
