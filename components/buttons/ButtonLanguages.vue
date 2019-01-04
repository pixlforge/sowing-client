<template>
  <button class="dropdown-parent btn flex justify-center items-center px-10 md:px-20">
    <div
      :class="textTheme"
      class="mr-10">
      <font-awesome-icon
        :icon="['far', 'globe-europe']"
        class="text-18"/>
    </div>
    <font-awesome-icon
      :icon="['fas', 'caret-down']"
      class="text-14 text-grey-dark"/>
    <ul class="dropdown-child">
      <li
        v-for="locale in $i18n.locales"
        :key="locale.code">
        <nuxt-link
          :to="switchLocalePath(locale.code)"
          class="link-dropdown">
          {{ locale.name }}
        </nuxt-link>
      </li>
    </ul>
  </button>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      shopTheme: "shop/shopTheme"
    }),
    textTheme() {
      return `text-${this.shopTheme}`;
    }
  }
};
</script>

