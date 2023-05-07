<script lang="ts">
  import { mirrors } from "$stores/mirrors";

  export let title: string;
  export let name: "name" | "size" | "update" | "status";
</script>

<button
  type="button"
  {title}
  on:click={() =>
    mirrors.setSortRule({
      key: name,
      asc: $mirrors.sortRule.key === name ? !$mirrors.sortRule.asc : $mirrors.sortRule.asc
    })}
>
  <span>{title}</span>
  {#if $mirrors.sortRule.key === name}
    {#if $mirrors.sortRule.asc}
      <span class="text-blue-600">&#8593</span>
    {:else}
      <span class="text-blue-600">&#8595</span>
    {/if}
  {/if}
</button>
