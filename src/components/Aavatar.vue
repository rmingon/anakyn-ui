<template>
  <div :class="[size]" class="h-10 w-10">
    <img class="object-none" :src="props.src" :alt="props.alt">
  </div>
</template>

<script setup lang="ts">
  interface Props {
    size: string
    src: string
    alt: string
  }

  const props = withDefaults(defineProps<Props>(), {
    size: 'm',
    src: '',
    alt: ''
  })

  const size = ''
</script>

<style scoped>

</style>