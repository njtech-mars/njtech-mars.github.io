---
title: "关于本站以及如何修改本站内容"
date: "2023-05-06T06:12:14.636Z"
update: "2023-05-08T09:00:22.515Z"
author: "蔡建文"
tags: ["教程", "规范"]
intro: "如何修改本站内容，包括如何添加资源链接和书写文章动态"
---

# 一、关于本站

## 1. 技术栈

本站使用的前端 UI 框架是 [Svelte](https://svelte.dev)，项目框架是 [Sveltekit](https://kit.svelte.dev)，使用 [mdsvex](https://mdsvex.pngwn.io) 作为 markdown 渲染引擎。使用 Docker 部署在校内的网站是静态网页，校外是部署在 [Vercel](https://vercel.com)。

如果你是后面的新人，并且有心想要继续接手和丰富本站内容，你可以前往我的[个人仓库](https://github.com/MR-Addict/studio)找到这个项目的源码，你也可以在 GitHub 上找到我的联系方式。目前 Mars 工作室还没有 GitHub 组织。

## 2. 链接

- [https://marsstudio.vercel.app(公网访问)](https://marsstudio.vercel.app)
- [https://studio.online.njtech.edu.cn(内网访问)](https://studio.online.njtech.edu.cn)

目前本站可以修改的内容包括 **资源链接** 和 **文章动态**，下面简单介绍一下如何修改这些内容。

# 二. 如何添加资源链接

## 1. 文件路径

资源链接的文件路径是 `/src/stores/links/data.ts`，你可以修改其中的内容来添加新的链接。

## 2. 链接格式

每个资源链接都有一定的规范要求，请参考下面南工在线的例子：

```ts
{
  name: "南工在线",
  icon: MdOndemandVideo,
  link: "https://online.njtech.edu.cn",
  subtitle: "视频播放平台，软件下载",
  tags: ["校内", "视频"],
  heat: 0.9,
  pinned: true
}
```

- **icon** 可以到这个网址[https://svelte-icons.vercel.app](https://svelte-icons.vercel.app)查找，将复制的内容贴到文件的最上方就可以了。
- **heat** 表示推荐指数，范围在应该在 `0-1`。
- **pinned** 指放在首页的资源，请和管理员商量后再决定哪些可以放在首页，首页最多展示 6 个。

推荐的资源可以是校内的，也可以是校外的，资源内容应该和技术相关，有学习和启发意义。

# 三. 如何添加和书写文章

## 1. 文件路径

文章使用 markdown 进行书写，文件路径在 `/src/posts`，不要在该路径下存放除 markdown 以外的其他文件；markdown 暂不支持本地图片，只能使用可访问的图片 url。

> 图片存放比较妥帖的办法还是放在本地，这样图片就不会因外界的变化而丢失了，只要项目还在，GitHub 还在。
>
> 关于如何使用本地图片，你可以参考我搬运陈宇明学长介绍南工在线的例子。方法就是将图片存放到项目`static`中，这么做就是有些不优雅，没有图片优化，但是一篇文章如果某个点需要图片的才能表述清晰的话，这么做也没问题。

添加新的文章的时候文件名应该使用和文章内容意思相近的 **英文**，不推荐使用中文作为文件名。

## 2. metadata

每个 markdown 的开头应该包含一个 **metadata**，请参考本例的 metadata：

```yaml
---
title: "如何修改本站内容"
date: "2023-05-06T06:12:14.636Z"
update: "2023-05-07T16:50:21.414Z"
author: "蔡建文"
tags: ["教程", "规范"]
intro: "如何修改本站内容，包括如何添加资源链接和书写文章动态"
---
```

其中 **date** 是创建日期，**update** 是更新日期，都需要手动更新和创建，日期格式应该采用 **ISO** 格式。你可以在可以运行 js 的环境下运行下面这行代码得到当前的 ISO 时间：

```js
console.log(new Date().toISOString());
```

作者你可以写自己的真实姓名或者其他昵称都可以，不做要求。

## 3. 热重载

本站文章书写支持热重载，可以实时更新书写的 markdown 内容。但是书写文章前要先创建好 markdown 文件，并添加完整的 metadata，不然启动会报错。

添加好 markdown 之后，输入以下命令进入开发模式：

```sh
npm run dev
```

之后在浏览器打开[http://localhost:5173](http://localhost:5173)这个网址就可以开始写了，markdown 保存之后会自动更新网页内容。

## 4. 书写规范

markdown 书写应该遵循一些规范，建议参考本例的原始文章，这里有几个比较重要的点：

- 各个元素之间应该使用两个换行符，也就是段落之间要有一个换行。
- 使用正确的标签，大标题是#，次级表示是##，以此类推。
- 建议使用序号标注标题，如大标题 **一，二，三**，次级标题 **1,2,3**等，使文章更有条理。
- 对文章质量的要求严格，用词合理，内容严谨。
