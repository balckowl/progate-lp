import type { Meta, StoryObj } from '@storybook/react';
import SectionTitle from "./SectionTitle";

type T = typeof SectionTitle;

export default {
    title: 'molecules/SectionTitle',
    component: SectionTitle,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  args: {
    title: "主な機能"
  }
};
