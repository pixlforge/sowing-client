<template>
  <li>
    <nuxt-link
      :to="to"
      :class="`hover:text-${shopTheme}-500`"
      class="text-14 no-underline"
    >
      {{ label }}
    </nuxt-link>
  </li>
</template>

<script>
import theming from '@/mixins/theming'

export default {
  mixins: [theming],
  props: {
    to: {
      type: Object,
      required: false,
      default: () => {
        return {}
      },
    },
    label: {
      type: String,
      required: true,
    },
  },
}
</script>
