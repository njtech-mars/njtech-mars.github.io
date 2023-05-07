<script lang="ts">
  import { onMount } from "svelte";
  import { mirrors } from "$stores/mirrors";
  import type { Writable } from "svelte/store";

  import Table from "./components/Table/Table.svelte";
  import Sidebar from "./components/Sidebar/Sidebar.svelte";
  import Message from "./components/Message/Message.svelte";
  import { fetchMirros } from "./lib/fetchMirrors";

  let promise: Writable<Promise<boolean>>;
  onMount(() => (promise = fetchMirros()));
</script>

<main class="frame flex flex-col gap-2">
  {#await $promise}
    <Message title="镜像数据拉取中..." />
  {:then success}
    {#if !success}
      <Message title="镜像数据拉取失败" />
    {:else}
      <h1 class="text-2xl font-semibold">镜像列表</h1>
      <div class="w-full flex flex-col items-center justify-center">
        <div class="w-full flex flex-col md:flex-row gap-2 md:gap-7">
          <div class="block md:hidden animate-slideFromTop w-full"><Sidebar /></div>
          {#if $mirrors.mirrors.length === 0}
            <p class="w-full text-center mt-5 md:mt-24">没有符合条件的结果</p>
          {:else}
            <Table {mirrors} />
          {/if}
          <div class="h-fit hidden md:block animate-slideFromRight sticky top-5 w-[20rem]"><Sidebar /></div>
        </div>
      </div>
    {/if}
  {/await}
</main>
