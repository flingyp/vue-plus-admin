<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Icon } from '@iconify/vue';
import { useDeepClone } from '@flypeng/tool/browser';
import { VAdmireMenuOption } from 'naive-ui';
import { transformMenu } from '~/utils';
import 'swiper/css';

const { t } = useI18n();
const route = useRoute();
const router = useRouter();
const routeMenuStore = useRouteMenuStore();
const { tabMenuKeys, vadmireTabMenu } = storeToRefs(routeMenuStore);

const transformMenuList = computed(() => {
  const menuOptions = useDeepClone(vadmireTabMenu.value) as VAdmireMenuOption[];
  const i18nMenu = menuOptions.map((menu) => transformMenu(menu, t));
  return i18nMenu;
});

// useSwiper don't to use and it have problem
// reference the https://github.com/nolimits4web/swiper/issues/5505 can realize function
const swiper = ref<any>(null);

// click tab menu
const clickTabMenu = (key: string) => {
  if (key === route.name) return;
  router.push({ name: key });
};

// click to delete tab menu
const deleteTabMenu = (key: string) => {
  // don't remove tab menu if tab menus have only one
  if (tabMenuKeys.value.length === 1) return;
  // remove tab menu is current active menu and should do that navigator other route
  if (key === route.name) {
    const deleteIndex = tabMenuKeys.value.indexOf(key);
    const navigatorIndex = deleteIndex === 0 ? 1 : deleteIndex - 1;
    const navigatorMenu = vadmireTabMenu.value[navigatorIndex];
    router.push({ name: navigatorMenu.key as string });
  }
  routeMenuStore.removeTabMenuKey(key);
};
</script>

<template>
  <icon-material-symbols:keyboard-double-arrow-left-rounded
    class="text-base cursor-pointer"
    @click="swiper.$el?.swiper.slidePrev()"
  />

  <Swiper ref="swiper" slides-per-view="auto" class="w-[10vw] flex-1 h-full flex items-center space-x-2 mx-2">
    <SwiperSlide v-for="menu in transformMenuList" :key="menu.key" class="!w-auto mr-2">
      <div
        class="flex items-center px-2 py-1 rounded border border-none cursor-pointer group text"
        :class="[route.name === menu.key ? 'bg-primary border-primary text-white' : '']"
        @click="clickTabMenu(menu.key as string)"
      >
        <Icon v-if="menu.iconLabel" :icon="menu.iconLabel" class="text-base mr-1" />
        <span class="mr-1">{{ menu.label }}</span>
        <icon-mdi:window-close
          v-show="tabMenuKeys.length > 1"
          class="w-0 group-hover:w-4 duration-500 transition-[width]"
          @click.stop="deleteTabMenu(menu.key as string)"
        />
      </div>
    </SwiperSlide>
  </Swiper>

  <icon-material-symbols:keyboard-double-arrow-right-rounded
    class="text-base cursor-pointer"
    @click="swiper.$el.swiper.slideNext()"
  />
</template>
