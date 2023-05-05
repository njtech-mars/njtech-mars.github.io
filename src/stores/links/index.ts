import z from "zod";

import rawData from "./data";
import { Link } from "$types/link";
import { writable, derived } from "svelte/store";

function createStore() {
  const activeTag = writable("");
  const data = z.array(Link).parse(rawData);

  const sortedTags = data.map((item) => item.tags).flatMap((item) => item);
  const rawTags = sortedTags.map((name) => ({ name, count: sortedTags.filter((v) => v === name).length }));
  const uniqueTags = rawTags.filter((tag, index) => index === rawTags.findIndex((t) => t.name === tag.name));

  const derivedStore = derived(activeTag, ($activeTag) => ({
    activeTag: $activeTag,
    tags: uniqueTags.sort((a, b) => b.count - a.count),
    pinned: data.filter((item) => item.pinned).sort((a, b) => b.heat - a.heat),
    links: data.filter((item) => ($activeTag ? item.tags.includes($activeTag) : true)).sort((a, b) => b.heat - a.heat)
  }));

  return {
    set: activeTag.set,
    subscribe: derivedStore.subscribe
  };
}

export const links = createStore();
