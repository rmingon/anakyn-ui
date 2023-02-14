<template>
  <div :class="[size, type, borderless]" class="flex items-center cursor-default">
    <slot></slot>
    <div class="cursor-pointer" v-if="props.closable" @click="emit('close', event)">
      <svg xmlns="http://www.w3.org/2000/svg" :class="[cross_size]" viewBox="0 0 32 32"><path fill="currentColor" d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"/></svg>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    size: Size
    closable: boolean
    borderless: boolean
    type: Type
  }

  const SIZE_CSS : Record<Size, string> = {
    "s": 'text-xs px-1',
    "m": 'px-2 py-1',
    "l": 'text-xl px-3 py-2',
  } as const

  const TYPE_CSS : Record<Type, string> = {
    "primary": 'bg-emerald-700 text-white',
    "secondary": 'text-zinc-500 bg-gray-200',
    "tertiary": 'text-zinc-400',
    "success": 'bg-green-700 text-white',
    "info": 'bg-sky-700 text-white',
    "warning": 'bg-yellow-700 text-white',
    "error": 'bg-red-700 text-white',
    "default": ''
  } as const

  const CLOSE_CSS_SIZE : Record<Size, string> = {
    "s": 'h-4 w-4',
    "m": 'h-5 w-5',
    "l": 'h-6 w-6',
  } as const

  const props = withDefaults(defineProps<Props>(), {
    type: 'primary',
    size: "m",
    borderless: false,
    closable: false
  })

  const size = SIZE_CSS[props.size]
  const cross_size = CLOSE_CSS_SIZE[props.size]
  const type = TYPE_CSS[props.type]
  const borderless = props.borderless ? '' : 'border'

  const emit = defineEmits<{
    (e: 'close', event: Event): void
  }>()

</script>

<style scoped>

</style>