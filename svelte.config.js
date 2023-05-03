import path from "path";
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    alias: {
      $types: path.resolve("./src/types"),
      $stores: path.resolve("./src/stores"),
      $components: path.resolve("./src/components"),
    },
  }
};

export default config;
