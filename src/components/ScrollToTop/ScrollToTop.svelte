<script lang="ts">
  import { onMount } from "svelte";
  import MdKeyboardArrowUp from "svelte-icons/md/MdKeyboardArrowUp.svelte";

  let visible = false;

  onMount(() => {
    const handleScroll = () => (visible = window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<button
  type="button"
  title="滑到顶部"
  aria-label="滑倒顶部"
  class:active={visible}
  on:click={() => window.scroll({ top: 0, behavior: "smooth" })}
>
  <MdKeyboardArrowUp />
</button>

<style lang="postcss">
  button {
    @apply w-10 h-10 p-1 rounded-full;
    @apply fixed right-5 md:right-10 bottom-10 duration-300 invisible scale-0 bg-blue-600 text-white;
  }
  button {
    @apply bg-blue-700;
  }
  button.active {
    @apply visible scale-100;
  }
</style>
