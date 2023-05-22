---
title: "南工快传——工作室新项目"
date: "2023-05-22T06:16:44.776Z"
update: "2023-05-22T06:16:44.776Z"
author: "蔡建文"
tags: ["南工快传", "项目"]
intro: "方便在校内快速上传和下载文件的网盘工具"
---

# 一、介绍

南工快传是由 Mars 工作室负责开发运维的校内网盘工具，区别于常规的网盘工具，我们只提供文件的 **短期存储服务**，文件的最长存储有效时间是 **7 天**。另外每个学生或者老师的最大文件存储空间是 **4GB**。你可以在校内任何连接了校园网的电脑或者手机上进行访问，支持手机端和客户端。

南工快传使用 **I 南工** 作为统一登录接口，现在你可以通过以下链接开始使用南工快传：

- [https://send.online.njtech.edu.cn](https://send.online.njtech.edu.cn)

# 二、使用事项

- 文件最长存储时间为 7 天
- 每位用户最大存储空间为 4GB
- 支持多个文件同时上传，但不能上传文件夹，文件夹请压缩后再上传
- 文件支持设立独立的文件密码，不设密码的文件视为公开文件，可以被所有人访问
- 单个文件可设置方便记忆短链接 id，通过https://send.online.njtech.edu.cn/s/custom_id访问

# 三、技术栈

## 1. 前端

- [Zod](https://zod.dev)
- [Svelte](https://svelte.dev)
- [Sveltekit](https://kit.svelte.dev)
- [Typescript](https://www.typescriptlang.org)
- [Tailwindcss](https://tailwindcss.com)

## 2. 后端

- [Rust](https://www.rust-lang.org)
