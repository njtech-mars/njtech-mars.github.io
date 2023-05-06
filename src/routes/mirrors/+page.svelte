<script lang="ts">
  import z from "zod";
  import { Mirror } from "$types/mirror";
  import MdFolderOpen from "svelte-icons/md/MdFolderOpen.svelte";

  import { mirrors } from "$stores/mirrors";
  import { formatDate, timeInterval } from "$lib/utils";

  let promise = fetchMirrors();

  async function fetchMirrors() {
    try {
      const result = await fetch("https://mirrors.njtech.edu.cn/jobs").then((res) => res.json());
      const data = z.array(Mirror).parse(result);
      mirrors.setMirrors(data);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
</script>

<main class="frame flex flex-col gap-2">
  <h1 class="text-2xl font-semibold">镜像列表</h1>

  <div class="w-full">
    {#await promise}
      <p>Loading...</p>
    {:then data}
      {#if !data}
        <p>镜像数据状态获取失败</p>
      {:else}
        <div class="w-full overflow-x-auto animate-slideFromBottom">
          <table>
            <thead>
              <tr>
                <th>镜像</th>
                <th>上次更新</th>
                <th>大小</th>
                <th>文件</th>
                <th>状态</th>
              </tr>
            </thead>
            <tbody>
              {#each $mirrors.mirrors as mirror (mirror.name)}
                <tr class="border border-gray-300 dark:border-gray-500 p-5 rounded-xl">
                  <td>{mirror.name}</td>
                  <td>{formatDate(mirror.last_update)} ({timeInterval(mirror.last_update)})</td>
                  <td>{mirror.size}</td>
                  <td>
                    <a href={`https://mirrors.njtech.edu.cn/${mirror.name}`}>
                      <div class="w-5 h-5 hover:text-blue-600"><MdFolderOpen /></div>
                    </a>
                  </td>
                  <td>
                    <div class="status" data-status={mirror.status}>
                      {mirror.status}
                    </div>
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      {/if}
    {/await}
  </div>
</main>

<style lang="postcss">
  table {
    @apply w-full;
  }
  table tr {
    @apply text-left border border-gray-300 dark:border-gray-500;
  }
  table :is(th, td) {
    @apply p-2 whitespace-nowrap;
  }
  table tbody tr:nth-of-type(even) {
    @apply bg-gray-200 dark:bg-light;
  }
  .status {
    @apply text-sm w-fit py-0.5 px-1 rounded-sm bg-green-600/20 text-green-600;
  }
  .status[data-status="failed"] {
    @apply bg-red-600/20 text-red-600;
  }
  .status[data-status="syncing"] {
    @apply bg-purple-600/20 text-purple-600;
  }
</style>
