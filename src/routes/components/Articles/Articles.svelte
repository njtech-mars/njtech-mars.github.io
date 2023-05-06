<script lang="ts">
  import { getPosts } from "$lib/blog";
  import PostCard from "$components/PostCard/PostCard.svelte";

  const posts = getPosts().slice(0, 5);
</script>

<div class="flex flex-col gap-2">
  <div class="w-full flex flex-row justify-between items-end">
    <h1 class="text-2xl font-semibold">最新文章</h1>
    <a href="/blog" title="文档文章" class="text-blue-600 hover:underline">更多...</a>
  </div>

  <ul class="flex flex-col gap-5 md:gap-7">
    {#each posts as post (post.slug)}
      <PostCard {post} />
    {/each}
  </ul>
</div>
