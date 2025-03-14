import { RouteHandler } from "@hono/zod-openapi"
import { stripe } from "@/lib/stripe"
import { getCheckoutUrlRoute } from "../routes/stripeRoute"
import { auth } from "@/auth"
import { getUserById } from "@/feature/user"
import { env } from "@/env"
import { headers } from "next/headers"


export const getCheckoutUrlHandler: RouteHandler<typeof getCheckoutUrlRoute> = async (c) => {
    const { priceId } = c.req.valid("param")
    const session = await auth.api.getSession({
        query: {
            disableCookieCache: true,
        },
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

    const price = (await stripe.prices.retrieve(priceId))
    const planType = price.metadata.rank

    const products = await stripe.checkout.sessions.create({
        customer: customerId,
        success_url: `${env.NEXT_PUBLIC_APP_URL}/success`,
        cancel_url: `${env.NEXT_PUBLIC_APP_URL}/download`,
        mode: "payment",
        payment_method_types: ["card"],
        line_items: [{
            price: priceId,
            quantity: 1
        }],
        metadata: { userId, planType },
        payment_intent_data: {
            metadata: { userId, planType }
        }
    })

    if (!products.url) {
        throw Error('Checkout URLがありません')
    }
    return c.json({ url: products.url }, 200)
}
