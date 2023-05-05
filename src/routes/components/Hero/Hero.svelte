<div class="wrapper">
  <h1 class="title">Mars工作室</h1>
  <p class="intro">MarsStudio 是南京工业大学信息中心学生开发团队，成立于2001年4月。</p>
</div>

<style lang="postcss">
  .wrapper {
    height: 40vh;
    @apply flex flex-col items-center justify-center gap-3 animate-scaleUp;
  }
  .title {
    @apply px-5 py-3 italic text-3xl text-white font-bold relative isolate;
  }
  .title::before {
    content: "";
    border-radius: 2rem 0.7rem 2rem 0.7rem;
    @apply -z-10 absolute top-0 right-0 w-full h-full bg-blue-600 duration-100;
  }
  .title::after {
    content: "";
    border-radius: 2rem 0.7rem 2rem 0.7rem;
    @apply -z-20 absolute -top-1 -right-1 w-full h-full bg-blue-400 duration-100;
  }
  .intro {
    @apply text-center max-w-sm text-lg;
  }
</style>
