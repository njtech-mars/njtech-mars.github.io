<script lang="ts">
  import FaShare from "svelte-icons/fa/FaShare.svelte";

  import { data } from "./config";
</script>

<footer class="frame flex flex-col gap-4">
  <ul class="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
    {#each data as category (category.name)}
      <li class="flex flex-col gap-1">
        <h1 class="font-semibold">{category.name}</h1>
        <ul class="flex flex-col gap-1">
          {#each category.items as link (link.name)}
            {@const external = !link.link.startsWith("/")}
            <li class="flex flex-row items-center gap-1 hover:text-blue-600">
              {#if external}
                <a href={link.link} target="_blank">{link.name}</a>
                <div class="w-3 h-3">
                  <FaShare />
                </div>
              {:else}
                <a href={link.link}>{link.name}</a>
              {/if}
            </li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>

  <p class="text-sm">
    Copyright &copy; {new Date().getFullYear()} Mars工作室. All rights reversed.
  </p>
</footer>
