<script lang="ts">
  import FaRegUser from 'svelte-icons/fa/FaRegUser.svelte';
  import FaClock from 'svelte-icons/fa/FaRegClock.svelte';

  import { formatDate, timeAgo } from '$lib/utils';
  import type { PostMetadatType } from '$types/postMetadata';

  export let post: PostMetadatType;
</script>

<div class="flex flex-col gap-1">
  <div class="flex flex-row items-center gap-1 text-gray-500 text-sm">
    <div class="flex flex-row items-center gap-0.5">
      <div class="w-3 h-3"><FaClock /></div>
      <div>{formatDate(post.date)}</div>
      <div>(更新于{timeAgo(post.update)})</div>
    </div>

    <div class="flex flex-row items-center gap-0.5">
      <div class="w-3 h-3 ml-1"><FaRegUser /></div>
      <div>{post.author}撰写</div>
    </div>
  </div>

  <div class="flex flex-row flex-wrap gap-2 text-sm">
    {#each post.tags as tag (tag)}
      <span class="py-1 px-2 rounded-2xl text-orange-600 bg-orange-600/20">&num;{tag}</span>
    {/each}
  </div>
</div>
