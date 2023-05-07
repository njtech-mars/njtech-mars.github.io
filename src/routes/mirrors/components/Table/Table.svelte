<script lang="ts">
  import MdFolderOpen from "svelte-icons/md/MdFolderOpen.svelte";

  import type { MirrorsStoreType } from "$types/mirror";
  import { formatDate, timeInterval } from "$lib/utils";
  import SortButton from "../SortButton/SortButton.svelte";

  export let mirrors: MirrorsStoreType;
</script>

<div class="w-full overflow-x-auto animate-slideFromBottom md:animate-slideFromLeft">
  <table>
    <thead>
      <tr>
        <th><SortButton title="镜像" name="name" /></th>
        <th><SortButton title="时间" name="update" /></th>
        <th><SortButton title="大小" name="size" /></th>
        <th><SortButton title="状态" name="status" /></th>
        <th>资源</th>
      </tr>
    </thead>
    <tbody>
      {#each $mirrors.mirrors as mirror (mirror.name)}
        <tr class="border border-gray-300 dark:border-gray-500 p-5 rounded-xl">
          <td data-cell="镜像">{mirror.name}</td>
          <td data-cell="时间">{formatDate(mirror.last_update)} ({timeInterval(mirror.last_update)})</td>
          <td data-cell="大小">{mirror.size}</td>
          <td data-cell="状态">
            <div class="status" data-status={mirror.status}>
              {mirror.status}
            </div>
          </td>
          <td data-cell="资源">
            <a
              title={mirror.name}
              aria-label={mirror.name}
              class="flex items-center justify-center w-fit"
              href={`https://mirrors.njtech.edu.cn/${mirror.name}`}
            >
              <div class="w-5 h-5 hover:text-blue-600"><MdFolderOpen /></div>
            </a>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

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
  @media (max-width: 768px) {
    table th {
      @apply hidden;
    }
    table td {
      padding: 0.25rem;
      display: grid;
      grid-template-columns: 5ch auto;
    }
    table td::before {
      content: attr(data-cell);
    }
  }
</style>
