<script>
  import SvgBackground from "./SVGBackground.svelte";
</script>

<div class="flex flex-col gap-5 py-10 relative isolate">
  <h1
    class="text-3xl font-bold border-b-4 border-b-green-600 w-fit opacity-0 animate-slideFromBottom animation-delay-75"
  >
    Mars工作室
  </h1>

  <p class="max-w-md text-lg opacity-0 animate-slideFromBottom animation-delay-200 text-gray-500 dark:text-gray-300">
    Mars Studio 是南京工业大学信息中心学生开发团队，成立于2001年4月。我们的目标是维持校园互联网团队的运作和传承。
  </p>

  <div class="flex flex-row gap-7 opacity-0 animate-slideFromBottom animation-delay-400">
    <a href="/blog/about-us" class="link about">关于我们</a>
    <a href="/mirrors" class="link">下载镜像</a>
  </div>

  <SvgBackground />
</div>

<style lang="postcss">
  .link {
    border-radius: 1.3rem 0.5rem 1.3rem 0.5rem;
    @apply py-2 px-4 border-2 border-blue-600 w-fit text-lg duration-300;
  }
  .link:hover {
    box-shadow: 0 0 20px #60a5fa40;
  }
  .about {
    @apply bg-blue-600 text-white;
  }
</style>
