<script lang="ts">
  import { posts } from "$stores/posts";
</script>

<div class="wrapper">
  <h1 class="text-xl font-semibold">标签</h1>
  <ul class="flex flex-row flex-wrap gap-2">
    <li>
      <button type="button" class="tag" class:active={$posts.activeTag === ""} on:click={() => posts.set("")}>
        &num;全部({$posts.tags.length})
      </button>
    </li>
    {#each $posts.tags as tag (tag.name)}
      <li>
        <button
          type="button"
          on:click={() => posts.set(tag.name)}
          class="tag"
          class:active={$posts.activeTag === tag.name}
        >
          &num;{tag.name}({tag.count})
        </button>
      </li>
    {/each}
  </ul>
</div>

<style lang="postcss">
  .wrapper {
    @apply w-full flex flex-col gap-3 p-5 h-fit rounded-xl border border-gray-300 dark:border-gray-500;
  }
  .tag {
    @apply text-sm py-1 px-2 rounded-2xl text-blue-600 border border-blue-600;
  }
  .tag.active {
    @apply bg-blue-600 text-white;
  }
</style>
