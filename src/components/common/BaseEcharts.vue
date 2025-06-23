<script setup lang="ts">
import { echarts } from '~/utils';
import { BaseEchartsProps } from '~/types';

defineOptions({ name: 'Echarts' });
const props = defineProps<BaseEchartsProps>();

const { isDark } = useTheme();
const chartRef = ref<HTMLElement>();
const chartInstance = shallowRef<echarts.ECharts>();

const themeMode = computed(() => (isDark.value ? 'dark' : 'light'));

// 初始化图表
const initChart = () => {
  if (chartRef.value) {
    chartInstance.value = echarts.init(chartRef.value, themeMode.value);

    const chartOptions = props.options;
    // 修改图表背景色为透明
    // 暗色模式下默认背景色与系统背景色不一致
    chartOptions.backgroundColor = 'transparent';

    chartInstance.value.setOption(chartOptions);
  }
};

// 重置图表尺寸
const resizeChart = () => {
  chartInstance.value?.resize();
};

watch(themeMode, () => {
  chartInstance.value?.dispose();
  initChart();
});

onMounted(() => {
  initChart();
  window.addEventListener('resize', resizeChart);
});

onUnmounted(() => {
  window.removeEventListener('resize', resizeChart);
});
</script>

<template>
  <div ref="chartRef" />
</template>
