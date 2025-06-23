import { VAdmireRoute } from '@vadmire/router';
import { LOGIN_ROUTE_NAME, NOT_FOUND_404_ROUTE_NAME } from '~/common';

export const CONSTANT_ROUTES: VAdmireRoute[] = [
  {
    path: '/',
    name: 'Home',
    redirect: '/about',
    meta: {
      isShow: false,
    },
  },
  {
    path: '/login',
    name: LOGIN_ROUTE_NAME,
    component: '~/views/auth/SystemAuth.vue',
    meta: {
      text: 'SystemAuth',
      isShow: false,
    },
  },
  {
    path: '/404',
    name: NOT_FOUND_404_ROUTE_NAME,
    component: '~/views/common/NotFound.vue',
    meta: {
      text: '404',
      isShow: false,
    },
  },
  {
    path: '/about',
    name: 'SystemAbout',
    component: 'Layout',
    children: [
      {
        path: '',
        name: 'SystemAboutIndex',
        component: '~/views/SystemAbout.vue',
        meta: {
          text: '$t("route.about")',
          icon: 'mdi:about-variant',
          single: true,
        },
      },
    ],
  },
  {
    path: '/common',
    name: 'CommonPage',
    component: 'Layout',
    meta: {
      text: '$t("route.commonPage")',
      icon: 'cib:creative-commons-share',
    },
    children: [
      {
        path: '404',
        name: 'Common_NotFound',
        component: '~/views/common/NotFound.vue',
        meta: {
          text: '$t("route.commonNotFound")',
          icon: 'tabler:error-404',
        },
      },
      {
        path: '500',
        name: 'Common_ServerDown',
        component: '~/views/common/ServerDown.vue',
        meta: {
          text: '$t("route.commonServerError")',
          icon: 'la:500px',
        },
      },
      {
        path: 'naive_component',
        name: 'Common_NaiveUIComponent',
        component: '~/views/common/NaiveUIComponent.vue',
        meta: {
          text: '$t("route.commonNaiveUIComponent")',
          icon: 'radix-icons:component-1',
        },
      },
    ],
  },
  {
    path: '/feature',
    name: 'Feature',
    component: 'Layout',
    meta: {
      text: '$t("route.commonFeature")',
      icon: 'mdi:feature-highlight',
    },
    children: [
      {
        path: 'icon',
        name: 'Feature_Icon',
        component: '~/views/features/Icons.vue',
        meta: {
          text: '$t("route.commonIconifyIcon")',
          icon: 'line-md:iconify1',
        },
      },
      {
        path: 'permission',
        name: 'Feature_Permission',
        component: '~/views/features/Permissions.vue',
        meta: {
          text: '$t("route.commonPermission")',
          icon: 'arcticons:permissionchecker',
        },
      },
      {
        path: 'wangEditor',
        name: 'Feature_WangEditor',
        component: '~/views/features/WangEditor.vue',
        meta: {
          text: '$t("route.commonWangEditor")',
          icon: 'icon-park-outline:editor',
        },
      },
      {
        path: 'vditor',
        name: 'Feature_Vditor',
        component: '~/views/features/Vditor.vue',
        meta: {
          text: '$t("route.commonMarkdown")',
          icon: 'bi:markdown',
        },
      },
      {
        path: 'echarts',
        name: 'Feature_Echarts',
        component: '~/views/features/Echarts.vue',
        meta: {
          text: '$t("route.commonEcharts")',
          icon: 'et:piechart',
        },
      },
      {
        path: 'xgPlayer',
        name: 'Feature_XGPlayer',
        component: '~/views/features/XGPlayer.vue',
        meta: {
          text: '$t("route.commonXGPlayer")',
          icon: 'carbon:data-player',
        },
      },
      {
        path: 'table',
        name: 'Feature_Table',
        component: '~/views/features/Table.vue',
        meta: {
          text: '$t("route.commonTable")',
          icon: 'ic:outline-table-view',
        },
      },
      {
        path: 'imagePreview',
        name: 'Feature_ImagePreview',
        component: '~/views/features/ImagePreview.vue',
        meta: {
          text: '$t("route.commonImagePreview")',
          icon: 'bx:bx-image',
        },
      },
      {
        path: 'clipboard',
        name: 'Feature_Clipboard',
        component: '~/views/features/Clipboard.vue',
        meta: {
          text: '$t("route.commonClipboard")',
          icon: 'mdi:clipboard-text',
        },
      },
      {
        path: 'draggable',
        name: 'Feature_Draggable',
        component: '~/views/features/Draggable.vue',
        meta: {
          text: '$t("route.commonDraggable")',
          icon: 'mdi:drag-variant',
        },
      },
      {
        path: 'html2canvas',
        name: 'Feature_Html2Image',
        component: '~/views/features/Html2Image.vue',
        meta: {
          text: '$t("route.commonHtml2Image")',
          icon: 'mdi:file-image',
        },
      },
      {
        path: 'logicFlow',
        name: 'Feature_LogicFlow',
        component: '~/views/features/LogicFlow.vue',
        meta: {
          text: '$t("route.commonLogicFlow")',
          icon: 'carbon:flow',
        },
      },
      {
        path: 'watermark',
        name: 'Feature_Watermark',
        component: '~/views/features/Watermark.vue',
        meta: {
          text: '$t("route.commonWatermark")',
          icon: 'material-symbols:branding-watermark-outline',
        },
      },
      {
        path: '',
        name: 'GuideIndex',
        component: '~/views/features/Guide.vue',
        meta: {
          text: '$t("route.commonGuide")',
          icon: 'mdi:home',
          sort: Infinity,
        },
      },
    ],
  },
  {
    path: '/docs',
    name: 'Feature_Docs',
    component: 'Layout',
    meta: {
      text: '$t("route.commonDocs")',
      icon: 'iconoir:google-docs',
    },
    children: [
      {
        path: 'vue',
        name: 'Feature_Docs_Vue',
        meta: {
          text: 'Vue',
          icon: 'vscode-icons:file-type-vue',
          url: 'https://cn.vuejs.org',
          link: 'INTERNAL_LINK',
        },
      },
      {
        path: 'tailwindcss',
        name: 'Feature_TailwindCSS',
        meta: {
          text: 'TailwindCSS',
          icon: 'logos:tailwindcss-icon',
          url: 'https://www.tailwindcss.cn',
          link: 'INTERNAL_LINK',
        },
      },
      {
        path: 'naive-ui',
        name: 'Feature_Docs_NaiveUI',
        meta: {
          text: 'NaiveUI',
          icon: 'logos:naiveui',
          url: 'https://www.naiveui.com',
          link: 'INTERNAL_LINK',
        },
      },
      {
        path: 'vite',
        name: 'Feature_Docs_Vite',
        meta: {
          text: 'Vite',
          icon: 'vscode-icons:file-type-vite',
          url: 'https://cn.vitejs.dev',
          link: 'EXTERNAL_LINK',
        },
      },
    ],
  },
  {
    path: '/level-1',
    name: 'Level-1',
    component: 'Layout',
    meta: {
      text: '$t("route.commonMultilevelMenu")',
      icon: 'mdi:feature-highlight',
      sort: 1,
    },
    children: [
      {
        path: 'level-2-1',
        name: 'Level-1_Level-2-1',
        component: '~/views/level/Level-2-1.vue',
        meta: {
          text: 'Level-2-1',
        },
      },
      // {
      //   path: 'level-2-2',
      //   name: 'Level-1_Level-2-2',
      //   meta: {
      //     text: 'Level-2-2',
      //   },
      //   children: [
      //     {
      //       path: 'level-3-1',
      //       name: 'Level-1_Level-2-2_Level-3-1',
      //       component: '~/views/level/Level-3-1.vue',
      //       meta: {
      //         text: 'Level-3-1',
      //       },
      //     },
      //     {
      //       path: 'level-3-3',
      //       name: 'Level-1_Level-2-2_Level-3-3',
      //       meta: {
      //         text: 'Level-3-3',
      //       },
      //       children: [
      //         {
      //           path: 'level-4-1',
      //           name: 'Level-1_Level-2-2_Level-3-3_Level-4-1',
      //           component: '~/views/level/Level-4-1.vue',
      //           meta: {
      //             text: 'Level-4-1',
      //           },
      //         },
      //       ],
      //     },
      //   ],
      // },
    ],
  },
];

export const MATCH_404_ROUTES: VAdmireRoute = {
  path: '/:catchAll(.*)',
  redirect: '/404',
  name: 'Match_404',
  meta: {
    isShow: false,
  },
};
