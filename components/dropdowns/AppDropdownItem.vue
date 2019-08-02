<template>
  <li>
    <nuxt-link
      :to="to"
      :class="classes"
      class="block text-12 text-gray-400 hover:text-green-400 font-bold leading-normal uppercase no-underline whitespace-no-wrap text-gray-500 transition py-5 cursor-pointer"
    >
      <font-awesome-icon
        v-if="icon"
        :icon="['far', icon]"
        class="mr-5"
      />
      <slot/>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: false,
      default: ''
    },
    color: {
      type: String,
      required: false,
      default: 'gray'
    },
    icon: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    classes() {
      let classes = `text-${this.color}-400`

      if (this.color === 'pink') {
        classes = `text-${this.color}-600`
      }

      return classes
    }
  }
}
</script>
