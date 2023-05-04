<script lang="ts">
  import { schoolLinks } from '$stores/schoolLinks';
  import Tags from '$components/Tags/Tags.svelte';
  import LinkCard from '$components/LinkCard/LinkCard.svelte';
</script>

<main class="w-full flex-1 frame py-5 md:py-10 flex flex-col gap-5">
  <Tags linksStore={schoolLinks} />

  <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 animate-slideFromBottom">
    {#each $schoolLinks.links as link (link.name)}
      {#key link}
        <LinkCard {link} />
      {/key}
    {/each}
  </ul>
</main>
