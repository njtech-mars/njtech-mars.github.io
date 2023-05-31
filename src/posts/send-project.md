---
title: "南工快传——工作室新项目"
date: "2023-05-22T06:16:44.776Z"
update: "2023-05-31T02:32:06.104Z"
author: "蔡建文"
tags: ["南工快传", "项目"]
intro: "提供校内快速上传和下载文件的短期存储网盘服务"
---

# 一、介绍

南工快传是由 Mars 工作室负责开发运维的校内网盘工具，区别于常规的网盘工具，我们只提供文件的 **短期存储服务**，文件的最长存储有效时间是 **7 天**。你可以在校内任何连接了校园网的电脑或者手机上进行访问，支持手机端和客户端。

南工快传使用 **I 南工** 作为统一登录接口，现在你可以通过以下链接开始使用南工快传：

- [https://send.online.njtech.edu.cn](https://send.online.njtech.edu.cn)

# 二、使用说明

- 默认每个用户文件最长存储时间为 7 天，最大存储空间为 4GB，如果后续有调整请关注我们的通知。
- 支持多个文件同时上传，但不能上传文件夹，文件夹请压缩后再上传
- 如果不选择公开，则只有自己能访问该文件，公开文件支持设置独立的文件密码，不设密码则可以被获取链接的任何人访问和下载
- 单个文件可设置方便记忆的短链接，由 id 加上 `s` 前缀构成，例如`https://send.online.njtech.edu.cn/s/custom_id`，只需要提供最后的 `custom_id`，并且应当是一个安全的 URL 字符串(大小写英文字母，阿拉伯数字和 `%` `-` `.` `_` `~` 这些符号)

# 三、常见问题

## 1.大文件上传失败？

如果在使用`Njtech-Home`网络时遇到此问题，请参考下面的解决方案，否则，原因可能是你的设备问题。

由于我校网络设施的一些问题，使用基于 TCP 的 HTTP 协议向我们的服务器上传大文件会出现意外中断。我们的临时解决措施是采用基于 UDP 的 HTTP3/QUIC 协议。因此请确保你的设备和浏览器支持 HTTP3 和 QUIC。

### **检查浏览器支持**

以下是主流浏览器开始默认支持 HTTP/3 的版本号：

| 浏览器  | 版本号             | 备注                                           |
| ------- | ------------------ | ---------------------------------------------- |
| Chrome  | 87 (2020 年 4 月)  | 大多数基于 Chromium 的其他浏览器应当也同步实现 |
| Edge    | 87 (2020 年 4 月)  | 新 Chromium Edge，旧版 Edge 未实现             |
| Firefox | 88 (2021 年 4 月)  |
| Safari  | 16.4(2023 年 3 月) | 似乎仍在测试中，注意你的 Safari 版本           |

### **检查系统代理**

系统代理会导致浏览器不使用 HTTP/3(基于 PAC 的代理和透明代理没有影响)，因此如果你有代理软件，请临时关闭或将本站加入系统代理排除列表(**不是代理软件的排除列表**，Windows 下位于`设置->网络和Internet->手动设置代理->编辑`)

# 四、技术栈

## 前端

- [Svelte](https://svelte.dev)(前端 UI 框架)
- [Sveltekit](https://kit.svelte.dev)(前端项目框架)
- [Typescript](https://www.typescriptlang.org)(前端项目语言)
- [Tailwindcss](https://tailwindcss.com)(CSS 框架)

## 后端

- [Rust](https://www.rust-lang.org)(后端项目语言)
- [Actix](https://actix.rs)(后端项目框架)
- [Sea ORM](https://www.sea-ql.org/SeaORM)(ORM 框架)
- [Redis](https://redis.com)(状态缓存)
- [Utoipa](https://crates.io/crates/utoipa-swagger-ui)(Swagger 文档)
