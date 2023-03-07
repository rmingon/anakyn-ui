<template>
  <input type="text" @input="emits('update:modelValue', $event.target.value)" >
</template>

<script setup lang="ts">
  import {SIZE_CSS} from "@/components/MainStyle";

  interface Props {
    modelValue: string
    size: Size
  }

  const props = withDefaults(defineProps<Props>(), {
    modelValue: "",
    size: "m"
  })

  const size = SIZE_CSS[props.size]

  const emits = defineEmits<{
    (e: "update:modelValue", input: EventTarget): void
  }>()


</script>