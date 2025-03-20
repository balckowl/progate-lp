import type { Meta, StoryObj } from '@storybook/react';
import Faq from "./Faq";
import { FaqList } from '@/const/FaqList';

type T = typeof Faq;

export default {
  title: 'organisms/Faq',
  component: Faq,
  tags: ["autodocs"]
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  args: {
    list: FaqList,
    lang: "ja"
  }
};

export const EN: StoryObj<T> = {
  args: {
    list: FaqList,
    lang: "en"
  }
};
