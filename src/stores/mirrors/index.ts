import { writable, derived } from "svelte/store";

import formatDate from "$lib/utils/formatDate";
import type { MirrorType, SortRuleType } from "$types/mirror";

function searchMirrors(mirrors: MirrorType[], searchKeywords: string) {
  type KeyType = "name" | "size" | "last_update" | "status";
  const keys: KeyType[] = ["name", "size", "last_update", "status"];

  return mirrors.filter((mirror) =>
    keys.some((key) => {
      if (key === "last_update") return formatDate(mirror[key]).includes(searchKeywords);
      else return mirror[key]?.toLowerCase().includes(searchKeywords);
    })
  );
}

function getSize(size: string) {
  const MB = 1024;
  const GB = MB * 1024;
  const TB = GB * 1024;

  const int = parseInt(size);
  if (!int) return 0;
  if (size.includes("M")) return int * MB;
  else if (size.includes("G")) return int * GB;
  else if (size.includes("T")) return int * TB;
  else return int;
}

function sortMirrors(mirrors: MirrorType[], sortRule: SortRuleType) {
  let copiedMirrors = Array.from(mirrors);
  if (sortRule.key === "name") copiedMirrors = mirrors.sort((a, b) => a.name.localeCompare(b.name));
  else if (sortRule.key === "size") copiedMirrors = mirrors.sort((a, b) => getSize(a.size) - getSize(b.size));
  else if (sortRule.key === "update") {
    copiedMirrors = mirrors.sort((a, b) => new Date(b.last_update).getTime() - new Date(a.last_update).getTime());
  } else if (sortRule.key === "status") {
    const failedMirrors = mirrors.filter((mirror) => mirror.status === "failed");
    const syncingMirrors = mirrors.filter((mirror) => mirror.status === "syncing");
    const successMirrors = mirrors.filter((mirror) => mirror.status === "success");
    copiedMirrors = [...failedMirrors, ...syncingMirrors, ...successMirrors];
  }

  if (sortRule.asc) copiedMirrors = copiedMirrors.reverse();
  return copiedMirrors;
}

function createStore() {
  const mirrors = writable<MirrorType[]>([]);
  const searchKeywords = writable("");
  const sortRule = writable<SortRuleType>({ key: "name", asc: false });
  const derivedStore = derived([mirrors, searchKeywords, sortRule], ([$mirrors, $searchKeywords, $sortRule]) => ({
    sortRule: $sortRule,
    searchKeywords: $searchKeywords,
    mirrors: sortMirrors(searchMirrors($mirrors, $searchKeywords), $sortRule)
  }));

  return {
    setMirrors: mirrors.set,
    setSortRule: sortRule.set,
    setSearchKeywords: searchKeywords.set,
    subscribe: derivedStore.subscribe
  };
}

export const mirrors = createStore();
