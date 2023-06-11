<script lang="ts">
  import { links } from "$stores/links";

  import Tags from "./Tags.svelte";
  import LinkCard from "$components/LinkCard/LinkCard.svelte";
</script>

<svelte:head>
  <title>Mars工作室 • 资源推荐</title>
</svelte:head>

<main class="frame flex-1 flex flex-col gap-2">
  <h1 class="text-2xl font-semibold">所有资源</h1>

  <div class="flex flex-col gap-3">
    <Tags {links} />

    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 animate-slideFromBottom">
      {#each $links.links as link (link.name)}
        {#key link}
          <li><LinkCard {link} /></li>
        {/key}
      {/each}
    </ul>
  </div>
</main>
