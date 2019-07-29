<template>
  <input
    :id="name"
    :name="name"
    :disabled="disabled"
    :type="type"
    :value="value"
    :placeholder="placeholder"
    :required="required"
    :class="{
      'border-red-500': errors[name],
      'bg-white text-gray-200 border-gray-200 cursor-not-allowed': disabled,
      'text-gray-900 border-transparent': !disabled,
      'bg-gray-100': theme !== 'light' && !disabled,
      'bg-white': theme === 'light'
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
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    theme: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
