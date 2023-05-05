import z from 'zod';

const PostMetadataWithoutSlug = z.object({
  title: z.string(),
  date: z.string(),
  update: z.string(),
  author: z.string(),
  tags: z.array(z.string()),
  intro: z.string()
});

const PostMetadata = PostMetadataWithoutSlug.merge(z.object({ slug: z.string() }));

type PostMetadatType = z.TypeOf<typeof PostMetadata>;
type PostMetadataWithoutSlugType = z.TypeOf<typeof PostMetadataWithoutSlug>;

export type { PostMetadatType, PostMetadataWithoutSlugType };
export { PostMetadata, PostMetadataWithoutSlug };
