<template>
  <button
    :class="{
      'button-pulse-gray': shouldPulse,
      'border-gray-200 hover:border-gray-300 text-gray-300 hover:text-gray-400': !shouldPulse
    }"
    type="button"
    class="w-full hover:bg-gray-100 border rounded-lg transition-all duration-200 ease-out select-none py-12"
  >
    <font-awesome-icon
      v-if="icon"
      :icon="[iconCollection, icon]"
      class="mr-10"
    />
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: false,
      default() {
        return ''
      }
    },
    iconStyle: {
      type: String,
      required: false,
      default() {
        return ''
      }
    },
    shouldPulse: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    iconCollection() {
      switch (this.iconStyle) {
        case 'solid':
          return 'fas'
        case 'brand':
          return 'fab'
        default:
          return 'far'
      }
    }
  }
}
</script>
