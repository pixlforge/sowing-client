<template>
  <li class="side-menu__list-item">
    <nuxt-link
      :to="localePath({ name: route })"
      :class="classes"
      class="side-menu__link">
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
        active = `side-menu__link--active ${this.bgTheme}`;
      }

      return `hover:${this.bgTheme} ${active}`;
    }
  }
}
</script>
