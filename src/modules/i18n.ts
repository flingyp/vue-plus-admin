import { App } from 'vue';
import { createI18n } from 'vue-i18n';
import { useGetLocalKey } from '@flypeng/tool/browser';
import { CN, EN, KR } from '~/locales';
import { defaultVAdmireConfig } from '~/vadmire.config';
import { LOCAL_SYSTEM_KEY } from '~/common';

const { defaultLocales } = defaultVAdmireConfig();

const currentLocale = JSON.parse(useGetLocalKey(LOCAL_SYSTEM_KEY) || '{}').defaultLocales || defaultLocales;

const messages = {
  zh_CN: { ...CN },
  en_US: { ...EN },
  ko_KR: { ...KR },
};

// 注册 i18n 插件
export const useI18n = (app: App) => {
  app.use(
    createI18n({
      messages,
      locale: currentLocale,
      fallbackLocale: defaultLocales,
      allowComposition: true,
    }),
  );
};
