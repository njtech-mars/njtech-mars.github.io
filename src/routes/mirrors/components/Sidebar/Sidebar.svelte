<script lang="ts">
  import Card from "./Card.svelte";
  import { mirrors, searchKeywords } from "$stores/mirrors";
  import type { MirrorType } from "$types/mirror";

  let timeoutId: NodeJS.Timeout | null = null;

  function debounceInput(event: Event) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => searchKeywords.set((event.target as HTMLInputElement).value), 500);
  }

  function getLength(mirrors: MirrorType[], status: "failed" | "success" | "syncing") {
    if (status === "failed") return mirrors.filter((mirror) => mirror.status === "failed").length;
    else if (status === "success") return mirrors.filter((mirror) => mirror.status === "success").length;
    else return mirrors.filter((mirror) => mirror.status === "syncing").length;
  }
</script>

<div class="w-full flex flex-col gap-5">
  <input placeholder="Search..." on:input={debounceInput} />

  {#if $mirrors}
    <div class="hidden md:flex flex-col gap-1">
      <h1 class="pl-1">数据统计</h1>
      <div class="grid grid-cols-2 gap-2">
        <Card title="所有镜像" value={$mirrors.length} />
        <Card title="同步中" value={getLength($mirrors, "syncing")} />
        <Card title="同步成功" value={getLength($mirrors, "success")} />
        <Card title="同步失败" value={getLength($mirrors, "failed")} />
      </div>
    </div>
  {/if}
</div>

<style lang="postcss">
  input {
    @apply w-full bg-white dark:bg-dark outline-none py-1.5 px-3;
    @apply border border-gray-300 dark:border-gray-500 rounded-sm focus:border-blue-600;
  }
</style>
