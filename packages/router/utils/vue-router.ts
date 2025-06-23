import { Router, RouteRecordRaw } from 'vue-router';

/**
 * 挂载路由
 * @param route 路由配置
 * @param routerInstance 路由实例
 */
export const mountRoute = (route: RouteRecordRaw, routerInstance: Router) => {
  routerInstance.addRoute(route);
};

/**
 * 移除路由
 * @param route 路由配置
 * @param routerInstance 路由实例
 */
export const removeRoute = (route: RouteRecordRaw, routerInstance: Router) => {
  if (route.name) {
    routerInstance.removeRoute(route.name);
  }
};
