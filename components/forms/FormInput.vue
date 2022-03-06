<template>
  <input
    :id="name"
    :name="name"
    :disabled="disabled"
    :type="type"
    :value="value"
    :placeholder="placeholder"
    :required="required"
    :aria-label="ariaLabel"
    :class="{
      'border-red-500': errors[name],
      'bg-gray-100': theme !== 'light',
      'bg-white': theme === 'light',
    }"
    class="block w-full appearance-none disabled:bg-white rounded-lg text-16 leading-tight text-gray-900 disabled:text-gray-200 placeholder-gray-200 outline-none focus:shadow-outline border border-transparent disabled:border-gray-200 disabled:cursor-not-allowed px-16 py-12"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      required: false,
      default: null,
    },
    name: {
      type: String,
      required: false,
      default: '',
    },
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    errors: {
      type: Object,
      required: false,
      default: () => {
        return {}
      },
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    theme: {
      type: String,
      required: false,
      default: '',
    },
    ariaLabel: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>
