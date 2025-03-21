import Pricing from "@/components/organisms/Pricing/Pricing";
import { PricingList } from "@/const/PricingList";
import { hono } from "@/lib/hono";
import { headers } from "next/headers";
import Stripe from "stripe";

type Props = {
  params: Promise<{ lang: string }>
}

export default async function Page({ params }: Props) {

  const { lang } = await params

  const resIsPurchased = await hono.api.users["is-purchased"].$get({},
    {
      init: {
        headers: await headers()
      }
    }
  )

  const { isPurchased } = await resIsPurchased.json()

  if (!isPurchased) {
    //stripeに登録
    await hono.api.users.$get({}, {
      init: {
        headers: await headers()
      }
    })

    const resIsPrices = await hono.api.products.$get()
    const prices = await resIsPrices.json() as Stripe.Price[]

    for (const [index, price] of prices.entries()) {
      const res = await hono.api.checkout[":priceId"].$get({
        param: {
          priceId: price.id
        },
      }, {
        init: {
          headers: await headers()
        }
      })

      const { url: checkOutUrl } = await res.json()
      PricingList[index + 1].url = checkOutUrl
    }
  }

  return (
    <>
      <Pricing
        list={PricingList}
        isPurchased={isPurchased}
        lang={lang}
      />
    </>
  );
}
