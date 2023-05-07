<script lang="ts">
  import { onMount } from "svelte";
  import { mirrors } from "$stores/mirrors";

  import Table from "./components/Table/Table.svelte";
  import Message from "./components/Message/Message.svelte";
  import Loading from "./components/Loading/Loading.svelte";
  import { fetchMirros } from "./lib/fetchMirrors";

  let promise: Promise<boolean>;
  onMount(() => (promise = fetchMirros()));
</script>

{#await promise}
  <Loading />
{:then success}
  {#if !success}
    <Message title="镜像数据拉取失败" />
  {:else if $mirrors.mirrors.length === 0}
    <Message title="没有符合条件的结果" />
  {:else}
    <Table {mirrors} />
  {/if}
{/await}
