<template>
  <label :for="name" class="inline-flex items-center">
    <input
      :id="name"
      :name="name"
      :checked="value"
      :disabled="disabled"
      :class="`text-${color}-500`"
      type="checkbox"
      class="form-checkbox rounded-lg text-24 disabled:text-gray-100 focus:shadow-outline focus:border-transparent disabled:cursor-not-allowed mr-10"
      @input="$emit('input', !value)"
    />
    <slot />
  </label>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: Boolean,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    color: {
      type: String,
      required: false,
      default: 'green',
    },
  },
}
</script>
