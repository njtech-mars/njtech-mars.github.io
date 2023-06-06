---
title: "南工快传——工作室新项目"
date: "2023-05-22T06:16:44.776Z"
update: "2023-06-05T06:52:25.626Z"
author: "蔡建文"
tags: ["南工快传", "项目"]
intro: "提供校内快速上传和下载文件的短期存储网盘服务"
---

# 一、介绍

南工快传是由 Mars 工作室负责开发运维的校内网盘工具，区别于常规的网盘工具，我们只提供文件的 **短期存储服务**，文件的最长存储有效时间是 **7 天**。

你可以在校内任何连接了校园网的电脑或者手机上进行访问。传输均使用校园内网传输，**不消耗校园网流量**。

南工快传使用 **I 南工** 作为统一登录接口，现在你可以通过以下链接开始使用南工快传：

- [https://send.online.njtech.edu.cn](https://send.online.njtech.edu.cn)

# 二、使用说明

- 支持多个文件同时上传，但不能上传文件夹，文件夹请压缩后再上传
- 默认每个用户文件最长存储时间为 7 天，最大存储空间为 4GB，如果后续有调整请关注我们的通知。
- 私有文件仅自己可以访问，公开文件支持设置独立的文件密码，不设密码的公开文件可以被其他人访问和下载
- 单个文件可设置方便记忆的短链接，由 `id` 加上 `s` 前缀构成，如`https://send.online.njtech.edu.cn/s/custom_id`。设置短链接时只需要提供最后的 `custom_id`，并且应当是一个安全的 URL 字符串(大小写英文字母，阿拉伯数字和 `%` `-` `.` `_` `~` 这些符号)

# 三、常见问题

## 1. 我可以预览哪些文件

目前支持预览的文件列表如下：

| 文件类型 | 扩展名                              |
| :------- | :---------------------------------- |
| 图片     | png, jpg, jpeg, webp, gif, bmp, ico |
| 视频     | mp4, webm, ogg                      |
| 音频     | mp3, mpeg, ogg                      |

## 2. 使用消耗校园网流量吗

使用南工快传不消耗校园网流量，和南工在线一样校内访问免流。

# 四、技术栈

## 1. 前端

- [Svelte](https://svelte.dev)(前端 UI 框架)
- [Sveltekit](https://kit.svelte.dev)(前端项目框架)
- [Typescript](https://www.typescriptlang.org)(前端项目语言)
- [Tailwindcss](https://tailwindcss.com)(CSS 框架)

## 2. 后端

- [Rust](https://www.rust-lang.org)(后端项目语言)
- [Actix](https://actix.rs)(后端项目框架)
- [Sea ORM](https://www.sea-ql.org/SeaORM)(ORM 框架)
- [Redis](https://redis.com)(状态缓存)
- [Utoipa](https://crates.io/crates/utoipa-swagger-ui)(Swagger 文档)
