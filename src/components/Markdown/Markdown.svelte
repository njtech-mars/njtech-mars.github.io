<script lang="ts">
  import type { ComponentType } from 'svelte';

  export let content: ComponentType;
</script>

<article>
  <svelte:component this={content} />
</article>

<style lang="postcss">
</style>
