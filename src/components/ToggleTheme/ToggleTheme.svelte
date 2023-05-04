<script lang="ts">
  import { browser } from '$app/environment';
  import MdBrightness2 from 'svelte-icons/md/MdBrightness2.svelte';
  import MdBrightness4 from 'svelte-icons/md/MdBrightness4.svelte';

  let darkMode = false;

  if (browser) {
    const localThemeMode = localStorage.getItem('theme');
    document.documentElement.classList.toggle('dark', localThemeMode === 'dark');
    darkMode = localThemeMode === 'dark';
  }

  function handleClick() {
    darkMode = !darkMode;
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }
</script>

<button title="toggle theme" type="button" class="z-20 relative w-6 h-6" on:click={handleClick}>
  <div class="theme-icon" class:active={!darkMode}><MdBrightness4 /></div>
  <div class="theme-icon" class:active={darkMode}><MdBrightness2 /></div>
</button>

<style lang="postcss">
  .theme-icon {
    @apply absolute top-0 left-0 w-full h-full invisible opacity-0 -translate-y-2 duration-300;
  }
  .theme-icon.active {
    @apply visible opacity-100 translate-y-0;
  }
</style>
