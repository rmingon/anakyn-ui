<template>
  <button :class="[size, type, border]" class="transition duration-150 cursor-pointer rounded-md hover:shadow-sm active:shadow-xl">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
  import {SIZE_CSS, TYPE_CSS} from "@/components/MainStyle";

  interface Props {
    size: Size
    type: Type
    dashed?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    size: "m",
    type: "primary",
    dashed: false
  })

  const size = SIZE_CSS[props.size]
  const type = TYPE_CSS[props.type]
  const border = props.dashed ? 'border-dashed border' : 'border-solid border'

</script>