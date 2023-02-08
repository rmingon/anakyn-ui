<template>
  <div :class="[size, borderless]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    size: Size
    closable: boolean
    borderless: boolean
  }

  const SIZE_CSS : Record<Size, string> = {
    "s": 'text-xs px-2 py-1',
    "m": 'px-4 py-2',
    "l": 'text-xl px-5 py-3',
  } as const

  const props = withDefaults(defineProps<Props>(), {
    size: "m",
    borderless: false
  })

  const size = SIZE_CSS[props.size]
  const borderless = props.borderless ? 'border-2' : ''

</script>

<style scoped>

</style>