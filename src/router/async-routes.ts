import { VAdmireRoute } from '@vadmire/router';

export const ASYNC_ROUTES: VAdmireRoute[] = [
  {
    path: '/permission',
    name: 'Permission',
    component: 'Layout',
    meta: {
      text: '权限管理',
      icon: 'arcticons:permission-pilot',
    },
    children: [
      {
        path: 'admin',
        name: 'Permission_Admin',
        component: '~/views/permission/PermissionAdmin.vue',
        meta: {
          text: '超级管理员',
          permissions: ['sys:admin:*'],
          icon: 'icon-park-outline:permissions',
        },
      },
      {
        path: 'user',
        name: 'Permission_User',
        component: '~/views/permission/PermissionUser.vue',
        meta: {
          text: '普通管理员',
          permissions: ['sys:user:*'],
          icon: 'icon-park-outline:permissions',
        },
      },
      {
        path: 'button',
        name: 'PermissionButton',
        component: '~/views/permission/PermissionButton.vue',
        meta: {
          text: '按钮权限管理',
          icon: 'arcticons:permissionchecker',
        },
      },
    ],
  },
];
