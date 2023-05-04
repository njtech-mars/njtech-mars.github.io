import data from '../data';
import { writable, derived } from 'svelte/store';

function createStore() {
  const activeTag = writable('');

  const sortedTags = data.map((item) => item.tags).sort((a, b) => b.length - a.length);
  const uniqueTags = [...new Set(sortedTags.flatMap((item) => item))];

  const derivedStore = derived(activeTag, ($activeTag) => ({
    tags: uniqueTags,
    activeTag: $activeTag,
    links: data.filter((item) => ($activeTag ? item.tags.includes($activeTag) : true))
  }));

  return {
    set: activeTag.set,
    subscribe: derivedStore.subscribe
  };
}

export const links = createStore();
