<template>
  <div
    :class="{
      'my-48': !tight
    }"
    class="my-36 first:mt-0 last:mb-0">
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
