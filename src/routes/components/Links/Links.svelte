<script lang="ts">
  import { links } from "$stores/links";
  import LinkCard from "$components/LinkCard/LinkCard.svelte";
</script>

<div class="flex flex-col gap-2 opacity-0 animate-slideFromBottom animation-delay-500">
  <div class="w-full flex flex-row justify-between items-end">
    <h1 class="text-2xl font-semibold">资源推荐</h1>
    <a href="/links" title="资源推荐" class="text-blue-600 hover:underline">更多...</a>
  </div>

  <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
    {#each $links.pinned.slice(0, 6) as link (link.name)}
      {#key link}
        <li><LinkCard {link} disabled={true} /></li>
      {/key}
    {/each}
  </ul>
</div>
