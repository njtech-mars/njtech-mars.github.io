<script lang="ts">
  import FaLink from "svelte-icons/fa/FaLink.svelte";
  import FaRegUser from "svelte-icons/fa/FaRegUser.svelte";
  import FaRegCalendarAlt from "svelte-icons/fa/FaRegCalendarAlt.svelte";

  import formatDate from "$lib/utils/formatDate";
  import timeInterval from "$lib/utils/timeInterval";
  import type { PostMetadatType } from "$types/postMetadata";

  export let post: PostMetadatType;
</script>

<div class="w-full space-y-1 p-5 rounded-xl border border-gray-300 dark:border-gray-500">
  <a href={`/blog/${post.slug}`} class="text-lg text-blue-600 hover:underline flex flex-row items-center gap-0.5 w-fit">
    <div class="w-3 h-3"><FaLink /></div>
    <span>{post.title}</span>
  </a>

  <div class="flex flex-col gap-1">
    <div class="flex flex-row items-center flex-wrap gap-1 text-gray-500 dark:text-gray-300 text-sm">
      <div class="flex flex-row items-center gap-0.5">
        <div class="w-3 h-3"><FaRegCalendarAlt /></div>
        <div title={formatDate(post.create)}>{"发布于" + timeInterval(post.create)}</div>
        <div title={formatDate(post.update)}>({"更新于" + timeInterval(post.update)})</div>
      </div>

      <div class="flex flex-row items-center gap-0.5">
        <div class="w-3 h-3"><FaRegUser /></div>
        <div>{post.author + "撰写"}</div>
      </div>
    </div>

    <div class="flex flex-row flex-wrap gap-2 text-sm">
      {#each post.tags as tag (tag)}
        <span class="py-1 px-2 rounded-2xl text-green-600 bg-green-600/20">&num;{tag}</span>
      {/each}
    </div>
  </div>

  <p>{post.intro}</p>
</div>
