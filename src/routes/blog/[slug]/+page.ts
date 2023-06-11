import { error } from "@sveltejs/kit";
import getPosts from "$lib/blog/getPosts";

export async function load({ params }) {
  try {
    const post = getPosts().find((post) => post.slug === params.slug);
    if (!post) throw error(404, `Not Found`);
    return { post };
  } catch (e) {
    throw error(404, `Not Found`);
  }
}
