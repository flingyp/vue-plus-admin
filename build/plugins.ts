import { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteMockServe as ViteMockServe } from 'vite-plugin-mock';
import { spaLoading } from 'vite-plugin-spa-loading';
import clearConsole from 'vite-plugin-clear-console';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import { Plugin as viteCDNPlugin } from 'vite-plugin-cdn-import';
import { VitePWA } from 'vite-plugin-pwa';
import VueDevTools from 'vite-plugin-vue-devtools';

import { useFormatDate } from '@flypeng/tool/browser';
import { useGetCurrentPath } from '@flypeng/tool/node';
import { writeFileSync } from 'fs';

import { name, version } from '../package.json';

/**
 * Vite config plugins
 * @param command
 * @param mode
 * @returns
 */
export const generatePlugins = (command: string, mode: string, buildTimestamp: number): PluginOption[] => {
  const pluginList: PluginOption[] = [
    vue(),
    // Mock Api
    ViteMockServe({
      mockPath: 'mock',
      localEnabled: command === 'serve',
      watchFiles: command === 'serve',
      logger: true,
    }),
    // Auto import api
    AutoImport({
      imports: ['vue', 'vue-router', 'vue-i18n', 'pinia', '@vueuse/core'],
      dts: 'auto-imports.d.ts',
      dirs: ['src/utils/**', 'src/store/**', 'src/composables/**'],
      vueTemplate: true,
    }),
    // Auto import component
    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
      dts: 'components.d.ts',
      types: [
        {
          from: 'vue-router',
          names: ['RouterLink', 'RouterView'],
        },
      ],
      resolvers: [
        IconsResolver({
          prefix: 'icon',
        }),
        NaiveUiResolver(),
      ],
    }),
    // Auto use Iconify icon
    Icons({
      autoInstall: true,
      compiler: 'vue3',
      scale: 1.2,
      defaultStyle: '',
      defaultClass: 'unplugin-icon',
      jsx: 'react',
    }),
    // First screen loading
    spaLoading('svg', {
      path: './public/spa-loading.svg',
      cssPath: './public/spa-loading.css',
    }),
    // Clear console
    clearConsole({
      inject: {
        path: './src/main.ts',
        template: [
          ` console.log('%c${name}%cV${version}',
            'padding: 2px 5px; border-radius: 3px 0 0 3px; color: #fff; background: #606060; font-weight: bold;',
            'padding: 2px 5px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e; font-weight: bold;')
          `,
          "console.log('%cGithub repository: https://github.com/flingyp/vadmire-admin', 'color: #1c6ce3;')",
        ],
      },
    }),
    // Packages CDN Links
    viteCDNPlugin({
      modules: [
        {
          name: 'xlsx',
          var: 'XLSX',
          path: 'https://cdn.sheetjs.com/xlsx-0.19.3/package/dist/xlsx.full.min.js',
        },
        {
          name: 'vditor',
          var: 'Vditor',
          path: 'https://unpkg.com/vditor@3.9.3/dist/index.min.js',
        },
        {
          name: '@wangeditor/editor',
          var: 'wangEditor',
          path: 'https://unpkg.com/@wangeditor/editor@5.1.23/dist/index.js',
        },
      ],
    }),
    // 将 node_modules 中的模块打包到自定义 vendor chunk 中，利用浏览器缓存机制，加快页面加载速度
    // Vite >= 2.9.0+ automatically splits vendor chunks when using the build command.
    // Reference: https://cn.vitejs.dev/guide/build.html#chunking-strategy
    // splitVendorChunkPlugin(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'logo.svg', '/pwa/180.png', 'config.json'],
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'VAdmire Admin',
        short_name: 'VAdmire',
        description: 'VAdmire Admin 是一款基于 Vue3 + TypeScript + NaiveUI 等技术栈搭建的后台系统',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa/128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: 'pwa/144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'pwa/152.png',
            sizes: '152x152',
            type: 'image/png',
          },
          {
            src: 'pwa/167.png',
            sizes: '167x167',
            type: 'image/png',
          },
          {
            src: 'pwa/180.png',
            sizes: '180x180',
            type: 'image/png',
          },
          {
            src: 'pwa/192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa/256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: 'pwa/512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa/512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'pwa/512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),

    // Build Start Plugin
    {
      name: 'vite-plugin-vadmire-build-start',
      buildStart: () => {
        console.log('vite-plugin-vadmire-build-start:', useFormatDate('yyyy-MM-dd hh:mm:ss', buildTimestamp));
        writeFileSync(
          `${useGetCurrentPath()}/public/config.json`,
          `{
  "buildTime": ${buildTimestamp}
}`,
          { encoding: 'utf-8' },
        );
      },
    },
  ];

  if (mode === 'development') {
    // Enhance your Vue development experience
    pluginList.push(VueDevTools());
  }

  return pluginList;
};
