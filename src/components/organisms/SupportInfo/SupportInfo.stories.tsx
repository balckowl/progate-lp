import type { Meta, StoryObj } from '@storybook/react';
import SupportInfo from "./SupportInfo";

type T = typeof SupportInfo;

export default {
    title: 'organisms/SupportInfo',
    component: SupportInfo,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};
