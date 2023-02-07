<template>
  <button :class="[size, type, border]" class="transition duration-150 cursor-pointer rounded-md hover:shadow-sm active:shadow-xl">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
  interface Props {
    size: Size
    type: 'default' | 'tertiary' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error'
    dashed?: boolean
  }

  const SIZE_CSS : Record<Size, string> = {
    "s": 'text-xs px-2 py-1',
    "m": 'px-4 py-2',
    "l": 'text-xl px-5 py-3',
  } as const

  const TYPE_CSS : Record<Props["type"], string> = {
    "primary": 'border-black bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-500 text-white',
    "secondary": 'text-zinc-500 hover:text-zinc-700 bg-gray-200 hover:bg-gray-100',
    "tertiary": 'text-zinc-400 hover:text-zinc-500 hover:border-gray-300',
    "success": 'bg-green-700 hover:bg-green-600 active:bg-green-500 text-white',
    "info": 'bg-sky-700 hover:bg-sky-600 active:bg-sky-500 text-white',
    "warning": 'bg-yellow-700 hover:bg-yellow-600 active:bg-yellow-500 text-white',
    "error": 'bg-red-700 hover:bg-red-600 active:bg-red-500 text-white font-roboto',
    "default": ''
  } as const

  const props = withDefaults(defineProps<Props>(), {
    size: "m",
    type: "default",
    dashed: false
  })

  const size = SIZE_CSS[props.size]
  const type = TYPE_CSS[props.type]
  const border = props.dashed ? 'border-dashed border' : 'border-solid border'
</script>