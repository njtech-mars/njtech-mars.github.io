<script lang="ts">
  import { posts } from "$stores/posts";
  import Tags from "./components/Tags/Tags.svelte";
  import PostCard from "$components/PostCard/PostCard.svelte";
</script>

<main class="frame flex flex-col gap-2">
  <h1 class="text-2xl font-semibold">所有文章</h1>

  <div class="w-full flex flex-col md:flex-row gap-7">
    <div class="block md:hidden w-full animate-slideFromTop">
      <Tags />
    </div>

    <ul class="w-full flex flex-col gap-5 md:gap-7 animate-slideFromBottom md:animate-slideFromLeft">
      {#each $posts.posts as post (post.slug)}
        <PostCard {post} />
      {/each}
    </ul>

    <div class="hidden md:block animate-slideFromRight sticky top-5 w-[20rem]">
      <Tags />
    </div>
  </div>
</main>
