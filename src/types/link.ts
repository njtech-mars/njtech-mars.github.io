import type { ComponentType } from 'svelte';

export interface LinkType {
  color: string;
  name: string;
  icon: ComponentType;
  link: string;
  subtitle: string;
  tags: string[];
  detail: string;
}
