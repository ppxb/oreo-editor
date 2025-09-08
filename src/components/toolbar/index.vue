<script lang="ts" setup>
import type { Editor } from '@tiptap/vue-3'
import { ref } from 'vue'

import ToolWrapper from './ToolWrapper.vue'
import { createGroupedToolbarOpitons } from './toolbar'

const { editor } = defineProps<{ editor: Editor }>()

const groupedOptions = ref(createGroupedToolbarOpitons(editor))
</script>

<template>
  <div
    p-2 gap-1
    flex="~ items-center"
    rounded="tl-2 tr-2"
    border="~ solid #ebeef5"
  >
    <div gap-1 flex="~ items-center">
      <ToolWrapper
        v-for="option in groupedOptions.history"
        :key="option.name"
        :editor="editor"
        :option="option"
      />
    </div>
    <div toolbar-divider />
  </div>
</template>
