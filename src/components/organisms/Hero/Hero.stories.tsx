import type { Meta, StoryObj } from "@storybook/react";
import Hero from "./Hero";

type T = typeof Hero;

export default {
    title: "organisms/Hero",
    component: Hero,
    tags: ["autodocs"],
} satisfies Meta<T>;

export const Login: StoryObj<T> = {
    args: {
        session: true,
    },
};
export const Logout: StoryObj<T> = {
    args: {
        session: false,
    },
};
