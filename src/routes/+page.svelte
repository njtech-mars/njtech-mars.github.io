<script lang="ts">
  import { getPosts } from '$lib/blog';
  import { links } from '$stores/links';
  import Tags from './components/Tags/Tags.svelte';
  import PostCard from './components/PostCard/PostCard.svelte';
  import LinkCard from './components/LinkCard/LinkCard.svelte';

  const posts = getPosts().slice(0, 5);
</script>

<main class="w-full flex-1 frame py-5 md:py-10 flex flex-col gap-10 relative">
  <div class="flex flex-col gap-5">
    <h1 class="text-2xl font-semibold">资源推荐</h1>

    <div class="flex flex-col gap-3">
      <Tags linksStore={links} />

      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 animate-slideFromBottom">
        {#each $links.links as link (link.name)}
          {#key link}
            <LinkCard {link} />
          {/key}
        {/each}
      </ul>
    </div>
  </div>

  <div class="flex flex-col gap-5">
    <h1 class="text-2xl font-semibold">最新文章</h1>

    <ul class="flex flex-col gap-3">
      {#each posts as post (post.slug)}
        <PostCard {post} />
      {/each}
    </ul>
  </div>
</main>
