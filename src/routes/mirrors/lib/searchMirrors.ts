import formatDate from "$lib/utils/formatDate";
import type { MirrorType } from "$types/mirror";

export default function searchMirrors(mirrors: MirrorType[], searchKeywords: string) {
  type KeyType = "name" | "size" | "last_update" | "status";
  const keys: KeyType[] = ["name", "size", "last_update", "status"];

  return mirrors.filter((mirror) =>
    keys.some((key) => {
      if (key === "last_update") return formatDate(mirror[key]).includes(searchKeywords);
      else return mirror[key]?.toLowerCase().includes(searchKeywords);
    })
  );
}
