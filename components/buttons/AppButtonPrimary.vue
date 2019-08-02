<template>
  <button
    :disabled="disabled"
    :type="type"
    :title="title"
    :class="classes"
    class="block outline-none focus:shadow-outline rounded-lg border border-transparent text-white text-center uppercase transition no-underline whitespace-no-wrap"
  >
    <font-awesome-icon
      v-if="icon"
      :icon="['far', icon]"
      class="mr-10"
    />
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
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    size: {
      type: String,
      required: false,
      default: 'normal'
    }
  },
  computed: {
    classes() {
      return this.buttonColors + ' ' + this.buttonSize
    },
    buttonColors() {
      if (this.disabled) {
        return 'bg-white text-gray-200 border-gray-200 cursor-not-allowed shadow-none'
      }

      let classes = `bg-${this.color}-500 hover:bg-${this.color}-700`

      if (this.color === 'pink-dark') {
        classes = 'bg-pink-600 hover:bg-pink-700'
      }

      return classes
    },
    buttonSize() {
      let classes = 'text-12 font-extrabold px-30 py-12'

      if (this.size === 'large') {
        classes = 'text-16 font-black px-48 py-20'
      }

      if (this.size === 'mini') {
        classes = 'text-10 font-extrabold px-10 py-5'
      }

      return classes
    }
  }
}
</script>
