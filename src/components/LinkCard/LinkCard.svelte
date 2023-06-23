<script lang="ts">
  import type { LinkType } from "$types/link";

  export let link: LinkType;
</script>

<div class="wraper" style={`--heat:${link.heat}`}>
  <div class="w-20 text-blue-500">
    <svelte:component this={link.icon} />
  </div>

  <div class="w-full flex flex-col justify-between gap-2">
    <a href={link.link} title={link.name} target="_blank" class="text-xl hover:text-blue-600 w-fit">
      {link.name}
    </a>

    <p class="text-gray-500 dark:text-gray-300">{link.subtitle}</p>

    <div class="flex flex-row flex-wrap gap-1.5">
      {#each link.tags as tag (tag)}
        <span class="tag">{tag}</span>
      {/each}
    </div>

    <div class="bar" />
  </div>
</div>

<style lang="postcss">
  .wraper {
    @apply h-full flex flex-row gap-5 rounded-xl p-5 md:p-7 duration-300 border border-gray-300 dark:border-gray-500;
  }
  .tag {
    @apply text-sm px-1 rounded-sm bg-green-600/20 text-green-600;
  }
  .bar {
    @apply w-full h-2 rounded-md border relative mt-1 border-blue-600;
  }
  .bar::before {
    content: "";
    animation: grow 700ms ease;
    width: calc(var(--heat) * 100%);
    @apply absolute top-0 left-0 h-full rounded-md opacity-75 bg-blue-600;
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
