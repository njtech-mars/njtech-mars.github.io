<script lang="ts">
  import FaClock from "svelte-icons/fa/FaRegClock.svelte";
  import FaRegUser from "svelte-icons/fa/FaRegUser.svelte";

  import type { PageData } from "./$types";
  import { formatDate, timeAgo } from "$lib/utils";

  export let data: PageData;
</script>

<main class="w-full flex-1 frame py-10 flex flex-col items-center animate-slideFromBottom">
  <header class="flex flex-col items-center gap-0.5 md:gap-3">
    <h1 class="text-2xl md:text-3xl font-semibold">{data.title}</h1>

    <div class="flex flex-row items-center gap-1 text-gray-500 text-sm">
      <div class="flex flex-row items-center gap-0.5">
        <div class="w-3 h-3"><FaClock /></div>
        <div>{formatDate(data.date)}</div>
        <div>(更新于{timeAgo(data.update)})</div>
      </div>

      <p>•</p>

      <div class="flex flex-row items-center gap-0.5">
        <div class="w-3 h-3"><FaRegUser /></div>
        <div>{data.author}撰写</div>
      </div>
    </div>

    <div class="flex flex-row flex-wrap gap-2 text-sm">
      {#each data.tags as tag (tag)}
        <span class="py-1 px-2 rounded-2xl text-blue-600 bg-blue-600/20">&num;{tag}</span>
      {/each}
    </div>
  </header>

  <article class="markdown">
    <svelte:component this={data.content} />
  </article>
</main>
