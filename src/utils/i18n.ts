import { useDeepClone } from '@flypeng/tool/browser';
import type { VAdmireMenuOption } from 'naive-ui';
import { ComposerTranslation } from 'vue-i18n';

export const internationalReg = /^\$t\(['"]([^']+)['"]\)$/;

/**
 * Converts internationalized text to actual text
 * @param menu
 * @param t: const { t } = useI18n()
 * @returns
 */
export const transformMenu = (menu: VAdmireMenuOption, t: ComposerTranslation) => {
  const newMenu = useDeepClone(menu) as VAdmireMenuOption;
  if (newMenu.children) {
    newMenu.children = newMenu.children.map((item) => transformMenu(item, t));
  }
  let menuText = menu.label as string;
  if (internationalReg.test(menuText)) {
    const key = menuText.match(internationalReg)?.[1];
    if (key) {
      menuText = t(key);
    }
  }
  newMenu.label = menuText;
  return newMenu;
};
