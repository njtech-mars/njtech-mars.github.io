<script lang="ts">
  import { onMount } from "svelte";

  import FaTag from "svelte-icons/fa/FaTag.svelte";
  import FaAlignLeft from "svelte-icons/fa/FaAlignLeft.svelte";

  import type { PostMetadatType } from "$types/postMetadata";

  export let post: PostMetadatType;

  onMount(() => {
    const toc = document.querySelector(".toc");
    const container = document.querySelector(".toc-container");

    if (toc && container) {
      toc.classList.remove("hidden");
      container.classList.remove("hidden");
      container.insertAdjacentElement("beforeend", toc);
    }
  });
</script>

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

<style lang="postcss">
  .sidebar {
    @apply hidden md:flex flex-col gap-5 h-fit sticky top-5;
  }
  .tags {
    @apply flex flex-col gap-1;
  }
  :is(.tags, .toc-container) {
    @apply border border-gray-300 dark:border-gray-500 rounded-xl p-5;
  }
  .toc-container {
    @apply overflow-x-auto;
  }
</style>
