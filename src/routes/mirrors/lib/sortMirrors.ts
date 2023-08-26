import type { MirrorType, SortRuleType } from "$types/mirror";

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

export default function sortMirrors(mirrors: MirrorType[], sortRule: SortRuleType) {
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
