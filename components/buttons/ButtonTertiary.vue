<template>
  <button
    :disabled="disabled"
    :type="type"
    :title="title"
    class="flex justify-center items-center outline-none focus:shadow-outline rounded-lg border border-transparent text-12 text-gray-300 font-bold text-center uppercase no-underline leading-tight sm:whitespace-no-wrap select-none px-30 py-12"
  >
    <font-awesome-icon v-if="icon" :icon="['far', icon]" class="mr-10" />
    <slot />
    <slot name="icon" />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: '',
    },
    icon: {
      type: String,
      required: false,
      default: null,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    title: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>
