<script lang="ts">
  import Sidebar from "./components/Sidebar/Sidebar.svelte";
</script>

<svelte:head>
  <title>Mars工作室 • 镜像站</title>
</svelte:head>

<main class="frame flex-1 flex flex-col gap-2">
  <h1 class="text-2xl font-semibold">镜像列表</h1>
  <div class="w-full flex flex-col items-center justify-center">
    <div class="w-full flex flex-col md:flex-row gap-2 md:gap-7">
      <div class="block md:hidden animate-slideFromTop w-full"><Sidebar /></div>
      <slot />
      <div class="h-fit hidden md:block animate-slideFromRight sticky top-5 w-[20rem]"><Sidebar /></div>
    </div>
  </div>
</main>
