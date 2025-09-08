import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'toolbar-divider': 'bg-[rgba(37,39,45,0.1)] h-[1.5rem] w1px'
  },
  presets: [
    presetWind4(),
    presetIcons({
      collections: {
        lucide: () => import('@iconify-json/lucide/icons.json').then(i => i.default)
      },
    }),
    presetAttributify()
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ],
  safelist: [
    'i-lucide-undo2',
    'i-lucide-redo2',
    'i-lucide-bold',
    'i-lucide-italic',
    'i-lucide-underline',
    'i-lucide-strikethrough',
    'i-lucide-code',
    'i-lucide-link',
    'i-lucide-list',
    'i-lucide-list-ordered',
    'i-lucide-quote',
  ]
})
