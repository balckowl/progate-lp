import { env } from "@/env"

export type PricingType = {
  name: string,
  description: string,
  features: string[],
  price: string,
  cta: string,
  url: string
}

export let PricingList = [
  {
    name: "Free",
    price: "$0",
    description: "開発をサポート",
    features: ["アプリケーション完全アクセス", "無料アップデート"],
    cta: "プロ",
    url: "/success"
  },
  {
    name: "standard",
    price: "$10",
    description: "開発をサポート",
    features: ["アプリケーション完全アクセス", "無料アップデート"],
    cta: "プロ",
    url: ""
  },
  {
    name: "Pro",
    price: "$10",
    description: "開発をサポート",
    features: ["アプリケーション完全アクセス", "無料アップデート"],
    cta: "プロ",
    url: ""
  }
]
