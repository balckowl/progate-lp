import { db } from "@/db";
import { env } from "@/env";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { eq } from "drizzle-orm";
import { user as users } from "@/db/schema";

const stripeWebhookSecret = env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: Request) {
    // リクエストの検証
    const body = await req.text();
    const sig = (await headers()).get("Stripe-Signature");
    let event: Stripe.Event;
    try {
        if (!sig) throw new Error("No signature");
        event = stripe.webhooks.constructEvent(body, sig, stripeWebhookSecret);
    } catch (error) {
        const err = error instanceof Error ? error : new Error("Bad Request");
        return new NextResponse(`Webhook Error: ${err.message}`, {
            status: 400,
        });
    }

    try {
        if (event.type === "payment_intent.succeeded") {
            const userId = event.data.object.metadata.userId
            const planType = event.data.object.metadata.planType

            await db.update(users).set({
                isPurchased: true,
                planType
            }).where(eq(users.id, userId))
        }else if(event.type === "payment_intent.payment_failed"){
            console.error('決済失敗！！！！！！')
        }
        return NextResponse.json(200)
    }catch(e){
        void e
        return NextResponse.json(400)
    }
}