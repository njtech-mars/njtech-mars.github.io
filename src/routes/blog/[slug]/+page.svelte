<script lang="ts">
  import type { PageData } from './$types';
  import Metadata from '$components/Metadata/Metadata.svelte';

  export let data: PageData;
</script>

<main class="w-full flex-1 frame py-5 md:py-10 flex flex-col gap-5 animate-slideFromBottom">
  <header class="flex flex-col gap-1">
    <h1 class="text-2xl font-semibold">{data.title}</h1>

    <Metadata post={data} />
  </header>

  <article class="markdown">
    <svelte:component this={data.content} />
  </article>
</main>
