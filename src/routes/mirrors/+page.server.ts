import z from "zod";

import { Mirror } from "$types/mirror";

export const prerender = false;

export async function load() {
  try {
    const result = await fetch("https://mirrors.njtech.edu.cn/jobs").then((res) => res.json());
    const mirrors = z.array(Mirror).parse(result);
    return { mirrors };
  } catch (error) {
    console.error(error);
  }
}
