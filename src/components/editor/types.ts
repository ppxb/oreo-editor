import type { AnyExtension } from '@tiptap/vue-3'

export interface EditorProps {
  modelValue?: string
  placeholder?: string
  extensions?: AnyExtension[]
  output: 'html' | 'json' | 'text'
}
