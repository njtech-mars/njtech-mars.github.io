<script lang="ts">
  import type { LinksStoreType } from '$types/link';

  export let linksStore: LinksStoreType;
</script>

<div class="w-full flex flex-row gap-2 animate-slideFromTop overflow-x-auto p-1">
  <button
    type="button"
    title="全部"
    class="tag"
    class:active={!$linksStore.activeTag}
    on:click={() => linksStore.set('')}
  >
    全部
  </button>
  {#each $linksStore.tags as tag (tag)}
    <button
      title={tag}
      class="tag"
      type="button"
      on:click={() => linksStore.set(tag)}
      class:active={$linksStore.activeTag === tag}
    >
      {tag}
    </button>
  {/each}
</div>

<style lang="postcss">
  .tag {
    box-shadow: 0 0 5px #80808060;
    @apply whitespace-nowrap py-0.5 px-1.5 rounded-md border border-gray-300 dark:border-gray-300/0;
  }
  .tag.active {
    @apply text-blue-600;
  }
</style>
