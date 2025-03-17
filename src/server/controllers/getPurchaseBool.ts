import { RouteHandler } from "@hono/zod-openapi";
import { getPurchasedBoolRoute } from "../routes/userRoute";
import { db } from "@/db";
import { auth } from "@/auth";
import { headers } from "next/headers";


export const getPurchasedBoolHandler: RouteHandler<typeof getPurchasedBoolRoute> = async (c) => {

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

    const isPurchased = await db.query.user.findFirst({
        columns: {
            isPurchased: true
        },
        where: (user, { eq }) => eq(user.id, userId)
    });


    return c.json(isPurchased, 200)
}
