<script lang="ts">
  import FaRegUser from "svelte-icons/fa/FaRegUser.svelte";
  import FaRegCalendarAlt from "svelte-icons/fa/FaRegCalendarAlt.svelte";

  import formatDate from "$lib/utils/formatDate";
  import timeInterval from "$lib/utils/timeInterval";
  import type { PostMetadatType } from "$types/postMetadata";

  export let post: PostMetadatType;
</script>

<header class="flex flex-col gap-0.5 md:gap-2 pl-2">
  <h1 class="text-2xl md:text-3xl font-semibold">{post.title}</h1>

  <div class="flex flex-row items-center flex-wrap gap-2 text-gray-500 dark:text-gray-300 text-sm">
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
</header>
