<script lang="ts">
  import FaShare from 'svelte-icons/fa/FaShare.svelte';

  import { links } from '$stores/links';
  import type { LinkType } from '$types/link';

  export let link: LinkType;
</script>

<li class="wraper" style={`--color:${link.color};--heat:${link.heat}`}>
  <div class="w-20" style={`color:${link.color}`}>
    <svelte:component this={link.icon} />
  </div>

  <div class="w-full flex flex-col gap-2">
    <a href={link.link} target="_blank" class="flex flex-row items-center flex-wrap gap-2 hover:text-blue-600">
      <h1 class="text-xl font-semibold">{link.name}</h1>
      <div class="h-3">
        <FaShare />
      </div>
    </a>

    <p>{link.subtitle}</p>

    <div class="flex flex-row flex-wrap gap-1.5">
      {#each link.tags as tag (tag)}
        <button type="button" title={tag} class="tag" on:click={() => links.set(tag)}>{tag}</button>
      {/each}
    </div>

    <div class="bar" />
  </div>
</li>

<style lang="postcss">
  .wraper {
    box-shadow: 0 0 10px #8181815f;
    @apply flex flex-row gap-3 md:gap-5 rounded-xl p-4 md:p-7 duration-300;
  }
  .tag {
    @apply text-sm px-1 rounded-sm bg-blue-600/20 text-blue-600;
  }
  .bar {
    border-color: var(--color);
    @apply w-full h-2 rounded-md border relative mt-1;
  }
  .bar::before {
    content: '';
    background: var(--color);
    animation: grow 700ms ease;
    width: calc(var(--heat) * 100%);
    @apply absolute top-0 left-0 h-full rounded-l-md opacity-70;
  }
  @keyframes grow {
    from {
      width: 0;
    }
    to {
      width: calc(var(--heat) * 100%);
    }
  }
</style>
