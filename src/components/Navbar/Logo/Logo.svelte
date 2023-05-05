<script lang="ts">
  import MdLocationOn from "svelte-icons/md/MdLocationOn.svelte";
</script>

<a href="/" title="首页" class="animate-scaleUp z-20 flex flex-row items-center gap-1.5">
  <div class="icon"><MdLocationOn /></div>
  <div class="title">南工向导</div>
</a>

<style lang="postcss">
  .icon {
    @apply relative w-7 h-7 p-0.5 isolate text-white;
  }
  .icon::before {
    content: "";
    border-radius: 30% 15% 30% 15%;
    @apply -z-10 absolute top-0 right-0 w-full h-full bg-blue-500;
  }
  .icon::after {
    content: "";
    border-radius: 30% 15% 30% 15%;
    @apply -z-20 absolute -top-0.5 -right-0.5 w-full h-full bg-blue-300;
  }
  .title {
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(to right, #2563eb, #3b82f6);

    @apply text-2xl font-semibold;
  }
</style>
