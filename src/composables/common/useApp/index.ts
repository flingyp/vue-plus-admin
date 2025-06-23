import { useGetLocalKey } from '@flypeng/tool/browser';
import { internationalReg, changeDayjsLocales } from '~/utils';
import { THEME_MODE_KEY } from '~/common';

// To do things when init application
export function useApp() {
  const { t } = useI18n();

  const route = useRoute();
  const { toggleDark } = useTheme();
  const vadmireConfigStore = useVAdmireConfigStore();
  const { name, isCollapsedSider, defaultLocales } = storeToRefs(vadmireConfigStore);

  // init theme mode (auto config tailwindcss class theme mode)
  toggleDark(useGetLocalKey(THEME_MODE_KEY) === 'dark');

  // listener window size change
  useMonitorWindow(([width]: [number, number]) => {
    if (width <= 768) isCollapsedSider.value = true;
    else isCollapsedSider.value = false;
  });

  // set title tag content
  const setHtmlTitle = () => {
    let menuText = route.meta.text || '';
    if (internationalReg.test(menuText)) {
      const key = menuText.match(internationalReg)?.[1];
      if (key) {
        menuText = t(key);
      }
    }

    document.querySelector('title')!.innerHTML = menuText ? `${menuText} | ${name.value}` : name.value;
  };
  watch(defaultLocales, setHtmlTitle);
  watch(() => route.name, setHtmlTitle);

  // init dayjs locales
  changeDayjsLocales(defaultLocales.value);
}
