import { RouteHandler } from "@hono/zod-openapi"
import { stripe } from "@/lib/stripe"
import { getCheckoutUrlRoute } from "../routes/stripeRoute"
import { auth } from "@/auth"
import { headers } from "next/headers"
import { getUserById } from "@/feature/user"
import { env } from "@/env"


export const getCheckoutUrlHandler: RouteHandler<typeof getCheckoutUrlRoute> = async (c) => {

    const { priceId } = c.req.valid("param")
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (!session) {
        throw Error("認証してください")
    }

    const userId = session.user.id;
    const user = await getUserById(userId)
    if (!user) {
        throw Error("ユーザーが存在しません")
    }

    const customerId = user.customerId
    if (!customerId) {
        throw Error("カスタマーが存在しません")
    }

    const products = await stripe.checkout.sessions.create({
        customer: customerId,
        success_url: `${env.NEXT_PUBLIC_APP_URL}/success`,
        cancel_url: `${env.NEXT_PUBLIC_APP_URL}/`,
        mode: "payment",
        payment_method_types: ["card"],
        line_items: [{
            price: priceId,
            quantity: 1
        }],
        metadata: { userId },
        payment_intent_data: {
            metadata:{ userId }
        }
    })

    if (!products.url) {
        throw Error('Checkout URLがありません')
    }
    return c.json({ url: products.url }, 200)
}