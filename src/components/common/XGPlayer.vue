<script setup lang="ts">
import XGPlayer from 'xgplayer';
import { useRandomString } from '@flypeng/tool/browser';
import { XGPlayerProps } from '~/types';

defineOptions({ name: 'XGPlayer' });
const props = withDefaults(defineProps<XGPlayerProps>(), {
  volume: 0.6,
  autoplay: false,
  videoInit: false,
  poster: undefined,
  pip: true,
});

const player = ref<XGPlayer>();
const randomId = ref(`${useRandomString(6)}_XGPlayer_${useRandomString(6)}`);

onMounted(() => {
  // 初始化播放器
  player.value = new XGPlayer({
    id: randomId.value,
    url: props.url,
    lang: 'zh-cn',
    volume: props.volume,
    autoplay: props.autoplay,
    videoInit: props.videoInit,
    poster: props.poster ?? '',
    playbackRate: [0.5, 0.75, 1, 1.5, 2],
    defaultPlaybackRate: 1,
    download: true,
    pip: props.pip,
  });
});
</script>

<template>
  <div :id="randomId" />
</template>
