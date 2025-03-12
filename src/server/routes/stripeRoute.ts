import { createRoute } from "@hono/zod-openapi";

export const getStripeProductsRoute = createRoute({
    path: "/",
    method: "get",
    description: "Stripeの商品を取得",
    responses: {
        200: {
            description: "取得成功"
        }
    }
})