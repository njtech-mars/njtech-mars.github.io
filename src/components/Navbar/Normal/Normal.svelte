<script lang="ts">
  import { links } from '../config';
  import { page } from '$app/stores';
</script>

<ul class="hidden md:flex flex-row gap-2 font-semibold text-lg">
  {#each links as link (link.name)}
    {@const pathname = $page.url.pathname.split('/').slice(0, 2).join('/')}
    <li>
      <a href={link.link} class="link" class:active={pathname === link.link}>{link.name}</a>
    </li>
  {/each}
</ul>

<style lang="postcss">
  .link.active {
    @apply text-blue-600;
  }
</style>
