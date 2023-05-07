<script lang="ts">
  import Card from "./Card.svelte";
  import { mirrors } from "$stores/mirrors";

  let timeoutId: number;
  function debounceInput(event: Event) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      mirrors.setSearchKeywrds((event.target as HTMLInputElement).value.trim().toLowerCase());
    }, 700);
  }

  let totalCount = 0,
    successCount = 0,
    failedCount = 0,
    syncingCount = 0;

  $: {
    totalCount = $mirrors.mirrors.length;
    successCount = $mirrors.mirrors.filter((mirror) => mirror.status === "success").length;
    failedCount = $mirrors.mirrors.filter((mirror) => mirror.status === "failed").length;
    syncingCount = $mirrors.mirrors.filter((mirror) => mirror.status === "syncing").length;
  }
</script>

<div class="w-full flex flex-col gap-5">
  <input type="text" title="筛选" placeholder="Search..." on:input={debounceInput} />

  <div class="hidden md:grid grid-cols-2 gap-2">
    <Card title="所有镜像" value={totalCount} />
    <Card title="同步中" value={syncingCount} />
    <Card title="同步成功" value={successCount} />
    <Card title="同步失败" value={failedCount} />
  </div>
</div>

<style lang="postcss">
  input {
    @apply w-full bg-gray-100 dark:bg-dark outline-none py-1.5 px-3;
    @apply border border-gray-300 dark:border-gray-500 rounded-sm focus:border-blue-600;
  }
</style>
