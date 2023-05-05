<script lang="ts">
  import type { LinksStoreType } from '$types/link';

  export let links: LinksStoreType;
</script>

<div class="w-full flex flex-row gap-2 animate-slideFromTop overflow-x-auto p-1">
  <button type="button" title="全部" class="tag" class:active={!$links.activeTag} on:click={() => links.set('')}>
    全部
  </button>
  {#each $links.tags as tag (tag.name)}
    <button
      title={tag.name}
      class="tag"
      type="button"
      on:click={() => links.set(tag.name)}
      class:active={$links.activeTag === tag.name}
    >
      {tag.name}
    </button>
  {/each}
</div>

<style lang="postcss">
  .tag {
    box-shadow: 0 0 5px #80808060;
    @apply whitespace-nowrap py-0.5 px-1.5 rounded-md border border-gray-300 dark:border-gray-300/0;
  }
  .tag.active {
    @apply text-orange-600;
  }
</style>
