<script lang="ts" setup>
import type { Editor } from '@tiptap/vue-3'
import { Tooltip } from 'floating-vue'
import 'floating-vue/dist/style.css'

import type { ToolbarOptions } from './toolbar'

interface ToolWrapperProps {
  editor: Editor
  option: ToolbarOptions
  placement?: 'top' | 'bottom' | 'left' | 'right'
  triggers?: Array<'click' | 'hover' | 'focus'>
}

const { option, placement = 'bottom', triggers = ['hover'] } = defineProps<ToolWrapperProps>()

function handleClick() {
  if (option.disabled) {
    return
  }
  option.click()
}
</script>

<template>
  <Tooltip
    flex="~ items-center"
    :placement="placement"
    :delay="{ show: 300, hide: 100 }"
    :triggers="option.disabled ? [] : triggers"
  >
    <template #popper>
      <div text-12px class="text-#333">
        {{ option.tip }}
      </div>
    </template>

    <button
      p-2 rounded-xl
      :class="[
        option.disabled
          ? 'opacity-50'
          : 'cursor-pointer hover:bg-gray-100',
      ]"
      :disabled="option.disabled"
      @click="handleClick"
    >
      <div h-4 w-4 :class="option.icon" />
    </button>
  </Tooltip>
</template>
