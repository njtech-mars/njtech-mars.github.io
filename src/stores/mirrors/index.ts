import { writable, derived } from "svelte/store";

import { formatDate } from "$lib/utils";
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

function sortMirrors(mirrors: MirrorType[], sortRule: SortRuleType) {
  let newMirrors = [...mirrors];
  if (sortRule.key === "name") newMirrors = mirrors.sort((a, b) => a.name.localeCompare(b.name));
  else if (sortRule.key === "status") newMirrors = mirrors.sort((a, b) => a.status.localeCompare(b.status));
  else if (sortRule.key === "update") {
    newMirrors = mirrors.sort((a, b) => new Date(b.last_update).getTime() - new Date(a.last_update).getTime());
  } else if (sortRule.key === "size") {
    const M = 1024;
    const G = M * 1024;
    const T = G * 1024;
    function getSize(size: string) {
      const int = parseInt(size);
      if (!int) return 0;
      return int * (size.includes("M") ? M : size.includes("G") ? G : size.includes("T") ? T : 1);
    }
    newMirrors = mirrors.sort((a, b) => getSize(a.size) - getSize(b.size));
  }

  if (sortRule.asc) newMirrors = newMirrors.reverse();
  return newMirrors;
}

function createStore() {
  const mirrors = writable<MirrorType[]>([]);
  const searchKeywrds = writable("");
  const sortRule = writable<SortRuleType>({ key: "name", asc: false });
  const derivedStore = derived([mirrors, searchKeywrds, sortRule], ([$mirrors, $searchKeywrds, $sortRule]) => ({
    sortRule: $sortRule,
    searchKeywrds: $searchKeywrds,
    mirrors: sortMirrors(searchMirrors($mirrors, $searchKeywrds), $sortRule)
  }));

  return {
    setSortRule: sortRule.set,
    setSearchKeywrds: searchKeywrds.set,
    setMirrors: mirrors.set,
    subscribe: derivedStore.subscribe
  };
}

export const mirrors = createStore();
