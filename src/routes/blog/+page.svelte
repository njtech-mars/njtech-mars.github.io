<script lang="ts">
  import { getPosts } from '$lib/blog';
  import PostCard from '$components/PostCard/PostCard.svelte';

  const posts = getPosts();
</script>

<main class="w-full flex-1 frame py-5 md:py-10 flex flex-col gap-5">
  <h1 class="text-2xl font-semibold">所有文章</h1>

  <ul class="flex flex-col gap-3 animate-slideFromBottom">
    {#each posts as post (post.slug)}
      <PostCard {post} />
    {/each}
  </ul>
</main>
