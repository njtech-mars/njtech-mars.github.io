<script lang="ts">
  import { onMount } from "svelte";
  import { mirrors, searchKeywords, sortRule } from "$stores/mirrors";

  import sortMirrors from "./lib/sortMirrors";
  import fetchMirros from "./lib/fetchMirrors";
  import searchMirrors from "./lib/searchMirrors";

  import Table from "./components/Table/Table.svelte";
  import Loading from "./components/Loading/Loading.svelte";

  onMount(fetchMirros);
</script>

{#if !$mirrors}
  <Loading />
{:else}
  {@const result = sortMirrors(searchMirrors($mirrors, $searchKeywords), $sortRule)}
  {#if result.length === 0}
    <p class="w-full text-center mt-24">没有符合条件的结果</p>
  {:else}
    <Table mirrors={result} />
  {/if}
{/if}
