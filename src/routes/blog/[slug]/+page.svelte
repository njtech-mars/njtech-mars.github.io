<script lang="ts">
  import { onMount } from "svelte";

  import FaTag from "svelte-icons/fa/FaTag.svelte";
  import FaRegUser from "svelte-icons/fa/FaRegUser.svelte";
  import FaAlignLeft from "svelte-icons/fa/FaAlignLeft.svelte";
  import FaRegCalendarAlt from "svelte-icons/fa/FaRegCalendarAlt.svelte";

  import formatDate from "$lib/utils/formatDate";
  import timeInterval from "$lib/utils/timeInterval";

  import Giscus from "./Giscus.svelte";

  export let data;
  const { post, prev, next } = data;

  onMount(() => {
    const toc = document.querySelector(".toc");
    const container = document.querySelector(".toc-container");
    if (toc && container) {
      container.insertAdjacentElement("beforeend", toc);
      container.classList.toggle("hidden");
      toc.classList.toggle("hidden");
    }
  });
</script>

<svelte:head>
  <title>Mars工作室 • 文章动态</title>
  <meta property="og:title" content={post.title} />
</svelte:head>

<main class="w-full flex-1 frame py-10 flex flex-col gap-5 animate-slideFromBottom">
  <header class="flex flex-col gap-0.5 md:gap-2 pl-2">
    <h1 class="text-2xl md:text-3xl font-semibold">{post.title}</h1>

    <div class="flex flex-row items-center flex-wrap gap-1 text-gray-500 text-sm">
      <div class="flex flex-row items-center gap-0.5">
        <div class="w-3 h-3"><FaRegCalendarAlt /></div>
        <div title={formatDate(post.create)}>{"发布于" + timeInterval(post.create)}</div>
        <div title={formatDate(post.update)}>({"更新于" + timeInterval(post.update)})</div>
      </div>

      <div class="flex flex-row items-center gap-0.5">
        <div class="w-3 h-3"><FaRegUser /></div>
        <div>{post.author + "撰写"}</div>
      </div>
    </div>
  </header>

  <article class="markdown">
    <div class="w-full flex flex-col gap-5">
      <div class="content">
        <svelte:component this={post.content} />
      </div>
      <div class="w-full flex flex-row justify-between gap-5">
        {#if prev}
          <a
            data-sveltekit-reload
            href={`/blog/${prev.slug}`}
            class="w-full flex flex-col px-5 py-5 rounded-lg border border-gray-300 hover:border-green-600 duration-300"
          >
            <span>上一篇</span>
            <span class="text-green-600">{"« " + prev.title}</span>
          </a>
        {/if}

        {#if next}
          <a
            data-sveltekit-reload
            href={`/blog/${next.slug}`}
            class="w-full text-end flex flex-col items-end px-5 py-5 rounded-lg border border-gray-300 hover:border-green-600 duration-300"
          >
            <span>下一篇</span>
            <span class="text-green-600">{next.title + " »"}</span>
          </a>
        {/if}
      </div>
    </div>

    <div class="sidebar">
      <div class="tags">
        <div class="flex flex-row items-center gap-1">
          <div class="w-4 h-4"><FaTag /></div>
          <div class="text-lg">标签</div>
        </div>
        <div class="flex flex-row flex-wrap gap-2 text-sm">
          {#each post.tags as tag (tag)}
            <span class="py-1 px-2 rounded-2xl text-green-600 bg-green-600/20">&num;{tag}</span>
          {/each}
        </div>
      </div>

      <div class="toc-container hidden">
        <div class="flex flex-row items-center gap-0.5">
          <div class="w-4 h-4"><FaAlignLeft /></div>
          <div class="text-lg">目录</div>
        </div>
      </div>
    </div>
  </article>

  <Giscus />
</main>

<style lang="postcss">
  .markdown {
    @apply w-full relative flex flex-row justify-between gap-10;
  }
  .tags {
    @apply flex flex-col gap-1;
  }
  .content,
  .tags,
  .toc-container {
    @apply border border-gray-300 dark:border-gray-500 rounded-xl p-5;
  }
  .toc-container {
    @apply overflow-x-auto;
  }
  .sidebar {
    @apply hidden md:flex flex-col gap-5 h-fit sticky top-5 w-80;
  }
</style>
