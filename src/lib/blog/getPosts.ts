import type { ComponentType } from 'svelte';
import { PostMetadataWithoutSlug } from '$types/postMetadata';

export default function getPosts() {
  const posts = [];
  const paths = import.meta.glob('/src/posts/*.md', { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split('/').at(-1)?.replace('.md', '');
    if (file && typeof file === 'object' && 'metadata' in file && slug) {
      // @ts-expect-error
      const content: ComponentType = file.default;
      const metadata = PostMetadataWithoutSlug.parse(file.metadata);
      posts.push({ ...metadata, slug, content });
    }
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
