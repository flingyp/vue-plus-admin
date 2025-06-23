import { App } from 'vue';

import permissionDirective from './permission';

export default async (app: App) => {
  permissionDirective(app);
};

// 指令入口文件
export * from './permission';
