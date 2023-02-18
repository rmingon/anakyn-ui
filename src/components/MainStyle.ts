export const SIZE_CSS : Record<Size, string> = {
  "s": 'text-xs px-1',
  "m": 'px-2 py-1',
  "l": 'text-xl px-3 py-2',
} as const

export const TYPE_CSS : Record<Type, string> = {
  "primary": 'bg-emerald-400 text-emerald-800',
  "secondary": 'bg-zinc-300 text-zinc-800',
  "tertiary": 'text-zinc-400',
  "success": 'bg-green-700 text-white',
  "info": 'bg-sky-400 text-sky-800',
  "warning": 'bg-yellow-400 text-yellow-800',
  "error": 'bg-red-400 text-red-800',
  "default": ''
} as const

export const CLOSE_CSS_SIZE : Record<Size, string> = {
  "s": 'h-4 w-4',
  "m": 'h-5 w-5',
  "l": 'h-6 w-6',
} as const