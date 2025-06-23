<script setup lang="ts">
import { useDeepClone } from '@flypeng/tool/browser';
import { VAdmireMenuOption } from 'naive-ui';
import RenderIconify from '~/components/common/RenderIconify.vue';
import { transformMenu } from '~/utils';

const { t } = useI18n();
const router = useRouter();
const routeMenuStore = useRouteMenuStore();
const { breadCrumbMenus } = storeToRefs(routeMenuStore);

const transformMenuList = computed(() => {
  const menuOptions = useDeepClone(breadCrumbMenus.value) as VAdmireMenuOption[];
  const i18nMenu = menuOptions.map((menu) => transformMenu(menu, t));
  return i18nMenu;
});

// 点击面包屑菜单
const clickBreadCrumbItem = (key: string) => {
  // 创建 tab 菜单 key
  routeMenuStore.createTabMenuKey(key);

  router.push({ name: key });
};
</script>

<template>
  <div class="h-full flex items-center">
    <NBreadcrumb>
      <NBreadcrumbItem v-for="item in transformMenuList" :key="item.key">
        <NDropdown :options="item.children" @select="clickBreadCrumbItem">
          <div class="flex items-center space-x-1">
            <RenderIconify :icon="item.iconLabel" />
            <span>{{ item.label }}</span>
          </div>
        </NDropdown>
      </NBreadcrumbItem>
    </NBreadcrumb>
  </div>
</template>
