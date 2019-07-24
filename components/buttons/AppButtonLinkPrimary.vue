<template>
  <nuxt-link
    :to="to"
    :class="classes"
    class="block outline-none focus:shadow-outline rounded-lg text-12 text-white font-extrabold text-center uppercase transition no-underline whitespace-no-wrap px-30 py-12">
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
    color: {
      type: String,
      required: false,
      default: 'green'
    },
    icon: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: {
    classes() {
      let classes = `bg-${this.color}-500 hover:bg-${this.color}-700`

      if (this.color === 'pink') {
        classes = `bg-${this.color}-600 hover:bg-${this.color}-700`;
      }

      return classes;
    }
  }
}
</script>
