<template>
  <nuxt-link
    :to="route"
    class="inline-flex justify-center items-center outline-none focus:shadow-outline rounded-lg border border-gray-200 text-12 text-gray-500 font-bold text-center uppercase no-underline leading-tight sm:whitespace-no-wrap transition-colors duration-200 ease-out px-30 py-12"
  >
    <font-awesome-icon
      v-if="icon"
      :icon="['far', icon]"
      class="mr-10"
    />
    <slot/>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    route: {
      type: Object,
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
