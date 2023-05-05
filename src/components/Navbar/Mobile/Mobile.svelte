<script lang="ts">
  import { links } from "../config";
  import { page } from "$app/stores";
  import MdMenu from "svelte-icons/md/MdMenu.svelte";
  import MdClose from "svelte-icons/md/MdClose.svelte";

  let openMenu = false;
</script>

<div class="md:hidden flex items-center justify-center">
  <button type="button" title="菜单" aria-label="菜单" class="menu-btn" on:click={() => (openMenu = !openMenu)}>
    <div class="menu-icon" class:active={openMenu}><MdClose /></div>
    <div class="menu-icon" class:active={!openMenu}><MdMenu /></div>
  </button>

  <ul class="menu" class:active={openMenu}>
    {#each links as link (link.name)}
      {@const pathname = $page.url.pathname.split("/").slice(0, 2).join("/")}
      <li>
        <a
          href={link.link}
          title={link.name}
          class="link"
          class:active={pathname === link.link}
          on:click={() => (openMenu = false)}
        >
          {link.name}
        </a>
      </li>
    {/each}
  </ul>
</div>

<style lang="postcss">
  .menu-btn {
    width: 28px;
    height: 28px;
    @apply relative z-20;
  }
  .menu-icon {
    @apply w-full h-full absolute top-0 right-0 invisible duration-300 opacity-0 -translate-y-2;
  }

  .menu-icon.active {
    @apply visible opacity-100 translate-y-0;
  }
  .menu {
    height: 100vh;
    height: 100svh;
    @apply z-10 duration-300 fixed top-0 left-0 pt-36 w-full flex items-center flex-col gap-5 invisible scale-y-90 opacity-0 origin-top-right dark:bg-dark bg-gray-100;
  }
  .menu.active {
    @apply scale-y-100 opacity-100 visible;
  }
  .link {
    @apply text-2xl font-bold;
  }
  .link.active {
    @apply text-blue-600;
  }
</style>
