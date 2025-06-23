import { defineStore } from 'pinia';
import { VAdmireMenuOption } from 'naive-ui';
import { RouteRecordRaw, VAdmireRoute } from 'vue-router';
import { useGetLocalKey, useSetLocalKey } from '@flypeng/tool/browser';

import { SystemAccountInfo } from '~/requests';
import { TAB_MENU_KEY } from '~/common';

export interface RouteMenuStore {
  account: SystemAccountInfo;
  isMountedRoute: boolean;
  isMountedNotFoundRoute: boolean;
  isReloadView: boolean;
  vadmireConstantRoutes: VAdmireRoute[];
  vadmireAsyncRoutes: VAdmireRoute[];
  vadmireMenu: VAdmireMenuOption[];
  vrouterConstantRoutes: RouteRecordRaw[];
  vrouterAsyncRoutes: RouteRecordRaw[];
  breadCrumbMenus: VAdmireMenuOption[];
  tabMenuKeys: string[];
}

export const useRouteMenuStore = defineStore('routeMenuStore', {
  state: (): RouteMenuStore => ({
    account: {
      id: '',
      username: '',
      nickname: '',
      birthday: '',
      roles: [],
      permissions: [],
    },
    isMountedNotFoundRoute: false,
    isMountedRoute: false,
    isReloadView: false,
    vadmireConstantRoutes: [],
    vadmireAsyncRoutes: [],
    vadmireMenu: [],
    vrouterConstantRoutes: [],
    vrouterAsyncRoutes: [],
    breadCrumbMenus: [],
    tabMenuKeys: JSON.parse(useGetLocalKey(TAB_MENU_KEY) || '[]') as string[],
  }),
  getters: {
    vadmireMenuByFlat(state) {
      const { vadmireMenu } = state;
      const vadmireMenuByFlat: VAdmireMenuOption[] = [];
      const flat = (menu: VAdmireMenuOption[]) => {
        menu.forEach((item) => {
          vadmireMenuByFlat.push(item);
          if (item.children) flat(item.children);
        });
      };
      // @ts-ignore
      flat(vadmireMenu);
      return vadmireMenuByFlat;
    },
    // 菜单扁平化后不包含父级菜单
    vadmireChildrenMenuByFlat(state) {
      const { vadmireMenu } = state;
      const vadmireChildrenMenuByFlat: VAdmireMenuOption[] = [];
      const flat = (menu: VAdmireMenuOption[]) => {
        menu.forEach((item) => {
          if (!item.children) vadmireChildrenMenuByFlat.push(item);
          else flat(item.children);
        });
      };
      flat(vadmireMenu);
      return vadmireChildrenMenuByFlat;
    },
    vadmireTabMenu(state) {
      const { tabMenuKeys } = state;
      const menuByFlat = this.vadmireMenuByFlat;
      const menuList: VAdmireMenuOption[] = [];

      for (const item of tabMenuKeys) {
        const tabMenu = menuByFlat.find((menu) => menu.key === item);
        if (tabMenu) menuList.push(tabMenu);
      }
      return menuList;
    },
  },
  actions: {
    // create tab menu key
    createTabMenuKey(key: string) {
      if (!this.tabMenuKeys.includes(key)) {
        this.tabMenuKeys = [...this.tabMenuKeys, key];
        useSetLocalKey(TAB_MENU_KEY, JSON.stringify(this.tabMenuKeys));
      }
    },
    // remove tab menu key
    removeTabMenuKey(key: string) {
      const deleteIndex = this.tabMenuKeys.indexOf(key);
      if (deleteIndex !== -1) {
        this.tabMenuKeys.splice(deleteIndex, 1);
        useSetLocalKey(TAB_MENU_KEY, JSON.stringify(this.tabMenuKeys));
      }
    },
    // remove tab menu keys list
    removeTabMenuKeyList(existKey: string) {
      const existKeyIndex = this.tabMenuKeys.indexOf(existKey);
      if (existKeyIndex !== -1) {
        this.tabMenuKeys = [this.tabMenuKeys[existKeyIndex]];
        useSetLocalKey(TAB_MENU_KEY, JSON.stringify(this.tabMenuKeys));
      }
    },
  },
});
