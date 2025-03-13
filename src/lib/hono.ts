import { env } from "@/env";
import type { AppType } from "@/server/hono";
import { hc } from "hono/client";

export const hono = hc<AppType>(env.NEXT_PUBLIC_APP_URL);
