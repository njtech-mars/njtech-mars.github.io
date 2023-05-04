<script lang="ts">
  import { links } from '$stores/links';
  import ToggleTheme from '$components/ToggleTheme/ToggleTheme.svelte';
</script>

<nav class="frame pt-5 w-full flex flex-row items-center justify-between">
  <button type="button" class="text-xl font-semibold animate-slideFromLeft" on:click={() => links.set('')}>
    南工向导
  </button>

  <ToggleTheme />
</nav>
