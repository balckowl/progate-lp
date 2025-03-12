import { createRoute, z } from "@hono/zod-openapi";

export const createStripeUserRoute = createRoute({
    path: "/",
    method: "get",
    description: "Stripeのユーザーを作成",
    responses: {
        200: {
            description: "作成成功"
        }
    }
})