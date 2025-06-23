import { Router, RouteRecordRaw } from 'vue-router';

/**
 * mount route
 * @param route
 * @param routerInstance
 */
export const mountRoute = (route: RouteRecordRaw, routerInstance: Router) => {
  routerInstance.addRoute(route);
};

/**
 * remove route
 * @param route
 * @param routerInstance
 */
export const removeRoute = (route: RouteRecordRaw, routerInstance: Router) => {
  if (route.name) {
    routerInstance.removeRoute(route.name);
  }
};
