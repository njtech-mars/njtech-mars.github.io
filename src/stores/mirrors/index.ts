import { writable } from "svelte/store";

import type { MirrorType, SortRuleType } from "$types/mirror";

const searchKeywords = writable("");
const mirrors = writable<MirrorType[] | null>(null);
const sortRule = writable<SortRuleType>({ key: "name", asc: false });

export { searchKeywords, mirrors, sortRule };
