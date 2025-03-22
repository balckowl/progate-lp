import type { Meta, StoryObj } from '@storybook/react';
import About from "./About";
import { AboutList } from '@/const/AboutList';

type T = typeof About;

export default {
  title: 'organisms/About',
  component: About,
  tags: ["autodocs"]
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  args: {
    list: AboutList,
    lang: "ja"
  }
};

export const EN: StoryObj<T> = {
  args: {
    list: AboutList,
    lang: "en"
  }
};
