import { RouteRecordRaw, RouteRecordRedirectOption } from 'vue-router';
import { VAdmireRoute } from './types';
import NotFound from '~/views/common/NotFound.vue';
import ContainerLayout from '~/layout/basic/ContainerLayout.vue';
import SingleIframe from '~/components/common/SingleIframe.vue';
import { VAdmireMenuOption } from 'naive-ui';

import { useCommonType, useDeepClone } from '@flypeng/tool/browser';
import { pages } from '../index';

/**
 * 判断是否以斜杠开头
 * @param value
 * @returns
 */
const isSlashStart = (value: string) => /^\//g.test(value);

/**
 * 获取组件绝对路径
 * @param component
 * @returns
 */
export const getViewComponent = (component: string) => {
  const keyPath = component.replace('~/', '../../src/');
  return pages[keyPath];
};

/**
 * 判断路由是否为单级路由
 * @param route
 */
export const isSingleRoute = (route: VAdmireRoute): boolean => {
  // 当路由有子路由时，如果子路由有子路由，则返回 false，否则返回 true
  if (route.children && route.children.length > 0) {
    return route.children.some((childRoute) => {
      if (childRoute.children && childRoute.children.length > 0) return false;
      return true;
    });
  }
  return true;
};

/**
 * 提取所有多级路由的子路由
 * @param route
 * @returns
 */
const extractSubRoute = (route: VAdmireRoute, path = route.path): VAdmireRoute[] => {
  let subrouteList: VAdmireRoute[] = [];
  if (route.children) {
    route.children.forEach((item) => {
      const childPath = `${path}/${item.path}`;
      if (!item.children || item.children.length === 0) {
        item.path = childPath;
        subrouteList.push(item);
      } else {
        subrouteList = [...subrouteList, ...extractSubRoute(item, childPath)];
      }
    });
  }
  return subrouteList;
};

/**
 * 提取所有多级路由的父路由
 * @param route
 * @returns
 */
const extractMultilevelRoute = (route: VAdmireRoute, path = route.path): VAdmireRoute[] => {
  let multilevelRouteList: VAdmireRoute[] = [];
  multilevelRouteList.push(route);
  route.children?.forEach((item) => {
    if (item.children) {
      item.path = `${path}/${item.path}`;
      multilevelRouteList = [...multilevelRouteList, ...extractMultilevelRoute(item)];
    }
  });
  return multilevelRouteList;
};

/**
 * 处理多级路由
 * @param route
 * @returns
 */
export const handleMultilevelRoute = (route: VAdmireRoute): VAdmireRoute => {
  const multilevelRoute: VAdmireRoute = useDeepClone(route);

  const subRouteList = extractSubRoute(multilevelRoute);
  const parentRouteList = extractMultilevelRoute(multilevelRoute);

  const parentVAdmireRouteList = parentRouteList.map((parentRoute) => {
    const vadmireRoute: VAdmireRoute = {
      path: '',
      redirect: '',
      name: '',
    };

    const firstChildRoute = parentRoute?.children?.[0];

    vadmireRoute.path = isSlashStart(parentRoute.path) ? `${parentRoute.path}` : `/${parentRoute.path}`;
    vadmireRoute.redirect = `${firstChildRoute?.path}`;
    vadmireRoute.name = parentRoute.name;
    vadmireRoute.meta = parentRoute.meta;

    return vadmireRoute;
  });

  const subRouteVAdmireRouteList = subRouteList.map((childRoute) => {
    const vadmireRoute: VAdmireRoute = {
      path: '',
      component: '',
      name: '',
    };

    vadmireRoute.path = childRoute.path;
    vadmireRoute.component = childRoute.component;
    vadmireRoute.name = childRoute.name;
    vadmireRoute.meta = childRoute.meta;

    return vadmireRoute;
  });

  const parentRoute: VAdmireRoute = parentRouteList[0];
  parentRoute.component = 'Layout';
  parentRoute.children = [...subRouteVAdmireRouteList, ...parentVAdmireRouteList];

  return parentRoute;
};

/**
 * VAdmireRoute[] => RouteRecordRaw[]
 * @param routes
 * @returns
 */
export const vadmireRouteToRouteRecordRaw = (routes: VAdmireRoute[]): RouteRecordRaw[] => {
  const vadmireRoutes: VAdmireRoute[] = useDeepClone(routes);
  const vrouterRoutes: RouteRecordRaw[] = [];

  vadmireRoutes.forEach((route) => {
    vrouterRoutes.push(transform(route));
  });
  return vrouterRoutes;
};

/**
 * VAdmireRoute => RouteRecordRaw
 * @param route
 * @returns
 */
export const transform = (route: VAdmireRoute): RouteRecordRaw => {
  let vadmireRoute = {
    path: route.path,
    name: route.name,
    meta: route.meta,
    component: (route.component && getViewComponent(route.component)) || NotFound,
    redirect: route.redirect as RouteRecordRedirectOption,
    children: [],
  } as RouteRecordRaw;
  /**
   * 1. 先判断是不是多级菜单
   *  1.1 如果是则按照多级菜单的形式处理路由（将所有子路由全部抽离出来变成二级路由，多级菜单的父路由全部重定向到自己的第一个子路由上）
   *  1.2 如果不是则按照二级菜单的形式处理路由
   */
  if (isSingleRoute(route)) {
    vadmireRoute.children = vadmireRouteToRouteRecordRaw(route.children || []);
  } else {
    /**
     * 将多级路由转换为二级路由
     * 多级路由的父路由重定向到第一个子路由
     */
    const multilevelVAdmireRoutes = handleMultilevelRoute(route);
    const multilevelVRoutes = transform(multilevelVAdmireRoutes);

    multilevelVRoutes.children = vadmireRouteToRouteRecordRaw(multilevelVAdmireRoutes.children!);
    vadmireRoute = multilevelVRoutes;
  }

  if (route.component === 'Layout') {
    vadmireRoute.component = ContainerLayout;
  }

  // 使用内嵌链接
  if (route.meta?.link && route.meta.link === 'INTERNAL_LINK') {
    vadmireRoute.component = SingleIframe;
  }

  return vadmireRoute;
};

/**
 * 生成系统菜单
 * @param routes
 * @returns
 */
export const generateSystemMenu = (routes: VAdmireRoute[]): VAdmireMenuOption[] => {
  const menus: VAdmireMenuOption[] = [];

  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    const { meta } = route;

    if (useCommonType.isUndefined(meta?.isShow) || meta?.isShow === true) {
      const menu: VAdmireMenuOption = {};
      let handleRoute = useDeepClone(route) as VAdmireRoute;

      if (handleRoute.children && handleRoute.children.length > 0) {
        if (handleRoute.children.length === 1 && handleRoute.children[0].meta?.single) {
          // single route

          handleRoute = handleRoute.children[0];
        } else {
          menu.children = generateSystemMenu(handleRoute.children);
        }
      }
      menu.label = handleRoute.meta?.text || '默认标题';
      menu.sort = handleRoute.meta?.sort || 0;
      menu.key = handleRoute.name;
      if (handleRoute.meta?.icon) {
        menu.iconLabel = handleRoute.meta.icon;
        menu.icon = useRenderIcon(handleRoute.meta.icon);
      }

      if (handleRoute.meta?.link === 'EXTERNAL_LINK' && handleRoute.meta.url) {
        menu.link = handleRoute.meta.link;
        menu.url = handleRoute.meta.url;
      }

      menus.push(menu);
    }
  }
  return menus;
};

/**
 * 排序系统菜单
 * @param menus
 * @returns
 */
export const sortSystemMenu = (menus: VAdmireMenuOption[]): VAdmireMenuOption[] => {
  const sortMenus = useDeepClone(menus) as VAdmireMenuOption[];
  sortMenus.forEach((menu) => {
    if (menu.children && menu.children.length > 0) {
      menu.children = sortSystemMenu(menu.children);
    }
  });
  return sortMenus.sort((a, b) => (a.sort as number) - (b.sort as number));
};

export const filter = (routes: VAdmireRoute[], permissions: string[]) => {
  const newRoutes: VAdmireRoute[] = [];
  routes.forEach((route) => {
    if (route.children && route.children.length > 0) {
      route.children = filter(route.children, permissions);
    }
    /**
     * 用户是否有权限根据 *:*:* 结构去判断
     * (* 代表任何权限， 一般第一个代表系统，第二个代表系统模块，第三个代表具体的模块业务)
     * 例如：sys:user:update： 解读为用户模块更新权限）
     */
    let isHavePermission = false;
    const routePermissions = route.meta?.permissions || [];
    if (routePermissions.length === 0) isHavePermission = true;
    else {
      isHavePermission = routePermissions.some((item) => {
        const routePermissonList = item.split(':');
        return permissions.some((userPermission) => {
          const userPermissionList = userPermission.split(':');
          if (
            routePermissonList[0] === userPermissionList[0] &&
            routePermissonList[1] === userPermissionList[1] &&
            routePermissonList[2] === userPermissionList[2]
          )
            return true;
          return false;
        });
      });
    }
    // 判断路由是否有权限，有则添加
    if (isHavePermission) {
      newRoutes.push(route);
    }
  });
  return newRoutes;
};

/**
 * 过滤路由
 * @param routes
 * @param permissions
 * @returns
 */
export const filterRoutes = (routes: VAdmireRoute[], permissions: string[]) => {
  const filteredRoutes = filter(routes, permissions);
  return filteredRoutes;
};
