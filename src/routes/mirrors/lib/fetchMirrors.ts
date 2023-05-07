import z from "zod";
import { writable } from "svelte/store";

import { Mirror } from "$types/mirror";
import { mirrors } from "$stores/mirrors";

const cache = new Map();

export function fetchMirros() {
  const store = writable(new Promise<boolean>(() => {}));

  async function loadData() {
    try {
      const result = await fetch("https://mirrors.njtech.edu.cn/jobs").then((res) => res.json());
      const data = z.array(Mirror).parse(result);

      cache.set("mirrors", data);
      mirrors.setMirrors(data);
      store.set(Promise.resolve(true));
    } catch (error) {
      console.error(error);
      store.set(Promise.resolve(false));
    }
  }

  if (cache.has("mirrors")) {
    mirrors.setMirrors(cache.get("mirrors"));
    store.set(Promise.resolve(true));
  } else loadData();

  return store;
}
