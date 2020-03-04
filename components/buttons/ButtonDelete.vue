<template>
  <button
    :title="$t('button.delete')"
    :class="`${iconSize}`"
    class="text-gray-300 hover:text-red-500 transition-colors duration-200 ease-out"
  >
    <font-awesome-icon
      :icon="['far', 'trash-alt']"
      class=""
    />
  </button>
</template>

<script>
export default {
  props: {
    iconSize: {
      type: String,
      required: false,
      default() {
        return 'text-20'
      }
    }
  }
}
</script>
