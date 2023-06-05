import getPosts from "$lib/blog/getPosts";

export const prerender = true;

export async function GET() {
  const posts = getPosts();

  const title = "Mars工作室";
  const url = "https://marsstudio.vercel.app";
  const headers = { "Content-Type": "application/xml" };
  const description =
    "MarsStudio 是南京工业大学信息中心学生开发团队，成立于2001年4月。我们的目标是维持校园互联网团队的运作和传承。";

  const xml = `
<?xml version="1.0" encoding="utf-8"?>
<?xml-stylesheet type="text/css" href="/assets/css/rss.css" ?>
<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>${title}</title>
    <description>${description}</description>
    <link>${url}</link>
    <atom:link href="${url}/rss.xml" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        ${posts
          .map(
            (post) => `
      <item>
        <title>${post.title}</title>
        <author>${post.author}</author>
        <description>${post.intro}</description>
        <link>${url}/blog/${post.slug}</link>
        <guid isPermaLink="true">${url}/blog/${post.slug}</guid>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        ${post.tags
          .map(
            (tag) => `
        <category>${tag}</category>`
          )
          .join("")
          .trim()}
      </item>`
          )
          .join("")
          .trim()}
  </channel>
</rss>`.trim();

  return new Response(xml, { headers });
}
