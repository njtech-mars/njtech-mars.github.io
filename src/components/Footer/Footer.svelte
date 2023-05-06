<script lang="ts">
  import FaGithub from "svelte-icons/fa/FaGithub.svelte";
  import FaRssSquare from "svelte-icons/fa/FaRssSquare.svelte";
</script>

<footer>
  <div class="flex flex-row items-center gap-1">
    <a href="https://github.com/MR-Addict/studio" class="link">
      <div class="icon"><FaGithub /></div>
      <div class="text">本站仓库</div>
    </a>

    <a href="/rss.xml" class="link">
      <div class="icon"><FaRssSquare /></div>
      <div class="text">RSS订阅</div>
    </a>
  </div>

  <p>
    Copyright &copy; {new Date().getFullYear()} Mars工作室
  </p>
</footer>

<style lang="postcss">
  footer {
    @apply text-sm pb-3 flex flex-col md:flex-row items-center md:gap-2;
  }
  .link {
    @apply flex flex-row items-center gap-1;
  }
  .icon {
    @apply w-4 h-4;
  }
  .text {
    @apply underline;
  }
</style>
