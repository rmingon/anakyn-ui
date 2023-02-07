<template>
  <button :class="[size, type]" class="transition duration-150 cursor-pointer rounded-md hover:shadow-sm active:shadow-xl">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
  interface Props {
    size: "s" | "m" | "l",
    type: 'default' | 'tertiary' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error'
  }

  const SIZE_CSS : Record<Props["size"], string> = {
    "s": 'text-xs px-2 py-1',
    "m": 'px-4 py-2',
    "l": 'text-xl px-5 py-3',
  } as const

  const TYPE_CSS : Record<Props["type"], string> = {
    "primary": 'border bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-500 text-white',
    "secondary": 'border text-zinc-500 hover:text-zinc-700 bg-gray-200 hover:bg-gray-100',
    "tertiary": 'border text-zinc-400 hover:text-red-400 hover:border-gray-500',
    "success": 'border bg-green-700 hover:bg-green-600 active:bg-green-500 text-white',
    "info": 'border bg-sky-700 hover:bg-sky-600 active:bg-sky-500 text-white',
    "warning": 'border bg-amber-700 hover:bg-amber-600 active:bg-amber-500 text-white',
    "error": 'border bg-red-700 hover:bg-red-600 active:bg-red-500 text-white',
    "default": 'border'
  } as const

  const props = withDefaults(defineProps<Props>(), {
    size: "m",
    type: "default"
  })

  const size = SIZE_CSS[props.size]
  const type = TYPE_CSS[props.type]
</script>