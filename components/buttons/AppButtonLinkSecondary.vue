<template>
  <nuxt-link
    :to="to"
    class="block outline-none focus:shadow-outline rounded-lg border border-gray-200 text-12 text-gray-500 font-bold text-center uppercase transition no-underline whitespace-no-wrap px-30 py-12">
    <font-awesome-icon
      v-if="icon"
      :icon="['far', icon]"
      class="mr-10"/>
    <slot/>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>
