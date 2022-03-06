<template>
  <li>
    <nuxt-link :to="{ name: route }" :class="classes" class="block py-10">
      <font-awesome-icon v-if="icon" :icon="['far', icon]" class="mr-2" />
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
      required: true,
    },
    route: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    isCurrentRoute() {
      return this.$route.name.includes(this.route)
    },
    classes() {
      let active

      if (this.isCurrentRoute) {
        active = `text-${this.shopTheme}-900`
      }

      return `hover:text-${this.shopTheme}-500 ${active}`
    },
  },
}
</script>
