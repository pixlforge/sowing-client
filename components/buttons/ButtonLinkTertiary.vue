<template>
  <nuxt-link
    :to="route"
    class="inline-flex justify-center items-center outline-none focus:shadow-outline rounded-lg border border-transparent text-12 text-gray-300 font-bold text-center uppercase no-underline leading-tight sm:whitespace-no-wrap select-none px-30 py-12"
  >
    <font-awesome-icon v-if="icon" :icon="['far', icon]" class="mr-10" />

    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    route: {
      type: Object,
      required: true,
    },
    icon: {
      type: String,
      required: false,
      default: null,
    },
  },
}
</script>
