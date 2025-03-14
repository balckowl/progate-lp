import type { Meta, StoryObj } from '@storybook/react';
import FeatureCard from "./FeatureCard";
import { Layers } from "lucide-react"

type T = typeof FeatureCard;

export default {
  title: 'molecules/FeatureCard',
  component: FeatureCard,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  render: () => {
    return (
      <div className='w-100'>
        <FeatureCard
          title="マルチレイヤー対応"
          description="複数のレイヤーを使って、プロフェッショナルな映像効果を実現します。"
          icon={<Layers />}
        />
      </div>
    )
  }
};

