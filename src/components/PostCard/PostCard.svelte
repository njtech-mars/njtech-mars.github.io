<script lang="ts">
  import FaLink from 'svelte-icons/fa/FaLink.svelte';

  import type { PostMetadatType } from '$types/postMetadata';
  import Metadata from '$components/Metadata/Metadata.svelte';

  export let post: PostMetadatType;
</script>

<li>
  <a href={`/blog/${post.slug}`} class="text-lg text-orange-600 hover:underline flex flex-row items-center w-fit">
    <div class="w-3 h-3"><FaLink /></div>
    <span>{post.title}</span>
  </a>

  <Metadata {post} />

  <p>{post.intro}</p>
</li>

<style lang="postcss">
  li {
    box-shadow: 0 0 10px #8181815f;
    @apply w-full space-y-1 p-5 rounded-xl;
  }
</style>
