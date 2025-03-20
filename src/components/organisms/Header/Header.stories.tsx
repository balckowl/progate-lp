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

export const After_Login: StoryObj<T> = {
    args: {
        session: {
            user: {
                name: "John Doe",
            },
        },
        lang: "ja"
    },
};

export const Before_Login: StoryObj<T> = {
    args: {
        session: null,
        lang: "ja"
    },
};


export const EN_After_Login: StoryObj<T> = {
    args: {
        session: {
            user: {
                name: "John Doe",
            },
        },
        lang: "en"
    },
};

export const EN_Before_Login: StoryObj<T> = {
    args: {
        session: null,
        lang: "en"
    },
};
