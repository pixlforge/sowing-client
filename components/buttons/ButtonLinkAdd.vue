<template>
  <nuxt-link
    :to="route"
    :title="$t('button.add_address')"
    :class="`text-${shopTheme}-500 hover:text-${shopTheme}-600`"
    class="text-14 font-semibold text-green-500 hover:text-green-600 flex items-center rounded-lg outline-none focus:shadow-outline"
  >
    <font-awesome-icon :icon="['far', 'plus-circle']" class="mr-10" />

    {{ label }}
  </nuxt-link>
</template>

<script>
import theming from '@/mixins/theming'

export default {
  mixins: [theming],
  props: {
    route: {
      type: Object,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
}
</script>
