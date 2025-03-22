import { createAuthClient } from "better-auth/client";
const authClient = createAuthClient();

export type Session = typeof authClient.$Infer.Session;

export const signIn = async () => {
    await authClient.signIn.social({
        provider: "github",
    });
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const signOut = async (fetchOption: any) => {
    await authClient.signOut({
        ...fetchOption,
    });
};
