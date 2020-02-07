<template>
  <p class="text-14 md:text-16 leading-loose my-20 last:mb-0">
    <slot/>
  </p>
</template>

<script>
export default {
  props: {
    center: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
