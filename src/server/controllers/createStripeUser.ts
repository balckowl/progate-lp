import { RouteHandler } from "@hono/zod-openapi"
import { createStripeUserRoute } from "../routes/userRoute"
import { getUserById, insertCustomerId } from "@/feature/user"
import { stripe } from "@/lib/stripe"
import { auth } from "@/auth"
import { headers } from "next/headers"


export const createStripeUserHander: RouteHandler<typeof createStripeUserRoute> = async (c) => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (!session) {
        throw Error("認証してください")
    }
    const userId = session.user.id;
    const user = await getUserById(userId)

    if (!user) {
        throw Error("userが存在しません")
    }
    const customer = await stripe.customers.create({
        name: user.name,
        email: user.email,
        preferred_locales: ["ja"],
        metadata: {
            userId
        }
    })

    await insertCustomerId(userId, customer.id)
    return c.json(200)
}