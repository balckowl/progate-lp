export type PricingType = {
  name: string,
  features: string[],
  price: string,
  cta: string,
  url: string;
}

export const PricingList = [
  {
    name: "Free",
    price: "￥0",
    features: ["price_free_d_1", "price_free_d_2"],
    cta: "price_download_bn",
    url: "/success"
  },
  {
    name: "Standard",
    price: "￥3,000",
    features: ["price_standard_d_1", "price_standard_d_2"],
    cta: "price_support_bn",
    url: "/success"
  },
  {
    name: "Pro",
    price: "￥999,999,999",
    features: ["price_pro_d_1", "price_pro_d_2"],
    cta: "price_support_bn",
    url: "/success"
  }
]
