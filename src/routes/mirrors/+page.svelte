<script lang="ts">
  import type { PageData } from "./$types";
  import { mirrors } from "$stores/mirrors";

  import Table from "./components/Table/Table.svelte";
  import Sidebar from "./components/Sidebar/Sidebar.svelte";

  export let data: PageData;

  if (data.mirrors) mirrors.setMirrors(data.mirrors);
</script>

<main class="frame flex flex-col gap-2">
  <h1 class="text-2xl font-semibold">镜像列表</h1>

  <div class="w-full flex flex-col items-center justify-center">
    <div class="w-full flex flex-col md:flex-row gap-2 md:gap-7">
      <div class="block md:hidden animate-slideFromTop w-full"><Sidebar /></div>
      {#if $mirrors.mirrors.length}
        <Table {mirrors} />
      {:else}
        <p class="w-full text-center mt-5 md:mt-24">没有符合条件的结果</p>
      {/if}
      <div class="h-fit hidden md:block animate-slideFromRight sticky top-5 w-[25rem]"><Sidebar /></div>
    </div>
  </div>
</main>
