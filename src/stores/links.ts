import data from '../data';
import { writable, derived } from 'svelte/store';

function createStore() {
  const activeTag = writable('');

  const sortedTags = data.map((item) => item.tags).flatMap((item) => item);
  const tagsWithReq = sortedTags.map((val) => ({ val, freq: sortedTags.filter((v) => v === val).length }));
  const uniqueTags = [...new Set(tagsWithReq.sort((a, b) => b.freq - a.freq).map((item) => item.val))];

  const derivedStore = derived(activeTag, ($activeTag) => ({
    tags: uniqueTags,
    activeTag: $activeTag,
    links: data.filter((item) => ($activeTag ? item.tags.includes($activeTag) : true)).sort((a, b) => b.heat - a.heat)
  }));

  return {
    set: activeTag.set,
    subscribe: derivedStore.subscribe
  };
}

export const links = createStore();
