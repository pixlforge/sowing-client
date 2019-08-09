<template>
  <nuxt-link
    :to="to"
    :class="`bg-${color}-600 hover:bg-${color}-700`"
    class="inline-block outline-none rounded-lg text-12 font-extrabold text-center uppercase text-white transition-color transition-faster no-underline whitespace-no-wrap px-30 py-12"
  >
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
    color: {
      type: String,
      required: false,
      default: 'green'
    }
  }
}
</script>
