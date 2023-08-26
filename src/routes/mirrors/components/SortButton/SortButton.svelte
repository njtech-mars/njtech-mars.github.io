<script lang="ts">
  import { sortRule } from "$stores/mirrors";

  export let title: string;
  export let name: "name" | "size" | "update" | "status";

  function handleClick() {
    sortRule.set({ key: name, asc: $sortRule.key === name ? !$sortRule.asc : $sortRule.asc });
  }
</script>

<button type="button" on:click={handleClick}>
  <span>{title}</span>
  {#if $sortRule.key === name}
    {#if $sortRule.asc}
      <span class="text-blue-600">&#8593</span>
    {:else}
      <span class="text-blue-600">&#8595</span>
    {/if}
  {/if}
</button>
