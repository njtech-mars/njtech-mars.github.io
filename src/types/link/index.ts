import z from 'zod';
import type { ComponentType } from 'svelte';
import type { Readable } from 'svelte/store';

interface LinksReadableType {
  activeTag: string;
  tags: { name: string; count: number }[];
  links: LinkType[];
}

export const Link = z.object({
  name: z.string(),
  icon: z.custom<ComponentType>(),
  link: z.string(),
  subtitle: z.string(),
  tags: z.array(z.string()),
  heat: z.number(),
  pinned: z.boolean()
});

export type LinkType = z.TypeOf<typeof Link>;

export interface LinksStoreType extends Readable<LinksReadableType> {
  set: (tag: string) => void;
}
