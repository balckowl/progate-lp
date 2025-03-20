import i18next, { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { getOptions, defaultLanguage } from './settings';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

const initI18next = async (lang: string) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(Backend)
    .use(I18nextBrowserLanguageDetector) 
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`),
      ),
    )
    .init(getOptions(lang));
  return i18nInstance;
};

export async function getTranslation(lang = defaultLanguage) {
  const i18nextInstance = await initI18next(lang);
  return {
    t: i18nextInstance.getFixedT(lang),
    i18n: i18nextInstance,
  };
}
