<script lang="ts">
  import { links } from '$stores/links';
  import type { LinkType } from '$types/link';

  export let link: LinkType;
  export let disabled: boolean = false;
</script>

<li class="wraper" style={`--color:${link.color};--heat:${link.heat}`}>
  <div class="w-20" style={`color:${link.color}`}>
    <svelte:component this={link.icon} />
  </div>

  <div class="w-full flex flex-col justify-between gap-2">
    <a href={link.link} target="_blank" class="text-xl font-semibold hover:text-orange-600 hover:underline w-fit">
      {link.name}
    </a>

    <p>{link.subtitle}</p>

    <div class="flex flex-row flex-wrap gap-1.5">
      {#each link.tags as tag (tag)}
        <button {disabled} type="button" title={tag} class="tag" on:click={() => links.set(tag)}>{tag}</button>
      {/each}
    </div>

    <div class="bar" />
  </div>
</li>

<style lang="postcss">
  .wraper {
    box-shadow: 0 0 10px #8181815f;
    @apply flex flex-row gap-5 rounded-xl p-5 md:p-7 duration-300;
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
    @apply absolute top-0 left-0 h-full rounded-md opacity-70;
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
