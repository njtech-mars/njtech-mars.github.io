<script lang="ts">
  import { links } from '$stores/links';
  import LinkCard from './components/LinkCard/LinkCard.svelte';
</script>

<main class="w-full frame py-5 flex flex-col gap-5">
  <div class="flex flex-row gap-2">
    <button type="button" title="所有" class="tag" on:click={() => links.reset()}>所有</button>
    {#each links.tags as tag}
      <button type="button" title={tag} class="tag" on:click={() => links.filter(tag)}>{tag}</button>
    {/each}
  </div>

  <ul>
    {#each $links as link}
      <LinkCard {link} />
    {/each}
  </ul>
</main>

<style lang="postcss">
  main {
    @apply w-full flex-1;
  }
  ul {
    @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10;
  }
  .tag {
    box-shadow: 0 0 10px #80808050;
    @apply py-0.5 px-1.5 rounded-md;
  }
</style>
