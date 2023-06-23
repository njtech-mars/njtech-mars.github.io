<script lang="ts">
  import { onMount } from "svelte";

  import { theme } from "$stores/theme";

  let mounted = false;

  onMount(() => {
    mounted = true;
    import("giscus");
  });
</script>

{#if mounted}
  <giscus-widget
    host="https://giscus.app"
    repo="MR-Addict/studio"
    repoid="R_kgDOJebbfg"
    category="General"
    categoryid="DIC_kwDOJebbfs4CXHzs"
    mapping="og:title"
    strict="1"
    reactionsenabled="0"
    emitmetadata="0"
    inputposition="top"
    theme={$theme}
    lang="zh-CN"
    loading="eager"
    crossorigin="anonymous"
  />
{/if}
