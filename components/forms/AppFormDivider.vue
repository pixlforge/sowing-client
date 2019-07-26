<template>
  <hr
    :class="classes"
    class="border border-gray-100">
</template>

<script>
export default {
  props: {
    large: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    classes() {
      let classes = 'my-30 lg:my-48'

      if (this.large) {
        classes = 'my-72 lg:my-132'
      }

      return classes
    }
  }
}
</script>
