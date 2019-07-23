<template>
  <li class="mb-5 last:mb-0">
    <nuxt-link
      :to="localePath({ name: route })"
      :class="classes"
      class="block rounded-lg hover:text-white hover:shadow-xl pl-20 py-12">
      {{ label }}
    </nuxt-link>
  </li>
</template>

<script>
import theming from '@/mixins/theming';

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
    classes() {
      let active;

      if (this.$route.name.includes(this.route)) {
        active = `text-white shadow-xl ${this.bgTheme}`;
      }

      return `hover:${this.bgTheme} ${active}`;
    }
  }
}
</script>
