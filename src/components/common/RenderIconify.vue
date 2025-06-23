<script lang="ts">
export default defineComponent({
  name: 'RenderIconify',
  props: {
    icon: {
      type: String,
      default: '',
      required: true,
    },
  },
  setup(props) {
    const icon = toRef(props, 'icon');
    // 返回渲染函数
    return useRenderIcon(icon.value);
  },
});
</script>
