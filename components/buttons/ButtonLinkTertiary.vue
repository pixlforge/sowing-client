<template>
  <nuxt-link
    :to="route"
    class="outline-none focus:shadow-outline rounded-lg border border-transparent text-12 text-gray-300 font-bold text-center uppercase no-underline whitespace-no-wrap px-30 py-12"
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
