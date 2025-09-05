<script lang="ts" setup>
import { onBeforeUnmount, watch } from 'vue'
import { EditorContent, useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

import type { EditorProps } from '@/types'
import { Table } from '@/extensions'

import '../styles/index.scss'

defineOptions({
  name: 'OreoEditor'
})

const { modelValue = '' } = defineProps<EditorProps>()

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
  <EditorContent
    v-if="editor"
    rounded-6px bg-white h-full overflow-y-auto
    border="~ 1px solid #ebeef5"
    :editor="editor"
  />
</template>
