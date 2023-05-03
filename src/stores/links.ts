import data from './config';
import { writable, derived } from 'svelte/store';

function createStore() {
  const activeTag = writable('');

  const derivedStore = derived(activeTag, ($activeTag) => ({
    activeTag: $activeTag,
    tags: [...new Set(data.flatMap((link) => link.tags))],
    links: data.filter((item) => ($activeTag ? item.tags.includes($activeTag) : true))
  }));

  return {
    set: activeTag.set,
    subscribe: derivedStore.subscribe
  };
}

export const links = createStore();
