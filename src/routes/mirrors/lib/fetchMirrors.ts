import z from "zod";

import { Mirror } from "$types/mirror";
import { mirrors } from "$stores/mirrors";

const cache = new Map();

export async function fetchMirros() {
  if (cache.has("mirrors")) {
    mirrors.setMirrors(cache.get("mirrors"));
    return true;
  } else {
    try {
      const result = await fetch("https://mirrors.njtech.edu.cn/jobs").then((res) => res.json());
      const data = z.array(Mirror).parse(result);

      cache.set("mirrors", data);
      mirrors.setMirrors(data);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
