<script lang="ts">
  import { links } from '$stores/links';
  import LinkCard from './components/LinkCard/LinkCard.svelte';
</script>

<main class="w-full flex-1 frame py-5 flex flex-col gap-5">
  <div class="w-full flex flex-row gap-2 animate-slideFromTop overflow-x-auto p-1">
    <button type="button" title="所有" class="tag" class:active={!$links.activeTag} on:click={() => links.set('')}>
      所有
    </button>
    {#each $links.tags as tag}
      <button
        title={tag}
        class="tag"
        type="button"
        on:click={() => links.set(tag)}
        class:active={$links.activeTag === tag}
      >
        {tag}
      </button>
    {/each}
  </div>

  <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 animate-slideFromBottom">
    {#each $links.links as link (link.name)}
      <LinkCard {link} />
    {/each}
  </ul>
</main>

<style lang="postcss">
  .tag {
    box-shadow: 0 0 5px #80808060;
    @apply whitespace-nowrap py-0.5 px-1.5 rounded-md border border-gray-300 dark:border-gray-300/0;
  }
  .tag.active {
    @apply text-blue-600;
  }
</style>
