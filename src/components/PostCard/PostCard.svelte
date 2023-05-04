<script lang="ts">
  import FaLink from 'svelte-icons/fa/FaLink.svelte';
  import FaRegUser from 'svelte-icons/fa/FaRegUser.svelte';
  import FaClock from 'svelte-icons/fa/FaRegClock.svelte';
  import { formatDate, timeAgo } from '$lib/utils';
  import type { PostMetadatType } from '$types/postMetadata';

  export let post: PostMetadatType;
</script>

<li class="space-y-1">
  <a href={`/blog/${post.slug}`} class="text-lg text-blue-600 hover:underline flex flex-row items-center w-fit">
    <div class="w-3 h-3"><FaLink /></div>
    <span>{post.title}</span>
  </a>

  <div class="flex flex-row items-center gap-1 text-gray-500 text-sm">
    <div class="flex flex-row items-center gap-0.5">
      <div class="w-3 h-3"><FaClock /></div>
      <div>{formatDate(post.date)}</div>
      <div>({timeAgo(post.date)})</div>
    </div>

    <div class="flex flex-row items-center gap-0.5">
      <div class="w-3 h-3 ml-1"><FaRegUser /></div>
      <div>{post.author}撰写</div>
    </div>
  </div>

  <p>{post.intro}</p>
</li>
