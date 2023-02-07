<template>
  <div :class="[size]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    size: Size
    closable: boolean
  }

  const SIZE_CSS : Record<Size, string> = {
    "s": 'text-xs px-2 py-1',
    "m": 'px-4 py-2',
    "l": 'text-xl px-5 py-3',
  } as const

  const props = withDefaults(defineProps<Props>(), {
    size: "m",
  })

  const size = SIZE_CSS[props.size]


</script>

<style scoped>

</style>