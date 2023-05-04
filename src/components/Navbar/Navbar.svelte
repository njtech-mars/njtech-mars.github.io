<script lang="ts">
  import { links } from './config';
  import { page } from '$app/stores';
  import ToggleTheme from '$components/ToggleTheme/ToggleTheme.svelte';
</script>

<nav class="frame pt-5 w-full flex flex-row items-center justify-between">
  <a href="/" class="text-xl font-semibold animate-slideFromLeft"> 南工向导 </a>

  <div class="flex flex-row items-center gap-3">
    <ul class="flex flex-row gap-2 font-semibold text-lg">
      {#each links as link (link.name)}
        {@const pathname = $page.url.pathname.split('/').slice(0, 2).join('/')}
        <li>
          <a href={link.link} class="link" class:active={pathname === link.link}>{link.name}</a>
        </li>
      {/each}
    </ul>
    <ToggleTheme />
  </div>
</nav>

<style lang="postcss">
  .link.active {
    @apply text-blue-600;
  }
</style>
