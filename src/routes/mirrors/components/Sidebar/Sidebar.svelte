<script lang="ts">
  import Card from "./Card.svelte";
  import { mirrors } from "$stores/mirrors";

  let timeoutId: NodeJS.Timeout | null = null;

  function debounceInput(event: Event) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => mirrors.setSearchKeywords((event.target as HTMLInputElement).value), 700);
  }

  let totalCount = 0;
  let successCount = 0;
  let failedCount = 0;
  let syncingCount = 0;

  $: {
    totalCount = $mirrors.mirrors.length;
    successCount = $mirrors.mirrors.filter((mirror) => mirror.status === "success").length;
    failedCount = $mirrors.mirrors.filter((mirror) => mirror.status === "failed").length;
    syncingCount = $mirrors.mirrors.filter((mirror) => mirror.status === "syncing").length;
  }
</script>

<div class="w-full flex flex-col gap-5">
  <input placeholder="Search..." on:input={debounceInput} bind:value={$mirrors.searchKeywords} />

  <div class="hidden md:flex flex-col gap-1">
    <h1 class="pl-1">数据统计</h1>
    <div class="grid grid-cols-2 gap-2">
      <Card title="所有镜像" value={totalCount} />
      <Card title="同步中" value={syncingCount} />
      <Card title="同步成功" value={successCount} />
      <Card title="同步失败" value={failedCount} />
    </div>
  </div>
</div>

<style lang="postcss">
  input {
    @apply w-full bg-white dark:bg-dark outline-none py-1.5 px-3;
    @apply border border-gray-300 dark:border-gray-500 rounded-sm focus:border-blue-600;
  }
</style>
