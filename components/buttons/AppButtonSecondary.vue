<template>
  <button
    :type="type"
    class="outline-none focus:shadow-outline rounded-lg border border-gray-200 text-12 text-gray-500 font-extrabold text-center uppercase transition no-underline whitespace-no-wrap px-30 py-12">
    <font-awesome-icon
      v-if="icon"
      :icon="['far', icon]"
      class="mr-10"/>
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: ''
    },
    icon: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>
