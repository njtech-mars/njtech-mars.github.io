import { getPosts } from "$lib/blog";

export const prerender = true;

export async function GET() {
  const posts = getPosts();

  const title = "Mars工作室";
  const description = "Mars工作室主页";
  const url = "https://marsstudio.vercel.app";
  const headers = { "Content-Type": "application/xml" };

  const xml = `
<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>${title}</title>
    <description>${description}</description>
    <link>${url}</link>
    <atom:link href="${url}/rss.xml" rel="self" type="application/rss+xml"/>
        ${posts
          .map(
            (post) => `
      <item>
        <title>${post.title}</title>
        <description>${post.intro}</description>
        <link>${url}/blog/${post.slug}</link>
        <guid isPermaLink="true">${url}/blog/${post.slug}</guid>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      </item>`
          )
          .join("")
          .trim()}
  </channel>
</rss>`.trim();

  return new Response(xml, { headers });
}
