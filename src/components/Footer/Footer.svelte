<script lang="ts">
  import FaShare from "svelte-icons/fa/FaShare.svelte";

  import { data } from "./config";
</script>

<footer class="frame flex flex-col gap-5 bg-slate-800 dark:bg-light text-gray-200">
  <ul class="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
    {#each data as category (category.name)}
      <li class="flex flex-col gap-2">
        <h1 class="font-semibold">{category.name}</h1>
        <ul class="flex flex-col gap-1">
          {#each category.items as link (link.name)}
            {@const external = !link.link.startsWith("/")}
            <li class="flex flex-row items-center gap-1 hover:text-blue-600 w-fit">
              {#if external}
                <a href={link.link} target="_blank">{link.name}</a>
                <div class="w-2.5 h-2.5">
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
    Copyright &copy; {new Date().getFullYear()} Mars工作室
  </p>
</footer>
