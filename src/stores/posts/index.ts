import getPosts from "$lib/blog/getPosts";
import { writable, derived } from "svelte/store";

function createStore() {
  const data = getPosts();
  const activeTag = writable("");

  const sortedTags = data.map((item) => item.tags).flatMap((item) => item);
  const rawTags = sortedTags.map((name) => ({ name, count: sortedTags.filter((v) => v === name).length }));
  const uniqueTags = rawTags.filter((tag, index) => index === rawTags.findIndex((t) => t.name === tag.name));

  const derivedStore = derived(activeTag, ($activeTag) => ({
    activeTag: $activeTag,
    tags: uniqueTags.sort((a, b) => b.count - a.count),
    posts: data.filter((item) => ($activeTag ? item.tags.includes($activeTag) : true))
  }));

  return {
    set: activeTag.set,
    subscribe: derivedStore.subscribe
  };
}

export const posts = createStore();
