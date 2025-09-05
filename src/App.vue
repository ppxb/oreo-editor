<script lang="ts" setup>
import { ref } from 'vue'

import OreoEditor from '@/components/Editor.vue'

const content = ref('')

function resetContent() {
  content.value = '<p>This is the reset content.</p>'
}
</script>

<template>
  <div
    p8 h-screen w-full
    flex="~ items-center justify-center"
  >
    <button @click="resetContent">
      reset content
    </button>
    <OreoEditor
      v-model="content"
      flex-1 h600px w-full
      output="html"
    />
    <div flex-1>
      <h1>Output</h1>
      <div>{{ content }}</div>
    </div>
  </div>
</template>
