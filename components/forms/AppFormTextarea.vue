<template>
  <textarea
    :id="name"
    :name="name"
    :disabled="disabled"
    :value="value"
    :rows="rows"
    :class="classes"
    class="block w-full appearance-none bg-gray-100 rounded-lg text-16 text-green-800 leading-tight outline-none border-2 border-transparent px-16 py-12"
    @input="$emit('input', $event.target.value)"/>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      required: false,
      default: null
    },
    name: {
      type: String,
      required: false,
      default: ''
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    errors: {
      type: Object,
      required: false,
      default: () => {
        return {}
      }
    },
    rows: {
      type: Number,
      required: false,
      default: 10
    }
  },
  computed: {
    classes() {
      if (!this.errors[this.name]) {
        return
      }

      return 'border-red-500'
    }
  }
}
</script>
