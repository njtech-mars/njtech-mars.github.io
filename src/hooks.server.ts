import { theme } from "$hooks/theme";
import { sequence } from "@sveltejs/kit/hooks";

export const handle = sequence(theme);
