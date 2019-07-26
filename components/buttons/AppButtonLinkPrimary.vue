<template>
  <nuxt-link
    :to="to"
    :class="classes"
    class="block outline-none focus:shadow-outline rounded-lg text-white font-bold text-center uppercase transition no-underline whitespace-no-wrap">
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
    },
    large: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    classes() {
      return this.buttonColors + ' ' + this.buttonSize
    },
    buttonColors() {
      let classes = `bg-${this.color}-500 hover:bg-${this.color}-700`

      if (this.color === 'pink-dark') {
        classes = 'bg-pink-600 hover:bg-pink-700'
      }

      return classes
    },
    buttonSize() {
      let classes = 'text-12 font-bold px-30 py-12'

      if (this.large) {
        classes = 'text-16 font-black px-48 py-20'
      }

      return classes
    }
  }
}
</script>
