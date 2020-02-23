<template>
  <button
    role="button"
    class="text-gray-300 hover:text-gray-500 transition-colors duration-200 ease-out mr-16"
  >
    <font-awesome-icon
      :icon="['far', 'caret-circle-up']"
      :class="{
        'rotate-180': active
      }"
      class="text-20 transform transition-transform duration-200 ease-out"
    />
  </button>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      required: true
    }
  }
}
</script>
