import type { Meta, StoryObj } from '@storybook/react';
import PricingCard from "./PricingCard";
import { PricingList } from '@/const/PricingList';

type T = typeof PricingCard;

export default {
  title: 'molecules/PricingCard',
  component: PricingCard,
} satisfies Meta<T>;

const {
  name,
  price,
  features,
  cta,
  url
} = PricingList[0]

export const Default: StoryObj<T> = {
  render: () => {
    return (
      <div className='w-[400px]'>
        <PricingCard
          name={name}
          price={price}
          features={features}
          cta={cta}
          url={url}
          isPurchased={true}
          lang="ja"
        />
      </div>
    )
  }
};

export const EN: StoryObj<T> = {
  render: () => {
    return (
      <div className='w-[400px]'>
        <PricingCard
          name={name}
          price={price}
          features={features}
          cta={cta}
          url={url}
          isPurchased={true}
          lang="en"
        />
      </div>
    )
  }
};


