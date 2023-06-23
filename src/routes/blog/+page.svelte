<script lang="ts">
  import { posts } from "$stores/posts";

  import Tags from "./Tags.svelte";
  import PostCard from "$components/PostCard/PostCard.svelte";
</script>

<svelte:head>
  <title>Mars工作室 • 文章动态</title>
</svelte:head>

<main class="frame flex-1 flex flex-col gap-2">
  <h1 class="text-2xl font-semibold">所有文章</h1>

  <div class="w-full flex flex-col md:flex-row gap-5 md:gap-7">
    <div class="block md:hidden w-full animate-slideFromTop"><Tags /></div>

    <ul class="w-full flex flex-col gap-5">
      {#each $posts.posts as post, index (post.slug)}
        {#key post}
          <li class="opacity-0 animate-slideFromBottom" style="animation-delay: {150 * index}ms;">
            <PostCard {post} />
          </li>
        {/key}
      {/each}
    </ul>

    <div class="hidden md:block animate-slideFromRight sticky top-5 w-80 h-fit"><Tags /></div>
  </div>
</main>
