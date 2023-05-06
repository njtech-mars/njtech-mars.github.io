<script lang="ts">
  import { links } from "$stores/links";
  import LinkCard from "$components/LinkCard/LinkCard.svelte";
</script>

<div class="flex flex-col gap-2">
  <div class="w-full flex flex-row justify-between items-end">
    <h1 class="text-2xl font-semibold">资源推荐</h1>
    <a href="/links" title="资源推荐" class="text-blue-600 hover:underline">更多...</a>
  </div>

  <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 animate-slideFromBottom">
    {#each $links.pinned as link (link.name)}
      {#key link}
        <LinkCard {link} disabled={true} />
      {/key}
    {/each}
  </ul>
</div>
