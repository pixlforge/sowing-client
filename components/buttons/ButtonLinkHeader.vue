<template>
  <nuxt-link
    :to="route"
    :class="`bg-${color}-600 hover:bg-${color}-700`"
    class="inline-block outline-none rounded-lg text-12 font-extrabold text-center uppercase text-white no-underline whitespace-no-wrap transition-colors duration-200 ease-out px-30 py-12"
  >
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
    color: {
      type: String,
      required: false,
      default: 'green'
    }
  }
}
</script>
