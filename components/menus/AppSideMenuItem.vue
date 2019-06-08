<template>
  <li
    :class="classes"
    class="side-menu__list-item">
    {{ label }}
  </li>
</template>

<script>
import theming from "@/mixins/theming";

export default {
  mixins: [theming],
  props: {
    label: {
      type: String,
      required: true
    },
    activeRoute: {
      type: String,
      required: true
    }
  },
  computed: {
    classes() {
      let active;

      if (this.$route.name.includes(this.activeRoute)) {
        active = `side-menu__list-item--active ${this.bgTheme}`;
      }

      return `hover:${this.bgTheme} ${active}`;
    }
  }
}
</script>
