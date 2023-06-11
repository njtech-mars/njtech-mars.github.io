<script lang="ts">
  import { onMount } from "svelte";
  import { theme } from "$stores/theme";

  import MdBrightness2 from "svelte-icons/md/MdBrightness2.svelte";
  import MdBrightness4 from "svelte-icons/md/MdBrightness4.svelte";

  onMount(() => theme.set(localStorage.getItem("theme") === "dark"));

  function handleClick() {
    theme.update((prev) => !prev);
    document.body.classList.toggle("dark", $theme);
    document.body.style.colorScheme = $theme ? "dark" : "light";
    localStorage.setItem("theme", $theme ? "dark" : "light");
  }
</script>

<button title="主题" type="button" class="z-20 relative w-6 h-6" on:click={handleClick}>
  <div class="theme-icon" class:active={!$theme}><MdBrightness4 /></div>
  <div class="theme-icon" class:active={$theme}><MdBrightness2 /></div>
</button>

<style lang="postcss">
  .theme-icon {
    @apply absolute top-0 left-0 w-full h-full invisible opacity-0 -translate-y-2 duration-300;
  }
  .theme-icon.active {
    @apply visible opacity-100 translate-y-0;
  }
</style>
