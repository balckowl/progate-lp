import type { Meta, StoryObj } from "@storybook/react";
import Hero from "./Hero";

type T = typeof Hero;

export default {
    title: "organisms/Hero",
    component: Hero,
    tags: ["autodocs"],
} satisfies Meta<T>;

export const Before_Login: StoryObj<T> = {
    args: {
        session: true,
        lang: "ja"
    },
};
export const After_Login: StoryObj<T> = {
    args: {
        session: false,
        lang: "ja"
    },
};

export const EN_Before_Login: StoryObj<T> = {
    args: {
        session: true,
        lang: "en"
    },
};
export const EN_After_Login: StoryObj<T> = {
    args: {
        session: false,
        lang: "en"
    },
};
