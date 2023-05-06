import path from "path";
import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";

import { mdsvex } from "mdsvex";
import rehypeSlug from "rehype-slug";
import toc from "@jsdevtools/rehype-toc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: [".md"],
  rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }], [toc, { position: "beforebegin" }]]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

  kit: {
    adapter: adapter(),
    alias: {
      $lib: path.resolve("./src/lib"),
      $types: path.resolve("./src/types"),
      $stores: path.resolve("./src/stores"),
      $components: path.resolve("./src/components")
    }
  }
};

export default config;
