<script lang="ts" setup>
import { onBeforeUnmount, watch } from 'vue'
import { EditorContent, useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

import type { EditorProps } from './types'
import { Table } from '@/extensions'
import Toolbar from '@/components/toolbar/index.vue'

import '@/styles/index.scss'

defineOptions({
  name: 'OreoEditor'
})

const { modelValue } = defineProps<EditorProps>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const editor = useEditor({
  content: modelValue,
  extensions: [
    StarterKit.configure({}),
    Table
  ],
  onUpdate: ({ editor }) => {
    const html = editor.getHTML()
    emit('update:modelValue', html)
  }
})

watch(
  () => modelValue,
  (newVal) => {
    if (editor.value && newVal !== editor.value.getHTML()) {
      editor.value.commands.setContent(newVal || '', { emitUpdate: true })
    }
  }
)

onBeforeUnmount(() => {
  if (editor.value) {
    editor.value.destroy()
  }
})

defineExpose({ editor })
</script>

<template>
  <div v-if="editor" flex="~ col">
    <Toolbar :editor="editor" border-b />
    <EditorContent
      h-full overflow-y-auto
      rounded="bl-2 br-2"
      border="~ solid t-0 #ebeef5"
      :editor="editor"
    />
  </div>
</template>
