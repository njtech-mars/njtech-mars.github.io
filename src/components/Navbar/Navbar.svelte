<script lang="ts">
  import Normal from './Normal/Normal.svelte';
  import Mobile from './Mobile/Mobile.svelte';
  import ToggleTheme from '$components/ToggleTheme/ToggleTheme.svelte';
</script>

<nav class="frame pt-5 w-full flex flex-row items-center justify-between">
  <a href="/" class="text-xl font-semibold animate-slideFromLeft z-20"> 南工向导 </a>

  <div class="flex flex-row items-center gap-3">
    <Normal />
    <ToggleTheme />
    <Mobile />
  </div>
</nav>
