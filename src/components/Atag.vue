<template>
  <div :class="[size, type, borderless]" class="flex items-center cursor-default rounded">
    {{ props.label }}
    <div>

    </div>
    <div class="cursor-pointer" v-if="props.closable" @click="emit('close', event)">
      <svg xmlns="http://www.w3.org/2000/svg" :class="[cross_size]" viewBox="0 0 32 32"><path fill="currentColor" d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"/></svg>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {CLOSE_CSS_SIZE, SIZE_CSS, TYPE_CSS} from "./MainStyle";
  interface Props {
    size: Size
    closable: boolean
    borderless: boolean
    type: Type
    label: string
  }

  const props = withDefaults(defineProps<Props>(), {
    type: 'primary',
    size: "m",
    borderless: false,
    closable: false,
    label: ''
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