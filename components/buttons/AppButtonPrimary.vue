<template>
  <button
    :type="type"
    :class="classes"
    class="outline-none focus:shadow-outline rounded-lg text-12 text-white font-extrabold text-center uppercase transition no-underline whitespace-no-wrap px-30 py-12">
    <font-awesome-icon
      v-if="icon"
      :icon="['far', icon]"
      class="mr-10"/>
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
