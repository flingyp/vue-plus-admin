import { createRouter, createWebHashHistory } from 'vue-router';
import { vadmireRouteToRouteRecordRaw } from './utils';
import { CONSTANT_ROUTES } from '~/router/constant-routes';

const pages = import.meta.glob('../../src/views/**/*.vue');

// 创建路由实例
const router = createRouter({
  strict: true,
  routes: vadmireRouteToRouteRecordRaw(CONSTANT_ROUTES),
  history: createWebHashHistory(),
});

export { router, pages };
export * from './utils';
