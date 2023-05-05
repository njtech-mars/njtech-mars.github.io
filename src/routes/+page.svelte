<script lang="ts">
  import { getPosts } from "$lib/blog";
  import { links } from "$stores/links";
  import PostCard from "$components/PostCard/PostCard.svelte";
  import LinkCard from "$components/LinkCard/LinkCard.svelte";

  const posts = getPosts().slice(0, 5);
</script>

<main class="frame flex flex-col gap-10">
  <div class="flex flex-col gap-2">
    <div class="w-full flex flex-row justify-between items-end text-blue-600">
      <h1 class="text-2xl font-semibold">资源推荐</h1>
      <a href="/links" title="资源推荐" class="hover:underline">更多..</a>
    </div>

    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 animate-slideFromTop">
      {#each $links.pinned as link (link.name)}
        {#key link}
          <LinkCard {link} disabled={true} />
        {/key}
      {/each}
    </ul>
  </div>

  <div class="flex flex-col gap-2">
    <div class="w-full flex flex-row justify-between items-end text-blue-600">
      <h1 class="text-2xl font-semibold">最新文章</h1>
      <a href="/blog" title="活动文章" class="hover:underline">更多..</a>
    </div>

    <ul class="flex flex-col gap-7 animate-slideFromBottom">
      {#each posts as post (post.slug)}
        <PostCard {post} />
      {/each}
    </ul>
  </div>
</main>
