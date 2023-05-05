<script lang="ts">
  import { posts } from '$stores/posts';
  import Tags from './components/Tags/Tags.svelte';
  import PostCard from '$components/PostCard/PostCard.svelte';
</script>

<main class="w-full flex-1 frame py-5 md:py-10 flex flex-col gap-7">
  <h1 class="text-2xl text-blue-600 font-semibold">所有文章</h1>

  <div class="w-full flex flex-col md:flex-row gap-7">
    <ul class="w-full flex flex-col gap-7 animate-slideFromTop md:animate-slideFromLeft">
      {#each $posts.posts as post (post.slug)}
        <PostCard {post} />
      {/each}
    </ul>
    <Tags />
  </div>
</main>
