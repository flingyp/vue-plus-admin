import { defineStore } from 'pinia';
import { GlobalThemeOverrides } from 'naive-ui';
import { useGetLocalKey, useRemoveLocalKey, useSetLocalKey } from '@flypeng/tool/browser';
import { getDifSceneColor } from '~/utils';
import { defaultVAdmireConfig, sceneColorMap } from '~/vadmire.config';
import { AUTH_TOKEN, THEME_MODE_KEY, LOCAL_SYSTEM_KEY, DRIVER_CONFIG_KEY } from '~/common';
import { VAdmireConfig } from '~/types';

const localVAdmireConfig = { ...defaultVAdmireConfig(), ...JSON.parse(useGetLocalKey(LOCAL_SYSTEM_KEY) || '{}') };

export const useVAdmireConfigStore = defineStore('vadmireConfigStore', {
  state: (): VAdmireConfig => {
    localVAdmireConfig.primaryColor = localVAdmireConfig?.primaryColor || sceneColorMap.primary;
    if (useGetLocalKey(THEME_MODE_KEY) !== 'dark') {
      localVAdmireConfig.themeMode = 'LIGHT';
    } else {
      localVAdmireConfig.themeMode = 'DARK';
    }
    return localVAdmireConfig;
  },
  getters: {
    naiveThemeOverrides(state): GlobalThemeOverrides {
      const primaryColorMap = getDifSceneColor(state.primaryColor, 'primary');
      const infoColorMap = getDifSceneColor(sceneColorMap.info, 'info');
      const successColorMap = getDifSceneColor(sceneColorMap.success, 'success');
      const warningColorMap = getDifSceneColor(sceneColorMap.warning, 'warning');
      const errorColorMap = getDifSceneColor(sceneColorMap.error, 'error');
      return {
        common: {
          ...primaryColorMap,
          ...infoColorMap,
          ...successColorMap,
          ...warningColorMap,
          ...errorColorMap,
        },
      };
    },
    contentContainerHeight(state): string {
      if (state.isVisibleFooter && state.isVisibleTabBar) {
        return `calc(100vh - ${state.headerHeight}px - ${state.footerHeight}px - ${state.tabBarHeight}px)`;
      }
      if (state.isVisibleFooter && !state.isVisibleTabBar) {
        return `calc(100vh - ${state.headerHeight}px - ${state.footerHeight}px)`;
      }
      if (!state.isVisibleFooter && state.isVisibleTabBar) {
        return `calc(100vh - ${state.headerHeight}px  - ${state.tabBarHeight}px)`;
      }
      return `calc(100vh - ${state.headerHeight}px`;
    },
  },
  actions: {
    // 控制侧边栏是否收起
    handleIsCollapsedSider() {
      this.isCollapsedSider = !this.isCollapsedSider;
    },
    // 退出系统逻辑
    async handleExitSystem() {
      const routeMenuStore = useRouteMenuStore();
      // 重置获取路由和生成路由的相关变量
      routeMenuStore.isMountedRoute = false;
      routeMenuStore.isMountedNotFoundRoute = false;
      const defaultConfig = defaultVAdmireConfig();
      this.$state = defaultConfig;
      useSetLocalKey(LOCAL_SYSTEM_KEY, JSON.stringify(defaultConfig));
      useRemoveLocalKey(DRIVER_CONFIG_KEY);
      sessionStorage.removeItem(AUTH_TOKEN);
    },
  },
});
