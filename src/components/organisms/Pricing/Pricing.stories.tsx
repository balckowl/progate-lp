import type { Meta, StoryObj } from '@storybook/react';
import Pricing from "./Pricing";
import { PricingList } from '@/const/PricingList';

type T = typeof Pricing;

export default {
    title: 'organisms/Pricing',
    component: Pricing,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  args:{
    list: PricingList
  }
};

