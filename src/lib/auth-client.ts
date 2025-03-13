import { createAuthClient } from "better-auth/client"
import { hono } from "./hono"
const authClient = createAuthClient()

export const signIn = async () => {
  await authClient.signIn.social({
    provider: "github"
  })
}

export const signOut = async (fetchOption: any) => {
  await authClient.signOut({
    ...fetchOption
  })
}
