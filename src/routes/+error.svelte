<script>
  import { page } from "$app/stores";
</script>

<main>{$page.status} | {$page.error?.message || "Error"}</main>

<style lang="postcss">
  main {
    @apply w-full flex-1 flex items-center justify-center text-2xl;
  }
</style>
