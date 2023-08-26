import z from "zod";

import { Mirror } from "$types/mirror";
import { mirrors } from "$stores/mirrors";

export default async function fetchMirros() {
  try {
    const result = await fetch("https://mirrors.njtech.edu.cn/jobs").then((res) => res.json());
    const data = z.array(Mirror).parse(result);
    mirrors.set(data);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
