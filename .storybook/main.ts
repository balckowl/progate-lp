import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  "stories": ["../src/**/*.stories.tsx"],
  features: {
    experimentalRSC: true
  },
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
  ],
  "framework": {
    "name": "@storybook/nextjs",
    "options": {}
  },
  "staticDirs": [
    "../public",
    "../src/i18n"
  ]
};
export default config;
