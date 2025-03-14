import { RouteHandler } from "@hono/zod-openapi";
import { getPurchasedUsersRoute } from "../routes/userRoute";
import { db } from "@/db";


export const getPurchasedUsersHandler: RouteHandler<typeof getPurchasedUsersRoute> = async (c) => {

    const purchasedUsers = await db.query.user.findMany({
        columns: {
            name: true,
            image: true,
            planType: true
        },
        where: (user, { eq }) => eq(user.isPurchased, true)
    });
    

    return c.json(purchasedUsers, 200)
}