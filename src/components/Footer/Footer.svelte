<script lang="ts">
  import FaShare from "svelte-icons/fa/FaShare.svelte";

  import { data } from "./config";
</script>

<footer class="frame">
  <ul class="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
    {#each data as category (category.name)}
      <li class="flex flex-col gap-2">
        <h1 class="font-semibold">{category.name}</h1>
        <ul class="flex flex-col gap-1">
          {#each category.items as link (link.name)}
            {@const external = !link.link.startsWith("/")}
            <li>
              {#if external}
                <a href={link.link} target="_blank">
                  <div>{link.name}</div>
                  <div class="w-3">
                    <FaShare />
                  </div>
                </a>
              {:else}
                <a href={link.link}>{link.name}</a>
              {/if}
            </li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>

  <p class="copyright">
    <span>Copyright &copy; {new Date().getFullYear()} Mars工作室.</span>
    <a href="https://beian.miit.gov.cn" target="_blank">苏ICP备2022032826号</a>
  </p>
</footer>

<style lang="postcss">
  footer {
    @apply flex flex-col gap-5 bg-slate-800 dark:bg-light text-gray-200;
  }
  a {
    @apply flex flex-row items-center gap-0.5 w-fit duration-300 hover:text-blue-600;
  }
  .copyright {
    @apply flex flex-col md:flex-row md:gap-2;
  }
</style>
