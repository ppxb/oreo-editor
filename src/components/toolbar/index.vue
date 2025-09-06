<script lang="ts" setup>
import type { Editor } from '@tiptap/vue-3'
import { ref } from 'vue'

import ToolWrapper from './ToolWrapper.vue'
import { createGroupedToolbarOpitons } from './toolbar'

const { editor } = defineProps<{ editor: Editor }>()

const groupedOptions = ref(createGroupedToolbarOpitons(editor))
</script>

<template>
  <div class="p-2 border-b border-gray-200 bg-white flex gap-1 items-center">
    <div class="flex gap-1 items-center">
      <ToolWrapper
        v-for="option in groupedOptions.history"
        :key="option.name"
        :editor="editor"
        :option="option"
        :show-double-click-hint="false"
      />
    </div>

    <div class="mx-1 bg-gray-300 h-6 w-px" />
  </div>
</template>
