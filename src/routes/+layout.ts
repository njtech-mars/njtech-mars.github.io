import type { Config } from "@sveltejs/kit";

export const prerender = true;
export const trailingSlash = "always";

export const config: Config = {
  runtime: "edge"
};
