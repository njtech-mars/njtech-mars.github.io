---
title: '开源软件供应链点亮计划——暑期2022项目提案'
date: '2023-01-29T05:08:00.000Z'
author: 'Cael'
tags: ['项目', '讲座', '开源']
intro: '项目简介 今年，中科院软件所继续举办 “开源软件供应链点亮计划——暑期2022” 项目。该项目与 Google Summer of Code 形式类似：开源社区提供项目需求并提供导师'
---

## 1. Introduction

Most web developers, especially `React Developers`, use `div`tags 90% of the time. They rarely touch other tags like`li`, `main`, `section`, `p`, and many others tags.

The main reason could be that React is extremely flexible. Developers can easily use `onClick`, `onSubmit`, and many other events.

They may write a button like this:

```javascript
export default function Button() {
  const handleClick = () => console.log('Button Clicked');

  return (
    <div onClick={handleClick} className="py-2 px-3 rounded-md bg-indigo-600 text-white">
      Click Me
    </div>
  );
}
```
