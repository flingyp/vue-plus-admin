import { ServerOptions } from 'vite';

// Vite 服务端配置
export const serverOptions: ServerOptions = {
  host: true,
  port: 8080,
  https: false,
  open: false,
  cors: true,
};
