import { router } from '@vadmire/router';
import nprogress from 'nprogress';
import globalRouteGuardProcess from './global-route-guard';

nprogress.configure({
  easing: 'ease',
  speed: 500,
  trickle: false,
  showSpinner: false,
});

router.beforeEach(async (to, from, next) => {
  nprogress.start();
  await globalRouteGuardProcess(to, from, next, router);
});

router.afterEach(async () => {
  nprogress.done();
});

export { router };
