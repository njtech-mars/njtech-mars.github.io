<script lang="ts">
  export let title: string;
  export let value: number;
</script>

<div>
  <h1 class="whitespace-nowrap text-sm">{title}</h1>
  <p>{value}</p>
</div>

<style lang="postcss">
  div {
    @apply flex flex-row items-center justify-between rounded-sm px-3 py-2 border border-gray-300 dark:border-gray-500;
  }
</style>
