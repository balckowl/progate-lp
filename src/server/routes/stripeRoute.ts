import { createRoute } from "@hono/zod-openapi";
import { checkoutSchema, priceIdSchema } from "../models/stripeSchemas";

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

export const getCheckoutUrlRoute = createRoute({
    path: "/{priceId}",
    method: "get",
    description: "StripeのCheckout URLを取得",
    request: {
        params: priceIdSchema
      },
    responses: {
        200: {
            description: "取得成功",
            content: {
                "application/json": {
                  schema: checkoutSchema
                }
              }
        }
    }
})