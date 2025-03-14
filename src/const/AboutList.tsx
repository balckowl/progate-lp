import { Scissors, Layers, Wand2 } from "lucide-react";

export type AboutItemType = {
  icon: React.ReactNode,
  title: string,
  description: string
}

export const AboutList = [
  {
    icon: <Scissors />,
    title: "高精度カット編集",
    description: "フレーム単位の精密な編集が可能。直感的な操作で素早くカット編集ができます。"
  },
  {
    icon: <Layers />,
    title: "マルチレイヤー対応",
    description: "複数のレイヤーを使って、プロフェッショナルな映像効果を実現します。"
  },
  {
    icon: <Wand2 />,
    title: "AIエフェクト",
    description: "AIを活用した最新のビデオエフェクトで、作品のクオリティを向上させます。"
  },
]
