<script lang="ts">
  import Logo from "./Logo/Logo.svelte";
  import Normal from "./Normal/Normal.svelte";
  import Mobile from "./Mobile/Mobile.svelte";
  import ToggleTheme from "./ToggleTheme/ToggleTheme.svelte";
</script>

<nav class="px-4 md:px-28 pt-5 w-full flex flex-row items-center justify-between">
  <Logo />

  <div class="flex flex-row items-center gap-3 md:gap-5">
    <Normal />
    <ToggleTheme />
    <Mobile />
  </div>
</nav>
