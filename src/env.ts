import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        DATABASE_URL: z.string().url(),
        BASE_URL: z.string().url(),
        BETTER_AUTH_SECRET: z.string(),
        GOOGLE_CLIENT_ID: z.string(),
        GOOGLE_CLIENT_SECRET: z.string(),
        STRIPE_SECRET_KEY: z.string(),
    },
    client: {
        NEXT_PUBLIC_STRIPE_PUBLIC_KEY: z.string(),
        NEXT_PUBLIC_APP_URL: z.string().url()
    },
    runtimeEnv: {
        NEXT_PUBLIC_STRIPE_PUBLIC_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY,
        STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
        DATABASE_URL: process.env.DATABASE_URL,
        BASE_URL: process.env.BASE_URL,
        BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL
    },
});
