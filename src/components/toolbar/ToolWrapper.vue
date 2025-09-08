<script lang="ts" setup>
import { ref } from 'vue'
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

const { editor, option, placement = 'bottom', triggers = ['hover'] } = defineProps<ToolWrapperProps>()

const isPressed = ref(false)

function handleClick() {
  if (option.disabled) {
    return
  }

  isPressed.value = true
  setTimeout(() => {
    isPressed.value = false
  }, 150)

  option.click()
}

function handleDoubleClick() {
  if (option.disabled || !option.dbclick) {
    return
  }
  option.dbclick()
}
</script>

<template>
  <Tooltip
    no-arrow
    :arrow="false"
    :placement="placement"
    :delay="{ show: 300, hide: 100 }"
    :triggers="triggers"
    flex="~ items-center"
  >
    <template #popper>
      <div class="text-xs text-white font-medium">
        {{ option.tip }}
      </div>
    </template>

    <button
      class="toolbar-btn select-none relative" :class="[
        { 'toolbar-btn-active': option.active },
        { 'opacity-50 cursor-not-allowed': option.disabled },
      ]"
      :disabled="option.disabled"
      @click="handleClick"
      @dblclick="handleDoubleClick"
    >
      <div
        class="h-4 w-4 transition-transform duration-150" :class="[
          option.icon,
          { 'scale-110': isPressed },
        ]"
      />

      <div
        v-if="option.active"
        class="rounded-full bg-blue-500 h-0.5 w-3 transform bottom-0 left-1/2 absolute -translate-x-1/2"
      />
    </button>
  </Tooltip>
</template>
