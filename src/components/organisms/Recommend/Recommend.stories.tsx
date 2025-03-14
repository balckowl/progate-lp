import type { Meta, StoryObj } from '@storybook/react';
import Recommend from "./Recommend";

type T = typeof Recommend;

export default {
    title: 'organisms/Recommend',
    component: Recommend,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};
