import { Scissors, Layers, Wand2 } from "lucide-react";

export type AboutItemType = {
  icon: React.ReactNode,
  title: string,
  description: string
}

export const AboutList = [
  {
    icon: <Scissors />,
    title: "about_t_1",
    description: "about_d_1"
  },
  {
    icon: <Layers />,
    title: "about_t_2",
    description: "about_d_2"
  },
  {
    icon: <Wand2 />,
    title: "about_t_3",
    description: "about_d_3"
  },
]
