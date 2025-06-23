import { useWindowSize } from '@vueuse/core';
import { useThrottle } from '@flypeng/tool/browser';

const { width, height } = useWindowSize();

/**
 * SM: 640
 * MD: 768
 * LG: 1024
 * XL: 1280
 * 2XL: 1536
 */
export function useMonitorWindow(callback: (width: number, height: number) => void) {
  watch([width, height], useThrottle(callback, 200));
}
