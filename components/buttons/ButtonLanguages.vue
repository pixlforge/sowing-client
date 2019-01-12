<template>
  <div class="dropdown-parent">
    <button
      ref="dropdownMenu"
      class="btn btn-default flex justify-center items-center px-10 md:px-20 py-10"
      @click.prevent="toggleDropdown">
      <div :class="textTheme">
        <font-awesome-icon
          :icon="['far', 'globe-europe']"
          class="text-16"/>
      </div>
      <font-awesome-icon
        :icon="['fas', 'caret-down']"
        class="text-16 ml-15"/>
    </button>

    <ul
      :class="{ 'block': dropdownIsOpen }"
      class="dropdown-child leading-normal">
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
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      dropdownIsOpen: false
    };
  },
  computed: {
    ...mapGetters({
      shopTheme: "shop/shopTheme"
    }),
    textTheme() {
      return `text-${this.shopTheme}`;
    }
  },
  mounted() {
    const escapeHandler = event => {
      if (event.key === "Escape" && this.dropdownIsOpen) {
        this.dropdownIsOpen = false;
      }
    };
    document.addEventListener("keydown", escapeHandler);

    const clickHandler = event => {
      let element = this.$refs.dropdownMenu;
      let target = event.target;
      if (element !== target && !element.contains(target)) {
        this.dropdownIsOpen = false;
      }
    };
    document.addEventListener("click", clickHandler);

    this.$once("hook:destroyed", () => {
      document.removeEventListener("keydown", escapeHandler);
      document.removeEventListener("click", clickHandler);
    });
  },
  methods: {
    toggleDropdown() {
      this.dropdownIsOpen = !this.dropdownIsOpen;
    }
  }
};
</script>
