export type PricingType = {
  name: string,
  description: string,
  features: string[],
  price: string,
  cta: string
}

export const PricingList = [
  {
    name: "Free",
    price: "$10",
    description: "開発をサポート",
    features: ["アプリケーション完全アクセス", "無料アップデート"],
    cta: "プロ"
  },
  {
    name: "standard",
    price: "$10",
    description: "開発をサポート",
    features: ["アプリケーション完全アクセス", "無料アップデート"],
    cta: "プロ"
  },
  {
    name: "Pro",
    price: "$10",
    description: "開発をサポート",
    features: ["アプリケーション完全アクセス", "無料アップデート"],
    cta: "プロ"
  }
]
