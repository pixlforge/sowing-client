<template>
  <div
    :class="{
      'flex-grow': !last,
      'flex-initial': last
    }"
    class="relative flex items-center">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    last: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
