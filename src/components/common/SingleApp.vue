<script setup lang="ts">
import { darkTheme, zhCN, dateZhCN, enUS, dateEnUS, koKR, dateKoKR } from 'naive-ui';
import { useVAdmireConfigStore } from '~/store';

import BaseSpin from '~/components/common/BaseSpin.vue';

defineOptions({ name: 'SingleApp' });

const { naiveThemeOverrides, themeMode, defaultLocales } = storeToRefs(useVAdmireConfigStore());

const { isLoading, loadingText } = inject('loading') as { isLoading: boolean; loadingText: string };

// Naive UI 语言配置
const naiveUILocale = computed(() => {
  if (defaultLocales.value === 'zh_CN') {
    return {
      language: zhCN,
      dateLanguage: dateZhCN,
    };
  }
  if (defaultLocales.value === 'en_US') {
    return {
      language: enUS,
      dateLanguage: dateEnUS,
    };
  }
  if (defaultLocales.value === 'ko_KR') {
    return {
      language: koKR,
      dateLanguage: dateKoKR,
    };
  }
  return {
    language: zhCN,
    dateLanguage: dateZhCN,
  };
});
</script>

<template>
  <Suspense>
    <NConfigProvider
      :theme="themeMode === 'LIGHT' ? null : darkTheme"
      :theme-overrides="naiveThemeOverrides"
      :locale="naiveUILocale?.language"
      :date-locale="naiveUILocale?.dateLanguage"
      class="w-screen h-screen overflow-hidden"
    >
      <NNotificationProvider placement="bottom-right">
        <NDialogProvider>
          <NMessageProvider>
            <slot v-if="!isLoading" />

            <BaseSpin
              v-else
              class="w-screen h-screen overflow-hidden"
              size="medium"
              :is-loading="isLoading"
              :loading-text="loadingText"
            />
          </NMessageProvider>
        </NDialogProvider>
      </NNotificationProvider>
    </NConfigProvider>
  </Suspense>
</template>
