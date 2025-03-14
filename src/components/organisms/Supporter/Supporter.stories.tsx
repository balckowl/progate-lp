import type { Meta, StoryObj } from "@storybook/react";
import Supporter from "./Supporter";
import { SupportersList } from "@/const/SupportersList";

type T = typeof Supporter;

export default {
    title: "organisms/Supporter",
    component: Supporter,
    tags: ["autodocs"],
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
    args: {
        list: SupportersList,
    },
};
