<script setup lang="ts">
import { IDomEditor } from '@wangeditor/editor';
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
import '@wangeditor/editor/dist/css/style.css';
import { WangEditorProps } from '~/types';

defineOptions({ name: 'WangEditor' });
const props = defineProps<WangEditorProps>();
const emit = defineEmits(['update:content']);

const { editorInstance, toolBarConfig, editorConfig, setEditor } = useWangEditor();

const { content } = toRefs(props);
const editorContent = ref(content.value);

// init editor config
editorConfig.value.placeholder = '上传图片、上传视频没有做配置, 请参考wangEditor进行配置';
editorConfig.value.readOnly = false;
editorConfig.value.autoFocus = true;

// editor created
const handleCreated = (editor: IDomEditor) => {
  setEditor(editor);
};

// editor content change
const handleChange = (editor: IDomEditor) => {
  emit('update:content', editor.getHtml());
};
</script>

<template>
  <div class="border border-vBorderLight dark:border-vBorderDark dark:bg-black">
    <Toolbar :editor="editorInstance" :default-config="toolBarConfig" mode="default" />
    <Editor
      v-model="editorContent"
      :default-config="editorConfig"
      @on-created="handleCreated"
      @on-change="handleChange"
    />
  </div>
</template>
