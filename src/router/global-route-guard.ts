import { Store } from 'pinia';
import { NavigationGuardNext, RouteLocationNormalized, Router, RouteRecordRaw } from 'vue-router';
import {
  filterRoutes,
  generateSystemMenu,
  mountRoute,
  sortSystemMenu,
  transform,
  VAdmireRoute,
  vadmireRouteToRouteRecordRaw,
} from '@vadmire/router';
import { useCommonType, useDeepClone } from '@flypeng/tool/browser';
import { RouteMenuStore, useRouteMenuStore } from '~/store';
import { CONSTANT_ROUTES, MATCH_404_ROUTES } from './constant-routes';
import { ASYNC_ROUTES } from './async-routes';
import { getSystemAccountInfo, getSystemAccountAsyncRoutes } from '~/requests';
import { AUTH_TOKEN, WHITE_ROUTE_LIST, HANDLE_ROUTE_FORM, LOGIN_ROUTE_NAME, SYSTEM_HOME_ROUTE_NAME } from '~/common';

export const routeGenerateMenuProcess = async (
  routerInstance: Router,
  routeMenuStore: Store<'routeMenuStore', RouteMenuStore, object, object>,
) => {
  // 1. get account info
  const { data: systemAccountInfo } = await getSystemAccountInfo();
  const permissions: string[] = systemAccountInfo.permissions || [];

  // 2. filter VAdmireRoute async route
  let filterAsyncRoutes: VAdmireRoute[] = [];
  if (HANDLE_ROUTE_FORM === 'WEB') {
    const asyncRoutes = useDeepClone(ASYNC_ROUTES);
    filterAsyncRoutes = filterRoutes(asyncRoutes, permissions);
  } else if (HANDLE_ROUTE_FORM === 'SERVER') {
    filterAsyncRoutes = await (await getSystemAccountAsyncRoutes()).data;
  }

  // 3. transform route list of VAdmireRoute[] to route of RouteRecordRaw[]
  const vrouterAsyncRoutes = vadmireRouteToRouteRecordRaw(filterAsyncRoutes);
  const vrouterConstantRoutes = vadmireRouteToRouteRecordRaw(CONSTANT_ROUTES);

  // 4. generate menu
  const vadmireMenu = sortSystemMenu(generateSystemMenu([...CONSTANT_ROUTES, ...filterAsyncRoutes]));

  // 5. mount async route
  vrouterAsyncRoutes.forEach((route: RouteRecordRaw) => {
    if (route.meta?.link === 'EXTERNAL_LINK') return;
    mountRoute(route, routerInstance);
  });

  // 6. initial state store
  routeMenuStore.account = systemAccountInfo;
  routeMenuStore.vadmireConstantRoutes = CONSTANT_ROUTES;
  routeMenuStore.vadmireAsyncRoutes = filterAsyncRoutes;
  // @ts-ignore
  routeMenuStore.vadmireMenu = vadmireMenu;
  routeMenuStore.vrouterConstantRoutes = vrouterConstantRoutes;
  routeMenuStore.vrouterAsyncRoutes = vrouterAsyncRoutes;
};

export default async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
  routeInstance: Router,
) => {
  const routeMenuStore = useRouteMenuStore();

  const localAuthToken = sessionStorage.getItem(AUTH_TOKEN);

  // local have auth token case
  if (!useCommonType.isNull(localAuthToken)) {
    if (from.name === LOGIN_ROUTE_NAME && to.name !== LOGIN_ROUTE_NAME) {
      // 1. go to route from login page and the route is not login page
      if (!routeMenuStore.isMountedRoute) {
        await routeGenerateMenuProcess(routeInstance, routeMenuStore);
        routeMenuStore.isMountedRoute = true;
        next({ path: to.fullPath, replace: true });
      }
    } else if (useCommonType.isUndefined(from.name) && to.name !== LOGIN_ROUTE_NAME) {
      // 2. it isn't from login page and isn't go to login page (refresh page case)
      if (!routeMenuStore.isMountedRoute) {
        await routeGenerateMenuProcess(routeInstance, routeMenuStore);
        routeMenuStore.isMountedRoute = true;
        next({ path: to.fullPath, replace: true });
      }
    } else if (to.name === LOGIN_ROUTE_NAME) {
      // 3. want to jump to the login page manually
      next({ name: SYSTEM_HOME_ROUTE_NAME });
    }

    // mount not found common route
    if (!routeMenuStore.isMountedNotFoundRoute) {
      mountRoute(transform(MATCH_404_ROUTES), routeInstance);
      routeMenuStore.isMountedNotFoundRoute = true;
    }

    next();
  } else {
    // check whether white list is configured
    const isAccess = WHITE_ROUTE_LIST.includes(to.name as string);
    // release if configured, otherwise it will go to the login page
    if (isAccess) {
      next();
    } else {
      next({ name: LOGIN_ROUTE_NAME });
    }
  }
};
