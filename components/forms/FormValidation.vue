<template>
  <p
    v-if="errorPresent"
    class="text-12 text-red-500 mt-5"
  >
    {{ errorMessage }}
  </p>
</template>

<script>
export default {
  props: {
    errors: {
      type: Object,
      required: false,
      default: () => {
        return {}
      }
    },
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    errorPresent() {
      return this.errors[this.name]
    },
    errorMessage() {
      return this.errors[this.name][0]
    }
  }
}
</script>
