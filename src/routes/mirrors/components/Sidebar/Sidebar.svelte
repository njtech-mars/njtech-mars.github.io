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
  <input type="text" title="筛选" placeholder="Search..." on:input={debounceInput} />

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
    @apply w-full bg-gray-100 dark:bg-dark outline-none py-1 px-3;
    @apply border border-gray-300 dark:border-gray-500 rounded-sm focus:border-blue-600;
  }
</style>
