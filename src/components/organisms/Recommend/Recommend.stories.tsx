import type { Meta, StoryObj } from '@storybook/react';
import Recommend from "./Recommend";

type T = typeof Recommend;

export default {
    title: 'organisms/Recommend',
    component: Recommend,
    tags: ["autodocs"]
} satisfies Meta<T>;

export const Before_Login: StoryObj<T> = {
    args: {
        session: false,
           lang: "ja"
    }
}

export const After_Login: StoryObj<T> = {
    args: {
        session: true,
           lang: "ja"
    }
}

export const EN_Before_Login: StoryObj<T> = {
    args: {
        session: false,
        lang: "en"
    }
}

export const EN_After_Login: StoryObj<T> = {
    args: {
        session: true,
        lang: "en"
    }
}
