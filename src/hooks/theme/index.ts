import type { Handle } from "@sveltejs/kit";

export const theme: Handle = async ({ event, resolve }) => {
  const theme = event.cookies.get("theme") || "light";

  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace("%theme%", theme)
  });
};
