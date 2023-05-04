import path from "path";
import { mdsvex } from "mdsvex"
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: ['.md'],
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

  kit: {
    adapter: adapter(),
    alias: {
      $lib: path.resolve("./src/lib"),
      $types: path.resolve("./src/types"),
      $stores: path.resolve("./src/stores"),
      $components: path.resolve("./src/components"),
    },
  }
};

export default config;
