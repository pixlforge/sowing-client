<template>
  <p
    :class="{
      'text-center mx-auto my-36 md:my-72': center,
      'my-20 last:mb-0': !center
    }"
    class="text-16 leading-loose">
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
