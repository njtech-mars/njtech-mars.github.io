<script lang="ts">
  import FaShare from 'svelte-icons/fa/FaShare.svelte';

  import { links } from '$stores/links';
  import type { LinkType } from '$types/link';

  export let link: LinkType;
</script>

<li class="wraper">
  <div class="w-16" style={`color:${link.color}`}>
    <svelte:component this={link.icon} />
  </div>

  <div class="flex flex-col gap-2">
    <a href={link.link} target="_blank" class="flex flex-row items-center gap-2 hover:text-blue-600 duration-200">
      <h1 class="text-xl font-semibold">{link.name}</h1>
      <div class="h-3">
        <FaShare />
      </div>
    </a>

    <p>{link.subtitle}</p>

    <div class="flex flex-row flex-wrap gap-1">
      {#each link.tags as tag}
        <button type="button" title={tag} class="tag" on:click={() => links.filter(tag)}>{tag}</button>
      {/each}
    </div>

    <button type="button" class="text-sm w-fit text-blue-600 underline">查看简介...</button>
  </div>
</li>

<style lang="postcss">
  .wraper {
    --shadow-color: #8181815f;
    box-shadow: 0 0 10px var(--shadow-color);
    @apply flex flex-row gap-5 rounded-xl p-7 duration-300;
  }
  .wraper:hover {
    box-shadow: 0 0 30px var(--shadow-color);
    @apply md:translate-y-1;
  }
  .tag {
    @apply text-sm px-1 rounded-sm bg-blue-600/10 text-blue-600;
  }
</style>
