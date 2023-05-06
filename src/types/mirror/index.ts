import z from "zod";

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

export { Mirror };
export type { MirrorType };
