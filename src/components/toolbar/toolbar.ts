import type { Editor } from '@tiptap/vue-3'

export interface ToolbarOptions {
  name: string
  icon: string
  tip: string
  click: () => void
  dbclick?: () => void
  active: boolean
  disabled?: boolean
}

export function createDefaultToolbarOptions(editor: Editor): ToolbarOptions[] {
  return [
    {
      name: 'undo',
      icon: 'i-lucide-undo2',
      tip: '撤销',
      click: () => {
        editor.chain().focus().undo().run()
      },
      active: false,
    },
    {
      name: 'redo',
      icon: 'i-lucide-redo2',
      tip: '重做',
      click: () => {
        editor.chain().focus().redo().run()
      },
      active: false,
    }
  ]
}

export function createGroupedToolbarOpitons(editor: Editor) {
  const allOptions = createDefaultToolbarOptions(editor)

  return {
    history: allOptions.filter(tool => ['undo', 'redo'].includes(tool.name)),
  }
}
