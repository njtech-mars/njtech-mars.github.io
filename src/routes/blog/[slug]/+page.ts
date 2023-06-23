import { error } from "@sveltejs/kit";
import getPosts from "$lib/blog/getPosts";

export async function load({ params }) {
  try {
    const posts = getPosts();
    const currentIndex = posts.findIndex((post) => post.slug === params.slug);
    if (currentIndex === -1) throw error(404, `Not Found`);

    const prevIndex = currentIndex - 1;
    const nextIndex = currentIndex + 1;

    const post = posts[currentIndex];
    const prev = prevIndex >= 0 ? posts[prevIndex] : null;
    const next = nextIndex < posts.length ? posts[nextIndex] : null;

    return { post, prev, next };
  } catch (e) {
    throw error(404, `Not Found`);
  }
}
