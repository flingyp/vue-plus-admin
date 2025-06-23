// vite.config.ts
import { resolve } from 'path';

// build/plugins.ts
import vue from 'file:///D:/Personal-Projects/vadmire-admin/node_modules/.pnpm/@vitejs+plugin-vue@5.0.2_vite@4.5.1_vue@3.4.3/node_modules/@vitejs/plugin-vue/dist/index.mjs';
import { viteMockServe as ViteMockServe } from 'file:///D:/Personal-Projects/vadmire-admin/node_modules/.pnpm/vite-plugin-mock@2.9.8_mockjs@1.1.0_vite@4.5.1/node_modules/vite-plugin-mock/dist/index.js';
import { spaLoading } from 'file:///D:/Personal-Projects/vadmire-admin/node_modules/.pnpm/vite-plugin-spa-loading@1.2.2_vite@4.5.1/node_modules/vite-plugin-spa-loading/dist/index.js';
import clearConsole from 'file:///D:/Personal-Projects/vadmire-admin/node_modules/.pnpm/vite-plugin-clear-console@0.2.3/node_modules/vite-plugin-clear-console/dist/bundle.umd.js';
import AutoImport from 'file:///D:/Personal-Projects/vadmire-admin/node_modules/.pnpm/unplugin-auto-import@0.14.4_@vueuse+core@9.13.0_rollup@2.79.1/node_modules/unplugin-auto-import/dist/vite.js';
import Components from 'file:///D:/Personal-Projects/vadmire-admin/node_modules/.pnpm/unplugin-vue-components@0.24.1_rollup@2.79.1_vue@3.4.3/node_modules/unplugin-vue-components/dist/vite.mjs';
import Icons from 'file:///D:/Personal-Projects/vadmire-admin/node_modules/.pnpm/unplugin-icons@0.15.3/node_modules/unplugin-icons/dist/vite.mjs';
import IconsResolver from 'file:///D:/Personal-Projects/vadmire-admin/node_modules/.pnpm/unplugin-icons@0.15.3/node_modules/unplugin-icons/dist/resolver.mjs';
import { NaiveUiResolver } from 'file:///D:/Personal-Projects/vadmire-admin/node_modules/.pnpm/unplugin-vue-components@0.24.1_rollup@2.79.1_vue@3.4.3/node_modules/unplugin-vue-components/dist/resolvers.mjs';
import { Plugin as viteCDNPlugin } from 'file:///D:/Personal-Projects/vadmire-admin/node_modules/.pnpm/vite-plugin-cdn-import@0.3.5_rollup@2.79.1/node_modules/vite-plugin-cdn-import/dist/index.js';
import { VitePWA } from 'file:///D:/Personal-Projects/vadmire-admin/node_modules/.pnpm/vite-plugin-pwa@0.16.7_vite@4.5.1_workbox-build@7.0.0_workbox-window@7.0.0/node_modules/vite-plugin-pwa/dist/index.js';
import VueDevTools from 'file:///D:/Personal-Projects/vadmire-admin/node_modules/.pnpm/vite-plugin-vue-devtools@7.0.3_rollup@2.79.1_vite@4.5.1/node_modules/vite-plugin-vue-devtools/dist/vite.mjs';
import { useFormatDate } from 'file:///D:/Personal-Projects/vadmire-admin/node_modules/.pnpm/@flypeng+tool@5.5.0/node_modules/@flypeng/tool/dist/browser/index.esm.js';
import { useGetCurrentPath } from 'file:///D:/Personal-Projects/vadmire-admin/node_modules/.pnpm/@flypeng+tool@5.5.0/node_modules/@flypeng/tool/dist/node/index.js';
import { writeFileSync } from 'fs';

// package.json
var name = 'vadmire-admin';
var version = '1.8.1';

// build/plugins.ts
var generatePlugins = (command, mode, buildTimestamp) => {
    const pluginList = [
        vue(),
        // Mock Api
        ViteMockServe({
            mockPath: 'mock',
            localEnabled: command === 'serve',
            prodEnabled: command !== 'serve' && mode === 'development',
            watchFiles: command === 'serve',
            logger: true,
            injectCode: `
            import { setupProdMockServer } from './mock-prod-server';
            setupProdMockServer();
          `,
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
            includeAssets: ['favicon.ico', 'logo.svg', '/pwa/180.png'],
            devOptions: {
                enabled: true,
            },
            manifest: {
                name: 'VAdmire Admin',
                short_name: 'VAdmire',
                description:
                    'VAdmire Admin \u662F\u4E00\u6B3E\u57FA\u4E8E Vue3 + TypeScript + NaiveUI \u7B49\u6280\u672F\u6808\u642D\u5EFA\u7684\u540E\u53F0\u7CFB\u7EDF',
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
        pluginList.push(VueDevTools());
    }
    return pluginList;
};

// build/server.ts
var serverOptions = {
    host: true,
    port: 8080,
    https: false,
    open: false,
    cors: true,
};

// vite.config.ts
var __vite_injected_original_dirname = 'D:\\Personal-Projects\\vadmire-admin';
var currentTimestamp = /* @__PURE__ */ new Date().getTime();
var nodeModulesFileName = `vendor_${currentTimestamp}`;
var vite_config_default = ({ mode, command }) => ({
    base: './',
    // Development server config
    server: serverOptions,
    resolve: {
        // Alias config
        alias: {
            '~': resolve(__vite_injected_original_dirname, 'src/'),
        },
    },
    // Plugins config
    plugins: generatePlugins(command, mode, currentTimestamp),
    // Build config
    build: {
        rollupOptions: {
            // Vite < 2.9.0 does not automatically split vendor chunks when using the build command.
            // Reference: https://cn.vitejs.dev/guide/build.html#chunking-strategy
            output: {
                // https://www.rollupjs.com/guide/big-list-of-options#outputmanualchunks
                // 将 node_modules 中的模块打包到自定义 vendor chunk 中，利用浏览器缓存机制，加快页面加载速度
                manualChunks: (id) => {
                    if (id.includes('node_modules')) {
                        return nodeModulesFileName;
                    }
                },
            },
        },
    },
});
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiYnVpbGQvcGx1Z2lucy50cyIsICJwYWNrYWdlLmpzb24iLCAiYnVpbGQvc2VydmVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcUGVyc29uYWwtUHJvamVjdHNcXFxcdmFkbWlyZS1hZG1pblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcUGVyc29uYWwtUHJvamVjdHNcXFxcdmFkbWlyZS1hZG1pblxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovUGVyc29uYWwtUHJvamVjdHMvdmFkbWlyZS1hZG1pbi92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IENvbmZpZ0VudiwgVXNlckNvbmZpZ0V4cG9ydCB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHsgc2VydmVyT3B0aW9ucywgZ2VuZXJhdGVQbHVnaW5zIH0gZnJvbSAnLi9idWlsZCc7XG5cbmNvbnN0IGN1cnJlbnRUaW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbmNvbnN0IG5vZGVNb2R1bGVzRmlsZU5hbWUgPSBgdmVuZG9yXyR7Y3VycmVudFRpbWVzdGFtcH1gO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBtb2RlLCBjb21tYW5kIH06IENvbmZpZ0Vudik6IFVzZXJDb25maWdFeHBvcnQgPT4gKHtcbiAgYmFzZTogJy4vJyxcbiAgLy8gRGV2ZWxvcG1lbnQgc2VydmVyIGNvbmZpZ1xuICBzZXJ2ZXI6IHNlcnZlck9wdGlvbnMsXG4gIHJlc29sdmU6IHtcbiAgICAvLyBBbGlhcyBjb25maWdcbiAgICBhbGlhczoge1xuICAgICAgJ34nOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy8nKSxcbiAgICB9LFxuICB9LFxuICAvLyBQbHVnaW5zIGNvbmZpZ1xuICBwbHVnaW5zOiBnZW5lcmF0ZVBsdWdpbnMoY29tbWFuZCwgbW9kZSwgY3VycmVudFRpbWVzdGFtcCksXG4gIC8vIEJ1aWxkIGNvbmZpZ1xuICBidWlsZDoge1xuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIC8vIFZpdGUgPCAyLjkuMCBkb2VzIG5vdCBhdXRvbWF0aWNhbGx5IHNwbGl0IHZlbmRvciBjaHVua3Mgd2hlbiB1c2luZyB0aGUgYnVpbGQgY29tbWFuZC5cbiAgICAgIC8vIFJlZmVyZW5jZTogaHR0cHM6Ly9jbi52aXRlanMuZGV2L2d1aWRlL2J1aWxkLmh0bWwjY2h1bmtpbmctc3RyYXRlZ3lcbiAgICAgIG91dHB1dDoge1xuICAgICAgICAvLyBodHRwczovL3d3dy5yb2xsdXBqcy5jb20vZ3VpZGUvYmlnLWxpc3Qtb2Ytb3B0aW9ucyNvdXRwdXRtYW51YWxjaHVua3NcbiAgICAgICAgLy8gXHU1QzA2IG5vZGVfbW9kdWxlcyBcdTRFMkRcdTc2ODRcdTZBMjFcdTU3NTdcdTYyNTNcdTUzMDVcdTUyMzBcdTgxRUFcdTVCOUFcdTRFNDkgdmVuZG9yIGNodW5rIFx1NEUyRFx1RkYwQ1x1NTIyOVx1NzUyOFx1NkQ0Rlx1ODlDOFx1NTY2OFx1N0YxM1x1NUI1OFx1NjczQVx1NTIzNlx1RkYwQ1x1NTJBMFx1NUZFQlx1OTg3NVx1OTc2Mlx1NTJBMFx1OEY3RFx1OTAxRlx1NUVBNlxuICAgICAgICBtYW51YWxDaHVua3M6IChpZCkgPT4ge1xuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlTW9kdWxlc0ZpbGVOYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQZXJzb25hbC1Qcm9qZWN0c1xcXFx2YWRtaXJlLWFkbWluXFxcXGJ1aWxkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxQZXJzb25hbC1Qcm9qZWN0c1xcXFx2YWRtaXJlLWFkbWluXFxcXGJ1aWxkXFxcXHBsdWdpbnMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1BlcnNvbmFsLVByb2plY3RzL3ZhZG1pcmUtYWRtaW4vYnVpbGQvcGx1Z2lucy50c1wiO2ltcG9ydCB7IFBsdWdpbk9wdGlvbiB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xuaW1wb3J0IHsgdml0ZU1vY2tTZXJ2ZSBhcyBWaXRlTW9ja1NlcnZlIH0gZnJvbSAndml0ZS1wbHVnaW4tbW9jayc7XG5pbXBvcnQgeyBzcGFMb2FkaW5nIH0gZnJvbSAndml0ZS1wbHVnaW4tc3BhLWxvYWRpbmcnO1xuaW1wb3J0IGNsZWFyQ29uc29sZSBmcm9tICd2aXRlLXBsdWdpbi1jbGVhci1jb25zb2xlJztcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnO1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSc7XG5pbXBvcnQgSWNvbnMgZnJvbSAndW5wbHVnaW4taWNvbnMvdml0ZSc7XG5pbXBvcnQgSWNvbnNSZXNvbHZlciBmcm9tICd1bnBsdWdpbi1pY29ucy9yZXNvbHZlcic7XG5pbXBvcnQgeyBOYWl2ZVVpUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnO1xuaW1wb3J0IHsgUGx1Z2luIGFzIHZpdGVDRE5QbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1jZG4taW1wb3J0JztcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnO1xuaW1wb3J0IFZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scyc7XG5cbmltcG9ydCB7IHVzZUZvcm1hdERhdGUgfSBmcm9tICdAZmx5cGVuZy90b29sL2Jyb3dzZXInO1xuaW1wb3J0IHsgdXNlR2V0Q3VycmVudFBhdGggfSBmcm9tICdAZmx5cGVuZy90b29sL25vZGUnO1xuaW1wb3J0IHsgd3JpdGVGaWxlU3luYyB9IGZyb20gJ2ZzJztcblxuaW1wb3J0IHsgbmFtZSwgdmVyc2lvbiB9IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XG5cbi8qKlxuICogVml0ZSBjb25maWcgcGx1Z2luc1xuICogQHBhcmFtIGNvbW1hbmRcbiAqIEBwYXJhbSBtb2RlXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVQbHVnaW5zID0gKGNvbW1hbmQ6IHN0cmluZywgbW9kZTogc3RyaW5nLCBidWlsZFRpbWVzdGFtcDogbnVtYmVyKTogUGx1Z2luT3B0aW9uW10gPT4ge1xuICBjb25zdCBwbHVnaW5MaXN0OiBQbHVnaW5PcHRpb25bXSA9IFtcbiAgICB2dWUoKSxcbiAgICAvLyBNb2NrIEFwaVxuICAgIFZpdGVNb2NrU2VydmUoe1xuICAgICAgbW9ja1BhdGg6ICdtb2NrJyxcbiAgICAgIGxvY2FsRW5hYmxlZDogY29tbWFuZCA9PT0gJ3NlcnZlJyxcbiAgICAgIHByb2RFbmFibGVkOiBjb21tYW5kICE9PSAnc2VydmUnICYmIG1vZGUgPT09ICdkZXZlbG9wbWVudCcsXG4gICAgICB3YXRjaEZpbGVzOiBjb21tYW5kID09PSAnc2VydmUnLFxuICAgICAgbG9nZ2VyOiB0cnVlLFxuICAgICAgaW5qZWN0Q29kZTogYFxuICAgICAgICAgICAgaW1wb3J0IHsgc2V0dXBQcm9kTW9ja1NlcnZlciB9IGZyb20gJy4vbW9jay1wcm9kLXNlcnZlcic7XG4gICAgICAgICAgICBzZXR1cFByb2RNb2NrU2VydmVyKCk7XG4gICAgICAgICAgYCxcbiAgICB9KSxcbiAgICAvLyBBdXRvIGltcG9ydCBhcGlcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIGltcG9ydHM6IFsndnVlJywgJ3Z1ZS1yb3V0ZXInLCAndnVlLWkxOG4nLCAncGluaWEnLCAnQHZ1ZXVzZS9jb3JlJ10sXG4gICAgICBkdHM6ICdhdXRvLWltcG9ydHMuZC50cycsXG4gICAgICBkaXJzOiBbJ3NyYy91dGlscy8qKicsICdzcmMvc3RvcmUvKionLCAnc3JjL2NvbXBvc2FibGVzLyoqJ10sXG4gICAgICB2dWVUZW1wbGF0ZTogdHJ1ZSxcbiAgICB9KSxcbiAgICAvLyBBdXRvIGltcG9ydCBjb21wb25lbnRcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIGV4dGVuc2lvbnM6IFsndnVlJ10sXG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwudnVlXFw/dnVlL10sXG4gICAgICBleGNsdWRlOiBbL1tcXFxcL11ub2RlX21vZHVsZXNbXFxcXC9dLywgL1tcXFxcL11cXC5naXRbXFxcXC9dLywgL1tcXFxcL11cXC5udXh0W1xcXFwvXS9dLFxuICAgICAgZHRzOiAnY29tcG9uZW50cy5kLnRzJyxcbiAgICAgIHR5cGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBmcm9tOiAndnVlLXJvdXRlcicsXG4gICAgICAgICAgbmFtZXM6IFsnUm91dGVyTGluaycsICdSb3V0ZXJWaWV3J10sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgcmVzb2x2ZXJzOiBbXG4gICAgICAgIEljb25zUmVzb2x2ZXIoe1xuICAgICAgICAgIHByZWZpeDogJ2ljb24nLFxuICAgICAgICB9KSxcbiAgICAgICAgTmFpdmVVaVJlc29sdmVyKCksXG4gICAgICBdLFxuICAgIH0pLFxuICAgIC8vIEF1dG8gdXNlIEljb25pZnkgaWNvblxuICAgIEljb25zKHtcbiAgICAgIGF1dG9JbnN0YWxsOiB0cnVlLFxuICAgICAgY29tcGlsZXI6ICd2dWUzJyxcbiAgICAgIHNjYWxlOiAxLjIsXG4gICAgICBkZWZhdWx0U3R5bGU6ICcnLFxuICAgICAgZGVmYXVsdENsYXNzOiAndW5wbHVnaW4taWNvbicsXG4gICAgICBqc3g6ICdyZWFjdCcsXG4gICAgfSksXG4gICAgLy8gRmlyc3Qgc2NyZWVuIGxvYWRpbmdcbiAgICBzcGFMb2FkaW5nKCdzdmcnLCB7XG4gICAgICBwYXRoOiAnLi9wdWJsaWMvc3BhLWxvYWRpbmcuc3ZnJyxcbiAgICAgIGNzc1BhdGg6ICcuL3B1YmxpYy9zcGEtbG9hZGluZy5jc3MnLFxuICAgIH0pLFxuICAgIC8vIENsZWFyIGNvbnNvbGVcbiAgICBjbGVhckNvbnNvbGUoe1xuICAgICAgaW5qZWN0OiB7XG4gICAgICAgIHBhdGg6ICcuL3NyYy9tYWluLnRzJyxcbiAgICAgICAgdGVtcGxhdGU6IFtcbiAgICAgICAgICBgIGNvbnNvbGUubG9nKCclYyR7bmFtZX0lY1Yke3ZlcnNpb259JyxcbiAgICAgICAgICAgICdwYWRkaW5nOiAycHggNXB4OyBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDsgY29sb3I6ICNmZmY7IGJhY2tncm91bmQ6ICM2MDYwNjA7IGZvbnQtd2VpZ2h0OiBib2xkOycsXG4gICAgICAgICAgICAncGFkZGluZzogMnB4IDVweDsgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7IGNvbG9yOiAjZmZmOyBiYWNrZ3JvdW5kOiAjNDJjMDJlOyBmb250LXdlaWdodDogYm9sZDsnKVxuICAgICAgICAgIGAsXG4gICAgICAgICAgXCJjb25zb2xlLmxvZygnJWNHaXRodWIgcmVwb3NpdG9yeTogaHR0cHM6Ly9naXRodWIuY29tL2ZsaW5neXAvdmFkbWlyZS1hZG1pbicsICdjb2xvcjogIzFjNmNlMzsnKVwiLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBQYWNrYWdlcyBDRE4gTGlua3NcbiAgICB2aXRlQ0ROUGx1Z2luKHtcbiAgICAgIG1vZHVsZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICd4bHN4JyxcbiAgICAgICAgICB2YXI6ICdYTFNYJyxcbiAgICAgICAgICBwYXRoOiAnaHR0cHM6Ly9jZG4uc2hlZXRqcy5jb20veGxzeC0wLjE5LjMvcGFja2FnZS9kaXN0L3hsc3guZnVsbC5taW4uanMnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ3ZkaXRvcicsXG4gICAgICAgICAgdmFyOiAnVmRpdG9yJyxcbiAgICAgICAgICBwYXRoOiAnaHR0cHM6Ly91bnBrZy5jb20vdmRpdG9yQDMuOS4zL2Rpc3QvaW5kZXgubWluLmpzJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdAd2FuZ2VkaXRvci9lZGl0b3InLFxuICAgICAgICAgIHZhcjogJ3dhbmdFZGl0b3InLFxuICAgICAgICAgIHBhdGg6ICdodHRwczovL3VucGtnLmNvbS9Ad2FuZ2VkaXRvci9lZGl0b3JANS4xLjIzL2Rpc3QvaW5kZXguanMnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KSxcbiAgICAvLyBcdTVDMDYgbm9kZV9tb2R1bGVzIFx1NEUyRFx1NzY4NFx1NkEyMVx1NTc1N1x1NjI1M1x1NTMwNVx1NTIzMFx1ODFFQVx1NUI5QVx1NEU0OSB2ZW5kb3IgY2h1bmsgXHU0RTJEXHVGRjBDXHU1MjI5XHU3NTI4XHU2RDRGXHU4OUM4XHU1NjY4XHU3RjEzXHU1QjU4XHU2NzNBXHU1MjM2XHVGRjBDXHU1MkEwXHU1RkVCXHU5ODc1XHU5NzYyXHU1MkEwXHU4RjdEXHU5MDFGXHU1RUE2XG4gICAgLy8gVml0ZSA+PSAyLjkuMCsgYXV0b21hdGljYWxseSBzcGxpdHMgdmVuZG9yIGNodW5rcyB3aGVuIHVzaW5nIHRoZSBidWlsZCBjb21tYW5kLlxuICAgIC8vIFJlZmVyZW5jZTogaHR0cHM6Ly9jbi52aXRlanMuZGV2L2d1aWRlL2J1aWxkLmh0bWwjY2h1bmtpbmctc3RyYXRlZ3lcbiAgICAvLyBzcGxpdFZlbmRvckNodW5rUGx1Z2luKCksXG4gICAgVml0ZVBXQSh7XG4gICAgICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcbiAgICAgIGluY2x1ZGVBc3NldHM6IFsnZmF2aWNvbi5pY28nLCAnbG9nby5zdmcnLCAnL3B3YS8xODAucG5nJ10sXG4gICAgICBkZXZPcHRpb25zOiB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICB9LFxuICAgICAgbWFuaWZlc3Q6IHtcbiAgICAgICAgbmFtZTogJ1ZBZG1pcmUgQWRtaW4nLFxuICAgICAgICBzaG9ydF9uYW1lOiAnVkFkbWlyZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVkFkbWlyZSBBZG1pbiBcdTY2MkZcdTRFMDBcdTZCM0VcdTU3RkFcdTRFOEUgVnVlMyArIFR5cGVTY3JpcHQgKyBOYWl2ZVVJIFx1N0I0OVx1NjI4MFx1NjcyRlx1NjgwOFx1NjQyRFx1NUVGQVx1NzY4NFx1NTQwRVx1NTNGMFx1N0NGQlx1N0VERicsXG4gICAgICAgIHRoZW1lX2NvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgIGljb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAncHdhLzEyOC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxMjh4MTI4JyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAncHdhLzE0NC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxNDR4MTQ0JyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAncHdhLzE1Mi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxNTJ4MTUyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAncHdhLzE2Ny5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxNjd4MTY3JyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAncHdhLzE4MC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxODB4MTgwJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAncHdhLzE5Mi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAncHdhLzI1Ni5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcyNTZ4MjU2JyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAncHdhLzUxMi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAncHdhLzUxMi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ2FueScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICdwd2EvNTEyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnbWFza2FibGUnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0pLFxuXG4gICAgLy8gQnVpbGQgU3RhcnQgUGx1Z2luXG4gICAge1xuICAgICAgbmFtZTogJ3ZpdGUtcGx1Z2luLXZhZG1pcmUtYnVpbGQtc3RhcnQnLFxuICAgICAgYnVpbGRTdGFydDogKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygndml0ZS1wbHVnaW4tdmFkbWlyZS1idWlsZC1zdGFydDonLCB1c2VGb3JtYXREYXRlKCd5eXl5LU1NLWRkIGhoOm1tOnNzJywgYnVpbGRUaW1lc3RhbXApKTtcbiAgICAgICAgd3JpdGVGaWxlU3luYyhcbiAgICAgICAgICBgJHt1c2VHZXRDdXJyZW50UGF0aCgpfS9wdWJsaWMvY29uZmlnLmpzb25gLFxuICAgICAgICAgIGB7XG4gIFwiYnVpbGRUaW1lXCI6ICR7YnVpbGRUaW1lc3RhbXB9XG59YCxcbiAgICAgICAgICB7IGVuY29kaW5nOiAndXRmLTgnIH0sXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgIH0sXG4gIF07XG5cbiAgaWYgKG1vZGUgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAvLyBFbmhhbmNlIHlvdXIgVnVlIGRldmVsb3BtZW50IGV4cGVyaWVuY2VcbiAgICBwbHVnaW5MaXN0LnB1c2goVnVlRGV2VG9vbHMoKSk7XG4gIH1cblxuICByZXR1cm4gcGx1Z2luTGlzdDtcbn07XG4iLCAie1xuICBcIm5hbWVcIjogXCJ2YWRtaXJlLWFkbWluXCIsXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICBcInByaXZhdGVcIjogdHJ1ZSxcbiAgXCJ2ZXJzaW9uXCI6IFwiMS44LjFcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlZBZG1pcmUgQWRtaW4gXHU2NjJGXHU0RTAwXHU2QjNFXHU1N0ZBXHU0RThFIFZ1ZTMgKyBUeXBlU2NyaXB0ICsgTmFpdmVVSSBcdTdCNDlcdTYyODBcdTY3MkZcdTY4MDhcdTY0MkRcdTVFRkFcdTc2ODRcdTU0MEVcdTUzRjBcdTdDRkJcdTdFREZcIixcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImRldlwiOiBcInZpdGUgLS1tb2RlIGRldmVsb3BtZW50XCIsXG4gICAgXCJidWlsZDptb2NrXCI6IFwidml0ZSBidWlsZCAtLW1vZGUgZGV2ZWxvcG1lbnRcIixcbiAgICBcImJ1aWxkXCI6IFwidml0ZSBidWlsZCAtLW1vZGUgcHJvZHVjdGlvblwiLFxuICAgIFwicHJldmlld1wiOiBcInZpdGUgcHJldmlld1wiLFxuICAgIFwibGludFwiOiBcInByZXR0aWVyIC4gLS13cml0ZSAmJiBlc2xpbnQgLiAmJiBzdHlsZWxpbnQgXFxcIioqLyoue2NzcyxzY3NzLHNhc3MsdnVlfVxcXCJcIixcbiAgICBcImxpbnQ6Zml4XCI6IFwicHJldHRpZXIgLiAtLXdyaXRlICYmIGVzbGludCAuIC0tZml4ICYmIHN0eWxlbGludCAtLWZpeCBcXFwiKiovKi57Y3NzLHNjc3Msc2Fzcyx2dWV9XFxcIlwiLFxuICAgIFwicmVsZWFzZVwiOiBcInN0YW5kYXJkLXZlcnNpb25cIixcbiAgICBcInByZXBhcmVcIjogXCJodXNreSBpbnN0YWxsXCIsXG4gICAgXCJjb21taXRcIjogXCJnaXQtY3pcIlxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAZmx5cGVuZy90b29sXCI6IFwiXjUuNS4wXCIsXG4gICAgXCJAbG9naWNmbG93L2NvcmVcIjogXCJeMS4yLjE4XCIsXG4gICAgXCJAbG9naWNmbG93L2V4dGVuc2lvblwiOiBcIl4xLjIuMTlcIixcbiAgICBcIkBwYW5zeS92dWUtd2F0ZXJtYXJrXCI6IFwiXjEuMi4wXCIsXG4gICAgXCJAdnVldXNlL2NvcmVcIjogXCJeOS4xMy4wXCIsXG4gICAgXCJAd2FuZ2VkaXRvci9lZGl0b3JcIjogXCJeNS4xLjIzXCIsXG4gICAgXCJAd2FuZ2VkaXRvci9lZGl0b3ItZm9yLXZ1ZVwiOiBcIl41LjEuMTJcIixcbiAgICBcImFuaW1hdGUuY3NzXCI6IFwiXjQuMS4xXCIsXG4gICAgXCJheGlvc1wiOiBcIl4xLjYuM1wiLFxuICAgIFwiY29sb3JkXCI6IFwiXjIuOS4zXCIsXG4gICAgXCJkYXlqc1wiOiBcIl4xLjExLjEwXCIsXG4gICAgXCJkcml2ZXIuanNcIjogXCJeMC45LjhcIixcbiAgICBcImVjaGFydHNcIjogXCJeNS40LjNcIixcbiAgICBcImZ1c2UuanNcIjogXCJeNi42LjJcIixcbiAgICBcIm1pdHRcIjogXCJeMy4wLjFcIixcbiAgICBcIm1vY2tqc1wiOiBcIl4xLjEuMFwiLFxuICAgIFwibW9kZXJuLXNjcmVlbnNob3RcIjogXCJeNC40LjM3XCIsXG4gICAgXCJuYWl2ZS11aVwiOiBcIl4yLjM2LjBcIixcbiAgICBcIm5wcm9ncmVzc1wiOiBcIl4wLjIuMFwiLFxuICAgIFwicGluaWFcIjogXCJeMi4xLjdcIixcbiAgICBcInN3aXBlclwiOiBcIl4xMC4zLjFcIixcbiAgICBcInYtY2xpcGJvYXJkXCI6IFwiMy4wLjAtbmV4dC4xXCIsXG4gICAgXCJ2ZGl0b3JcIjogXCJeMy45LjhcIixcbiAgICBcInZ1ZVwiOiBcIl4zLjQuM1wiLFxuICAgIFwidnVlLWkxOG5cIjogXCJeOS44LjBcIixcbiAgICBcInZ1ZS1yb3V0ZXJcIjogXCJeNC4yLjVcIixcbiAgICBcInZ1ZTMtcGhvdG8tcHJldmlld1wiOiBcIl4wLjMuMFwiLFxuICAgIFwidnVlZHJhZ2dhYmxlXCI6IFwiXjQuMS4wXCIsXG4gICAgXCJ4Z3BsYXllclwiOiBcIl4yLjMyLjZcIixcbiAgICBcInhsc3hcIjogXCJodHRwczovL2Nkbi5zaGVldGpzLmNvbS94bHN4LTAuMTkuMy94bHN4LTAuMTkuMy50Z3pcIlxuICB9LFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAY29tbWl0bGludC9jbGlcIjogXCJeMTcuOC4xXCIsXG4gICAgXCJAY29tbWl0bGludC9jb25maWctY29udmVudGlvbmFsXCI6IFwiXjE3LjguMVwiLFxuICAgIFwiQGZseXBlbmcvZXNsaW50LWNvbmZpZ1wiOiBcIjIuMC4wLWJldGEuM1wiLFxuICAgIFwiQGZseXBlbmcvc3R5bGVsaW50LWNvbmZpZ1wiOiBcIl4xLjAuMVwiLFxuICAgIFwiQGljb25pZnktanNvbi9hbnQtZGVzaWduXCI6IFwiXjEuMS4xM1wiLFxuICAgIFwiQGljb25pZnktanNvbi9jYXJib25cIjogXCJeMS4xLjI3XCIsXG4gICAgXCJAaWNvbmlmeS1qc29uL2VwXCI6IFwiXjEuMS4xNFwiLFxuICAgIFwiQGljb25pZnktanNvbi9mYVwiOiBcIl4xLjEuOFwiLFxuICAgIFwiQGljb25pZnktanNvbi9pY1wiOiBcIl4xLjEuMTdcIixcbiAgICBcIkBpY29uaWZ5LWpzb24vbGluZS1tZFwiOiBcIl4xLjEuMzNcIixcbiAgICBcIkBpY29uaWZ5LWpzb24vbG9nb3NcIjogXCJeMS4xLjQyXCIsXG4gICAgXCJAaWNvbmlmeS1qc29uL21hdGVyaWFsLXN5bWJvbHNcIjogXCJeMS4xLjY4XCIsXG4gICAgXCJAaWNvbmlmeS1qc29uL21kaVwiOiBcIl4xLjEuNjRcIixcbiAgICBcIkBpY29uaWZ5LWpzb24vbWRpLWxpZ2h0XCI6IFwiXjEuMS4xMFwiLFxuICAgIFwiQGljb25pZnktanNvbi9ub3RvXCI6IFwiXjEuMS4xOFwiLFxuICAgIFwiQGljb25pZnktanNvbi9vcGVubW9qaVwiOiBcIl4xLjEuNDZcIixcbiAgICBcIkBpY29uaWZ5LWpzb24vcGhcIjogXCJeMS4xLjlcIixcbiAgICBcIkBpY29uaWZ5LWpzb24vcmlcIjogXCJeMS4xLjE4XCIsXG4gICAgXCJAaWNvbmlmeS1qc29uL3RhYmxlclwiOiBcIl4xLjEuMTAzXCIsXG4gICAgXCJAaWNvbmlmeS1qc29uL3VpbFwiOiBcIl4xLjEuOFwiLFxuICAgIFwiQGljb25pZnktanNvbi92c2NvZGUtaWNvbnNcIjogXCJeMS4xLjMyXCIsXG4gICAgXCJAaWNvbmlmeS92dWVcIjogXCJeNC4xLjFcIixcbiAgICBcIkB0YWlsd2luZGNzcy90eXBvZ3JhcGh5XCI6IFwiXjAuNS4xMFwiLFxuICAgIFwiQHR5cGVzL21vY2tqc1wiOiBcIl4xLjAuMTBcIixcbiAgICBcIkB0eXBlcy9ub2RlXCI6IFwiXjE4LjE5LjRcIixcbiAgICBcIkB0eXBlcy9ucHJvZ3Jlc3NcIjogXCJeMC4yLjNcIixcbiAgICBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiOiBcIl41LjAuMlwiLFxuICAgIFwiYXV0b3ByZWZpeGVyXCI6IFwiXjEwLjQuMTZcIixcbiAgICBcImNvbW1pdGl6ZW5cIjogXCJeNC4zLjBcIixcbiAgICBcImVzbGludFwiOiBcIl44LjU2LjBcIixcbiAgICBcImh1c2t5XCI6IFwiXjguMC4zXCIsXG4gICAgXCJsaW50LXN0YWdlZFwiOiBcIl4xMy4zLjBcIixcbiAgICBcInBvc3Rjc3NcIjogXCJeOC40LjMyXCIsXG4gICAgXCJwcmV0dGllclwiOiBcIl4zLjEuMVwiLFxuICAgIFwicm9sbHVwLXBsdWdpbi1leHRlcm5hbC1nbG9iYWxzXCI6IFwiXjAuOC4wXCIsXG4gICAgXCJzYXNzXCI6IFwiXjEuNjkuN1wiLFxuICAgIFwic3RhbmRhcmQtdmVyc2lvblwiOiBcIl45LjUuMFwiLFxuICAgIFwic3R5bGVsaW50XCI6IFwiXjE1LjExLjBcIixcbiAgICBcInRhaWx3aW5kY3NzXCI6IFwiXjMuNC4wXCIsXG4gICAgXCJ0eXBlc2NyaXB0XCI6IFwiXjUuMy4zXCIsXG4gICAgXCJ1bnBsdWdpbi1hdXRvLWltcG9ydFwiOiBcIl4wLjE0LjRcIixcbiAgICBcInVucGx1Z2luLWljb25zXCI6IFwiXjAuMTUuM1wiLFxuICAgIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHNcIjogXCJeMC4yNC4xXCIsXG4gICAgXCJ2aXRlXCI6IFwiXjQuNS4xXCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1jZG4taW1wb3J0XCI6IFwiXjAuMy41XCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1jbGVhci1jb25zb2xlXCI6IFwiXjAuMi4zXCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1tb2NrXCI6IFwiXjIuOS44XCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1wd2FcIjogXCJeMC4xNi43XCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1zcGEtbG9hZGluZ1wiOiBcIl4xLjIuMlwiLFxuICAgIFwidml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzXCI6IFwiXjcuMC4zXCIsXG4gICAgXCJ2dWUtdHNjXCI6IFwiXjEuOC4yN1wiXG4gIH0sXG4gIFwib3ZlcnJpZGVzXCI6IHtcbiAgICBcInhsc3hcIjogXCJodHRwczovL2Nkbi5zaGVldGpzLmNvbS94bHN4LTAuMTkuMy94bHN4LTAuMTkuMy50Z3pcIlxuICB9LFxuICBcImxpbnQtc3RhZ2VkXCI6IHtcbiAgICBcIiouIXtjc3Msc2NzcyxzYXNzLHZ1ZX1cIjogW1xuICAgICAgXCJlc2xpbnQgLiAtLWZpeFwiXG4gICAgXSxcbiAgICBcIioue2NzcyxzY3NzLHNhc3MsdnVlfVwiOiBbXG4gICAgICBcInN0eWxlbGludCAtLWZpeCBcXFwiKiovKi57Y3NzLHNjc3Msc2Fzcyx2dWV9XFxcIlwiXG4gICAgXVxuICB9LFxuICBcImNvbmZpZ1wiOiB7XG4gICAgXCJjb21taXRpemVuXCI6IHtcbiAgICAgIFwicGF0aFwiOiBcImN6LWNvbnZlbnRpb25hbC1jaGFuZ2Vsb2dcIlxuICAgIH1cbiAgfVxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQZXJzb25hbC1Qcm9qZWN0c1xcXFx2YWRtaXJlLWFkbWluXFxcXGJ1aWxkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxQZXJzb25hbC1Qcm9qZWN0c1xcXFx2YWRtaXJlLWFkbWluXFxcXGJ1aWxkXFxcXHNlcnZlci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovUGVyc29uYWwtUHJvamVjdHMvdmFkbWlyZS1hZG1pbi9idWlsZC9zZXJ2ZXIudHNcIjtpbXBvcnQgeyBTZXJ2ZXJPcHRpb25zIH0gZnJvbSAndml0ZSc7XG5cbmV4cG9ydCBjb25zdCBzZXJ2ZXJPcHRpb25zOiBTZXJ2ZXJPcHRpb25zID0ge1xuICBob3N0OiB0cnVlLFxuICBwb3J0OiA4MDgwLFxuICBodHRwczogZmFsc2UsXG4gIG9wZW46IGZhbHNlLFxuICBjb3JzOiB0cnVlLFxufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBOFIsU0FBUyxlQUFlOzs7QUNDdFQsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsaUJBQWlCLHFCQUFxQjtBQUMvQyxTQUFTLGtCQUFrQjtBQUMzQixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxtQkFBbUI7QUFDMUIsU0FBUyx1QkFBdUI7QUFDaEMsU0FBUyxVQUFVLHFCQUFxQjtBQUN4QyxTQUFTLGVBQWU7QUFDeEIsT0FBTyxpQkFBaUI7QUFFeEIsU0FBUyxxQkFBcUI7QUFDOUIsU0FBUyx5QkFBeUI7QUFDbEMsU0FBUyxxQkFBcUI7OztBQ2Y1QixXQUFRO0FBR1IsY0FBVzs7O0FEc0JOLElBQU0sa0JBQWtCLENBQUMsU0FBaUIsTUFBYyxtQkFBMkM7QUFDeEcsUUFBTSxhQUE2QjtBQUFBLElBQ2pDLElBQUk7QUFBQTtBQUFBLElBRUosY0FBYztBQUFBLE1BQ1osVUFBVTtBQUFBLE1BQ1YsY0FBYyxZQUFZO0FBQUEsTUFDMUIsYUFBYSxZQUFZLFdBQVcsU0FBUztBQUFBLE1BQzdDLFlBQVksWUFBWTtBQUFBLE1BQ3hCLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUlkLENBQUM7QUFBQTtBQUFBLElBRUQsV0FBVztBQUFBLE1BQ1QsU0FBUyxDQUFDLE9BQU8sY0FBYyxZQUFZLFNBQVMsY0FBYztBQUFBLE1BQ2xFLEtBQUs7QUFBQSxNQUNMLE1BQU0sQ0FBQyxnQkFBZ0IsZ0JBQWdCLG9CQUFvQjtBQUFBLE1BQzNELGFBQWE7QUFBQSxJQUNmLENBQUM7QUFBQTtBQUFBLElBRUQsV0FBVztBQUFBLE1BQ1QsWUFBWSxDQUFDLEtBQUs7QUFBQSxNQUNsQixTQUFTLENBQUMsVUFBVSxZQUFZO0FBQUEsTUFDaEMsU0FBUyxDQUFDLDBCQUEwQixtQkFBbUIsa0JBQWtCO0FBQUEsTUFDekUsS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE9BQU8sQ0FBQyxjQUFjLFlBQVk7QUFBQSxRQUNwQztBQUFBLE1BQ0Y7QUFBQSxNQUNBLFdBQVc7QUFBQSxRQUNULGNBQWM7QUFBQSxVQUNaLFFBQVE7QUFBQSxRQUNWLENBQUM7QUFBQSxRQUNELGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRixDQUFDO0FBQUE7QUFBQSxJQUVELE1BQU07QUFBQSxNQUNKLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLGNBQWM7QUFBQSxNQUNkLGNBQWM7QUFBQSxNQUNkLEtBQUs7QUFBQSxJQUNQLENBQUM7QUFBQTtBQUFBLElBRUQsV0FBVyxPQUFPO0FBQUEsTUFDaEIsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ1gsQ0FBQztBQUFBO0FBQUEsSUFFRCxhQUFhO0FBQUEsTUFDWCxRQUFRO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsVUFDUixtQkFBbUIsSUFBSSxNQUFNLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUlwQztBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUE7QUFBQSxJQUVELGNBQWM7QUFBQSxNQUNaLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLEtBQUs7QUFBQSxVQUNMLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sS0FBSztBQUFBLFVBQ0wsTUFBTTtBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUtELFFBQVE7QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLGVBQWUsQ0FBQyxlQUFlLFlBQVksY0FBYztBQUFBLE1BQ3pELFlBQVk7QUFBQSxRQUNWLFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQSxVQUFVO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixZQUFZO0FBQUEsUUFDWixhQUFhO0FBQUEsUUFDYixhQUFhO0FBQUEsUUFDYixPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBO0FBQUEsSUFHRDtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sWUFBWSxNQUFNO0FBQ2hCLGdCQUFRLElBQUksb0NBQW9DLGNBQWMsdUJBQXVCLGNBQWMsQ0FBQztBQUNwRztBQUFBLFVBQ0UsR0FBRyxrQkFBa0IsQ0FBQztBQUFBLFVBQ3RCO0FBQUEsaUJBQ08sY0FBYztBQUFBO0FBQUEsVUFFckIsRUFBRSxVQUFVLFFBQVE7QUFBQSxRQUN0QjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUVBLE1BQUksU0FBUyxlQUFlO0FBRTFCLGVBQVcsS0FBSyxZQUFZLENBQUM7QUFBQSxFQUMvQjtBQUVBLFNBQU87QUFDVDs7O0FFOU1PLElBQU0sZ0JBQStCO0FBQUEsRUFDMUMsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUNSOzs7QUhSQSxJQUFNLG1DQUFtQztBQUl6QyxJQUFNLG9CQUFtQixvQkFBSSxLQUFLLEdBQUUsUUFBUTtBQUM1QyxJQUFNLHNCQUFzQixVQUFVLGdCQUFnQjtBQUV0RCxJQUFPLHNCQUFRLENBQUMsRUFBRSxNQUFNLFFBQVEsT0FBb0M7QUFBQSxFQUNsRSxNQUFNO0FBQUE7QUFBQSxFQUVOLFFBQVE7QUFBQSxFQUNSLFNBQVM7QUFBQTtBQUFBLElBRVAsT0FBTztBQUFBLE1BQ0wsS0FBSyxRQUFRLGtDQUFXLE1BQU07QUFBQSxJQUNoQztBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBRUEsU0FBUyxnQkFBZ0IsU0FBUyxNQUFNLGdCQUFnQjtBQUFBO0FBQUEsRUFFeEQsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBO0FBQUE7QUFBQSxNQUdiLFFBQVE7QUFBQTtBQUFBO0FBQUEsUUFHTixjQUFjLENBQUMsT0FBTztBQUNwQixjQUFJLEdBQUcsU0FBUyxjQUFjLEdBQUc7QUFDL0IsbUJBQU87QUFBQSxVQUNUO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=
