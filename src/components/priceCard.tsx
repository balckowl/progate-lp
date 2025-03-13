import { hono } from "@/lib/hono";
import { headers } from "next/headers";
import Stripe from "stripe";

export default async function PriceCard({ price }: { price: Stripe.Price }) {

  const product = price.product as Stripe.Product
  const res = await hono.api.checkout[":priceId"].$get({
    param: {
      priceId: price.id
    },
  },{
    init: {
      headers: await headers()
    }
  })

  const { url: checkOutUrl } = await res.json()

  return (
    <div>
      <h2>{product.name}</h2>
      <p>¥{price.unit_amount}</p>
      <a href={checkOutUrl}>ダウンロードする</a>
    </div>
  );
}
