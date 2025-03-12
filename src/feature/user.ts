import { db } from "@/db"
import { user as users } from "@/db/schema";
import { eq } from "drizzle-orm";


export const getUserById = async (userId: string) => {
    try {
        const user = await db.query.user.findFirst({
            where: eq(users.id, userId),
            columns: {
                name: true,
                email: true,
            },
        })
        return user;
    } catch (e) {
        throw (e)
    }
};


export const insertCustomerId = async (userId: string, customerId: string) => {
    try {
        await db.update(users).set({
            customerId
        }).where(eq(users.id, userId))
    } catch (e) {
        throw (e)
    }

};