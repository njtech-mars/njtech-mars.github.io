<script lang="ts">
  export let title: string;
</script>

<p>{title}</p>

<style lang="postcss">
  p {
    @apply flex items-center justify-center text-lg;
    height: calc(101vh - 2.5rem * 2 - 3.25rem * 2);
    height: calc(101svh - 2.5rem * 2 - 3.25rem * 2);
  }
  @media (min-width: 768px) {
    p {
      height: calc(101vh - 2.5rem * 2 - 3.25rem - 2rem);
      height: calc(101svh - 2.5rem * 2 - 3.25rem - 2rem);
    }
  }
</style>
