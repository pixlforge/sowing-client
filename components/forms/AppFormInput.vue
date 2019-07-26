<template>
  <input
    :id="name"
    :name="name"
    :disabled="disabled"
    :type="type"
    :value="value"
    :required="required"
    :class="{
      'border-red-500': errors[name],
      'bg-white text-gray-200 border-gray-200': disabled,
      'bg-gray-100 text-gray-900 border-transparent': !disabled,
    }"
    class="block w-full appearance-none rounded-lg text-16 leading-tight outline-none focus:shadow-outline border px-16 py-12"
    @input="$emit('input', $event.target.value)">
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
    type: {
      type: String,
      required: false,
      default: 'text'
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
    required: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
