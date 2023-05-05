<script lang="ts">
  import { onMount } from "svelte";
  import FaTag from "svelte-icons/fa/FaTag.svelte";
  import FaRegUser from "svelte-icons/fa/FaRegUser.svelte";
  import FaAlignLeft from "svelte-icons/fa/FaAlignLeft.svelte";
  import FaRegCalendarAlt from "svelte-icons/fa/FaRegCalendarAlt.svelte";

  import type { PageData } from "./$types";
  import { formatDate, timeAgo } from "$lib/utils";

  export let data: PageData;

  onMount(() => {
    const toc = document.querySelector(".toc");
    const container = document.querySelector(".toc-container");
    if (toc && container) container.insertAdjacentElement("beforeend", toc);
  });
</script>

<main class="w-full flex-1 frame py-10 flex flex-col gap-5 animate-slideFromBottom">
  <header class="flex flex-col gap-0.5 md:gap-3">
    <h1 class="text-2xl md:text-3xl font-semibold">{data.title}</h1>

    <div class="flex flex-row items-center gap-1 text-gray-500 text-sm">
      <div class="flex flex-row items-center gap-0.5">
        <div class="w-3 h-3"><FaRegCalendarAlt /></div>
        <div>{formatDate(data.date)}</div>
        <div>(上次更新{timeAgo(data.update)})</div>
      </div>

      <p>•</p>

      <div class="flex flex-row items-center gap-0.5">
        <div class="w-3 h-3"><FaRegUser /></div>
        <div>{data.author}撰写</div>
      </div>
    </div>
  </header>

  <article class="markdown">
    <div class="w-full content">
      <svelte:component this={data.content} />
    </div>

    <div class="sidebar">
      <div class="tags">
        <div class="flex flex-row items-center gap-1">
          <div class="w-4 h-4"><FaTag /></div>
          <div class="text-lg">标签</div>
        </div>
        <div class="flex flex-row flex-wrap gap-2 text-xs">
          {#each data.tags as tag (tag)}
            <span class="py-1 px-2 rounded-2xl text-blue-600 bg-blue-600/20">&num;{tag}</span>
          {/each}
        </div>
      </div>

      <div class="toc-container">
        <div class="flex flex-row items-center">
          <div class="w-4 h-4"><FaAlignLeft /></div>
          <div class="text-lg">目录</div>
        </div>
      </div>
    </div>
  </article>
</main>

<style lang="postcss">
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
    width: 20rem;
    @apply hidden md:flex flex-col gap-5 h-fit sticky top-5;
  }
</style>
