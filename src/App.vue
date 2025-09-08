<script lang="ts" setup>
import { ref } from 'vue'

import OreoEditor from '@/components/editor/inedx.vue'

const content = ref('')
const outputType = ref<'html' | 'text' | 'json'>('html')
const previewMode = ref<'preview' | 'raw'>('preview')

function resetContent() {
  content.value = '<p>This is the reset content.</p>'
}
</script>

<template>
  <div
    p-4 gap-4 h-screen w-full
    flex="~ col"
  >
    <div flex="~ items-center justify-between">
      <h1 text-2xl font-bold>
        Oreo Editor Playground(WIP)
      </h1>
      <button
        text-sm px-3 py-1.5 rounded-lg bg-gray-100 transition-duration-250
        hover="bg-gray-200 cursor-pointer"
        @click="resetContent"
      >
        Reset Content
      </button>
    </div>

    <div flex="~ 1" gap-4>
      <div class="w-3/4">
        <OreoEditor
          v-model="content"
          h-full max-h-640px w-full
          :output="outputType"
        />
      </div>
      <div class="w-1/4" flex="~ col" gap-4 max-h-640px>
        <div flex="~ items-center justify-between">
          <div
            text-xs p-2 rounded-lg bg-gray-100 gap-2
            flex="~ items-center"
          >
            <div rounded-full bg-green-500 h-1.5 w-1.5 />
            <span>{{ outputType.toUpperCase() }}</span>
          </div>
          <div flex="~ items-center" gap-1>
            <button
              text-xs px-2 py-1 rounded cursor-pointer transition-duration-250
              :class="previewMode === 'preview' ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:text-gray-700'"
              @click="previewMode = 'preview'"
            >
              Preview
            </button>
            <button
              text-xs px-2 py-1 rounded cursor-pointer transition-duration-250
              :class="previewMode === 'raw' ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:text-gray-700'"
              @click="previewMode = 'raw'"
            >
              Raw
            </button>
          </div>
        </div>

        <div
          p-4 rounded-xl bg-gray-50 overflow-auto
          flex="~ 1"
        >
          <div
            v-if="previewMode === 'preview'"
            text-sm leading-relaxed
            v-html="content"
          />
          <pre
            v-else
            text-xs leading-relaxed font-mono whitespace-pre-wrap
          >{{ content }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>
