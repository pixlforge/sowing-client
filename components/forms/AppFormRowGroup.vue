<template>
  <div
    :class="{
      'mb-36': tight,
      'mb-48': !tight,
    }"
    class="flex-1 sm:first:mr-16 sm:last:ml-16 sm:last:mb-0"
  >
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    tight: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
