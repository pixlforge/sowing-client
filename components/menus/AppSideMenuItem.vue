<template>
  <li class="mb-5 last:mb-0">
    <nuxt-link
      :to="localePath({ name: route })"
      :class="classes"
      class="block text-gray-300 border-l-4 border-transparent pl-30 py-12"
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
    label: {
      type: String,
      required: true
    },
    route: {
      type: String,
      required: true
    }
  },
  computed: {
    isCurrentRoute() {
      return this.$route.name.includes(this.route)
    },
    classes() {
      let active

      if (this.isCurrentRoute) {
        active = `border-${this.shopTheme}-500 text-gray-800`
      }

      return `hover:border-${this.shopTheme}-500 ${active}`
    }
  }
}
</script>
