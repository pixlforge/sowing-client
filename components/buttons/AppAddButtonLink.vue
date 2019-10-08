<template>
  <nuxt-link
    :to="route"
    :title="$t('buttons.add_address')"
    class="inline-block text-14 font-semibold text-green-500 hover:text-green-600 flex items-center rounded-lg outline-none focus:shadow-outline"
  >
    <font-awesome-icon
      :icon="['far', 'plus-circle']"
      class="mr-10"
    />
    {{ label }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    route: {
      type: Object,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  }
}
</script>
