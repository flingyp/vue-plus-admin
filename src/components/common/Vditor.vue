<script setup lang="ts">
import Vditor from 'vditor';
import 'vditor/dist/index.css';
import { VditorProps } from '~/types';

defineOptions({ name: 'Vditor' });
const props = withDefaults(defineProps<VditorProps>(), {
  contentTheme: 'ant-design',
  codeTheme: 'github',
  content: '',
});
const emit = defineEmits(['update:content']);

const { isDark } = useTheme();
const vditorInstance = ref<Vditor | null>(null);

const vditorTheme = computed(() => {
  if (isDark.value) return 'dark';
  return 'classic';
});

// 监听暗色模式切换，动态设置主题
watch(isDark, () => {
  vditorInstance.value?.setTheme(vditorTheme.value, props.contentTheme, props.codeTheme);
});

// 挂载后初始化 Vditor 编辑器
onMounted(() => {
  vditorInstance.value = new Vditor('vditor', {
    theme: vditorTheme.value,
    mode: 'ir',
    resize: {
      enable: false,
    },
    outline: {
      enable: true,
      position: 'left',
    },
    input: (value: string) => {
      emit('update:content', value);
    },
    after: () => {
      vditorInstance.value?.setValue(props.content);
    },
  });
});
</script>

<template>
  <div id="vditor" />
</template>
