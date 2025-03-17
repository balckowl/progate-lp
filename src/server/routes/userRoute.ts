import { createRoute, z } from "@hono/zod-openapi";
import { purchasedboolSchema, purchasedUserSchema } from "../models/userSchemas";

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


export const getPurchasedUsersRoute = createRoute({
    path: "/purchased",
    method: "get",
    description: "購入したユーザーを取得",
    responses: {
        200: {
            description: "取得成功",
            content: {
                "application/json": {
                    schema: z.array(purchasedUserSchema)
                }
            }
        }
    }
})


export const getPurchasedBoolRoute = createRoute({
    path: "/is-purchased",
    method: "get",
    description: "ユーザーの購入プランを取得",
    responses: {
        200: {
            description: "取得成功",
            content: {
                "application/json": {
                    schema: purchasedboolSchema
                }
            }
        }
    }
})
