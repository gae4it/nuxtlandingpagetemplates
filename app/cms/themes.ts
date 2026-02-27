// app/cms/themes.ts

export const themes = {
  saas: {
    primary: 'blue' as const,
    radius: 'rounded-2xl',
    font: 'font-sans',
    background: 'bg-white',
    text: 'text-gray-900'
  },
  agency: {
    primary: 'orange' as const,
    radius: 'rounded-none',
    font: 'font-serif',
    background: 'bg-zinc-50',
    text: 'text-zinc-950'
  },
  indie: {
    primary: 'purple' as const,
    radius: 'rounded-xl',
    font: 'font-mono',
    background: 'bg-gray-950',
    text: 'text-white'
  }
} as const

export type ThemeName = keyof typeof themes
export type Theme = (typeof themes)[ThemeName]
