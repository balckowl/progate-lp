import type { Preview } from '@storybook/react'
import "../src/app/[lang]/globals.css"
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import React from 'react';
import { getTranslation } from "../src/i18n/server";
import { ThemeProvider } from "../src/components/ui/theme-provider";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', title: 'English' },
        { value: 'ja', title: 'Japan' },
      ],
      showName: true,
    },
  },
};

const withI18next = async (Story, context) => {

  const { locale } = context.globals;
  const { i18n } = await getTranslation(locale)

  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <I18nextProvider i18n={i18n}>
          <Story />
        </I18nextProvider>
      </ThemeProvider>
    </Suspense>
  );
};

// export decorators for storybook to wrap your stories in
export const decorators = [withI18next];

