import data from './config';
import { writable } from 'svelte/store';

const tags = [...new Set(data.flatMap((link) => link.tags))];

function createStore() {
  const { set, subscribe } = writable(data);

  return {
    tags,
    subscribe,
    reset: () => set(data),
    filter: (tag: string) => set(data.filter((item) => item.tags.includes(tag)))
  };
}

export const links = createStore();
