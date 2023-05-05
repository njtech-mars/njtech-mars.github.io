<script lang="ts">
  import { posts } from '$stores/posts';
</script>

<div class="wrapper">
  <h1 class="text-xl text-blue-600 font-semibold">标签</h1>
  <ul class="flex flex-row flex-wrap gap-2">
    <li>
      <button
        type="button"
        title="全部"
        class="tag"
        class:active={$posts.activeTag === ''}
        on:click={() => posts.set('')}
      >
        &num;全部({$posts.tags.length})
      </button>
    </li>
    {#each $posts.tags as tag (tag.name)}
      <li>
        <button
          type="button"
          title={tag.name}
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
    box-shadow: 0 0 10px #8181815f;
    @apply flex flex-col gap-3 p-5 h-fit rounded-xl animate-slideFromBottom w-full;
  }
  .tag {
    @apply text-sm py-1 px-2 rounded-2xl text-blue-600 border border-blue-600;
  }
  .tag.active {
    @apply bg-blue-600 text-white;
  }
  @media (min-width: 768px) {
    .wrapper {
      width: 20rem;
      @apply sticky top-5 animate-slideFromRight;
    }
  }
</style>
