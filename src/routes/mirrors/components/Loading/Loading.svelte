<main class="w-full animate-slideFromLeft">
  <table>
    <thead>
      <tr class="h-10">
        <th>镜像</th>
        <th>时间</th>
        <th>大小</th>
        <th>状态</th>
        <th>资源</th>
      </tr>
    </thead>
    <tbody>
      {#each new Array(20).fill(0) as item}
        <tr class="border border-gray-300 dark:border-gray-500 p-5 rounded-xl h-10">
          {#each new Array(5).fill(0) as item}
            <td />
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
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
    background: linear-gradient(100deg, #d1d5db80 40%, #d1d5db 50%, #d1d5db80 60%);
    background-size: 200% 100%;
    background-position-x: 180%;
    animation: 2s pulse ease-in-out infinite;
  }

  @keyframes pulse {
    to {
      background-position-x: -20%;
    }
  }
</style>
