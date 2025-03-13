import PriceCard from "@/components/priceCard";
import { hono } from "@/lib/hono";
import { headers } from "next/headers";
import Stripe from "stripe";

export default async function Page() {

  //stripeに登録
  await hono.api.users.$get({},{
    init: {
      headers: await headers()
    }
  })

  const res = await hono.api.products.$get()
  const prices = await res.json() as Stripe.Price[]

  return (
    <div>
      {prices.map((price) => (
        <PriceCard price={price} key={price.id} />
      ))}
    </div>
  );
}
