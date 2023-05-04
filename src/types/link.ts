import z from 'zod';
import type { ComponentType } from 'svelte';
import type { Readable } from 'svelte/store';

const Link = z.object({
  color: z.string(),
  name: z.string(),
  icon: z.custom<ComponentType>(),
  link: z.string(),
  subtitle: z.string(),
  tags: z.array(z.string()),
  heat: z.number()
});

interface LinksReadableType {
  activeTag: string;
  tags: string[];
  links: LinkType[];
}

export type LinkType = z.TypeOf<typeof Link>;

export interface LinksStoreType extends Readable<LinksReadableType> {
  set: (tag: string) => void;
}
