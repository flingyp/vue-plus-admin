import { useSetLocalKey } from '@flypeng/tool/browser';
import { driver, DriveStep } from 'driver.js';
import 'driver.js/dist/driver.css';
import { DRIVER_CONFIG_KEY } from '~/common';

// 更多详情参考 https://driverjs.com/docs/configuration
const driverObj = driver({
  allowClose: false,
  showButtons: ['next', 'previous', 'close'],
  nextBtnText: '下一步',
  prevBtnText: '上一步',
  doneBtnText: '完成',
});

export const useDriver = (steps: DriveStep[]) => {
  // whether to use driver
  // const isDriver = ref(Number(useGetLocalKey(DRIVER_CONFIG_KEY)) !== 1)
  const isDriver = ref(true);

  const start = () => {
    driverObj.setSteps(steps);
    driverObj.drive();

    isDriver.value = false;
    useSetLocalKey(DRIVER_CONFIG_KEY, 1);
  };

  return {
    isDriver,
    start,
  };
};
