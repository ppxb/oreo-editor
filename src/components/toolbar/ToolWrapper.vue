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

const { editor, option, placement = 'bottom', triggers = ['hover'] } = defineProps<ToolWrapperProps>()

function handleClick() {
  if (option.disabled) {
    return
  }

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
  <component
    :is="option.disabled ? 'span' : Tooltip"
    v-bind="!option.disabled ? {
      placement,
      delay: { show: 300, hide: 100 },
      triggers,
      flex: '~ items-center',
    } : {}"
  >
    <template v-if="!option.disabled" #popper>
      <div text-12px class="text-#333">
        {{ option.tip }}
      </div>
    </template>

    <button
      p-2 rounded-xl
      :class="[
        { 'toolbar-btn-active': option.active },
        option.disabled
          ? 'opacity-50'
          : 'cursor-pointer hover:bg-gray-100',
      ]"
      :disabled="option.disabled"
      @click="handleClick"
      @dblclick="handleDoubleClick"
    >
      <div h-4 w-4 :class="option.icon" />
      <div
        v-if="option.active"
        class="rounded-full bg-blue-500 h-0.5 w-3 transform bottom-0 left-1/2 absolute -translate-x-1/2"
      />
    </button>
  </component>
</template>
