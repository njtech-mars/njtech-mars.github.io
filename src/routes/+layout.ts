import type { Config } from "@sveltejs/kit";

export const prerender = true;

export const config: Config = {
  runtime: "edge"
};
