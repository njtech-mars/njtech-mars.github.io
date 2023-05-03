import type { ComponentType } from 'svelte';
import type { Readable } from 'svelte/store';

export interface LinkType {
  color: string;
  name: string;
  icon: ComponentType;
  link: string;
  subtitle: string;
  tags: string[];
}

interface LinksReadableType {
  activeTag: string;
  tags: string[];
  links: LinkType[];
}

export interface LinksStoreType extends Readable<LinksReadableType> {
  set: (tag: string) => void;
}
