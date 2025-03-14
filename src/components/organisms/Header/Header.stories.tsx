import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";

type T = typeof Header;

export default {
    title: "organisms/Header",
    component: Header,
    parameters: {
        nextjs: {
            appDirectory: true,
        },
    },
    tags: ["autodocs"],
} satisfies Meta<T>;

export const Login: StoryObj<T> = {
    args: {
        session: {
            user: {
                name: "John Doe",
            },
        },
        lang: "en"
    },
};
export const Logout: StoryObj<T> = {
    args: {
        session: null,
        lang: "en"
    },
};
