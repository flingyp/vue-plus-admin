import type { AxiosHeaders, CreateAxiosDefaults, Method, RawAxiosRequestHeaders, ResponseType } from 'axios';
import axios from 'axios';

const axiosConfig: CreateAxiosDefaults = {
  baseURL: `${import.meta.env.VITE_HTTP_BASE_URL}`,
  timeout: 5000,
};

const requestInstance = axios.create(axiosConfig);

// 请求拦截器
requestInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

// Response interceptor
requestInstance.interceptors.response.use(
  (response) => response.data,
  (error) => error.response,
);

interface RequestOptions {
  url: string;
  method: Method;
  params?: Record<string, unknown>;
  headers?: RawAxiosRequestHeaders | AxiosHeaders;
  data?: Record<string, unknown>;
  responseType?: ResponseType;
}

interface ResponseOptions<K = unknown> {
  statusCode: number;
  statusText: string;
  data: K;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useRequest = async <T = any>(options: RequestOptions): Promise<ResponseOptions<T>> => {
  const { url, method, params, data, responseType, headers } = options;

  const requestResult = await requestInstance.request<unknown, ResponseOptions<T>>({
    url,
    method,
    params,
    data,
    headers,
    responseType: responseType || 'json',
  });

  return {
    statusCode: requestResult.statusCode,
    statusText: requestResult.statusText,
    data: requestResult.data,
  };
};
