import { RouteHandler } from "@hono/zod-openapi"
import { stripe } from "@/lib/stripe"
import { getStripeProductsRoute } from "../routes/stripeRoute"


export const getStripeProductsHandler: RouteHandler<typeof getStripeProductsRoute> = async (c) => {
    const products = await stripe.prices.list({
        lookup_keys: ["s3", "s5"],
        expand: ["data.product"],
    })
    return c.json(products.data, 200)
}
