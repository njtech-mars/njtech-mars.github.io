import z from "zod";
import type { Readable } from "svelte/store";

const Mirror = z.object({
  name: z.string(),
  is_master: z.boolean(),
  status: z.enum(["success", "failed", "syncing"]),
  last_update: z.string(),
  last_update_ts: z.number(),
  last_started: z.string(),
  last_started_ts: z.number(),
  last_ended: z.string(),
  last_ended_ts: z.number(),
  next_schedule: z.string(),
  next_schedule_ts: z.number(),
  upstream: z.string(),
  size: z.string()
});

type MirrorType = z.TypeOf<typeof Mirror>;

interface SortRuleType {
  asc: boolean;
  key: "name" | "size" | "update" | "status";
}

interface MirrorsReadableType {
  sortRule: SortRuleType;
  searchKeywords: string;
  mirrors: MirrorType[];
}

interface MirrorsStoreType extends Readable<MirrorsReadableType> {
  setSortRule: (value: SortRuleType) => void;
  setSearchKeywords: (value: string) => void;
  setMirrors: (value: MirrorType[]) => void;
}

export { Mirror };
export type { MirrorType, SortRuleType, MirrorsStoreType };
