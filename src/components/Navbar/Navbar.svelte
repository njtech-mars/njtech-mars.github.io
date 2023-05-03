<script lang="ts">
  import { links } from './config';
  import { page } from '$app/stores';
  import ToggleTheme from '$components/ToggleTheme/ToggleTheme.svelte';
</script>

<nav class="frame pt-5 w-full flex flex-row items-center justify-between">
  <h1 class="text-xl font-semibold animate-slideFromLeft">南工向导</h1>

  <div class="flex flex-row items-center gap-2">
    <ul class="flex flex-row gap-2">
      {#each links as link (link.name)}
        {@const pathname = $page.url.pathname.split('/').slice(0, 2).join('/')}
        <li>
          <a href={link.link} class="link" class:active={link.link === pathname}>{link.name}</a>
        </li>
      {/each}
    </ul>
    <ToggleTheme />
  </div>
</nav>

<style lang="postcss">
  .link {
    @apply font-semibold;
  }
  .link.active {
    @apply text-blue-600;
  }
</style>
