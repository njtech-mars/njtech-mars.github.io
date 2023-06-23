<script lang="ts">
  import Giscus from "./components/Giscus/Giscus.svelte";
  import Sidebar from "./components/Sidebar/Sidebar.svelte";
  import Header from "./components/Header/Header.svelte";

  export let data;
</script>

<svelte:head>
  <title>Mars工作室 • 文章动态</title>
  <meta property="og:title" content={data.post.title} />
</svelte:head>

<main class="w-full flex-1 frame py-10 flex flex-col gap-5 animate-slideFromBottom">
  <Header post={data.post} />

  <article class="markdown">
    <div class="w-full flex flex-col gap-5">
      <div class="content">
        <svelte:component this={data.post.content} />
      </div>

      <div class="w-full flex flex-col md:flex-row justify-between gap-5">
        {#if data.prev}
          <a href={`/blog/${data.prev.slug}`} class="footer-link">
            <span>上一篇</span>
            <span class="text-green-600">{"« " + data.prev.title}</span>
          </a>
        {/if}

        {#if data.next}
          <a href={`/blog/${data.next.slug}`} class="footer-link items-end text-end">
            <span>下一篇</span>
            <span class="text-green-600">{data.next.title + " »"}</span>
          </a>
        {/if}
      </div>
    </div>

    {#key data.post}
      <Sidebar post={data.post} />
    {/key}
  </article>

  {#key data.post}
    <Giscus />
  {/key}
</main>

<style lang="postcss">
  .markdown {
    @apply w-full relative flex flex-row justify-between gap-10;
  }
  .content {
    @apply border border-gray-300 dark:border-gray-500 rounded-xl p-5;
  }
  .footer-link {
    @apply w-full flex flex-col px-5 py-5 rounded-lg border border-gray-300 dark:border-gray-500 duration-300;
  }
  .footer-link:hover {
    @apply border-green-600;
  }
</style>
