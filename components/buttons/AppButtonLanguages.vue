<template>
  <div class="dropdown__parent">
    <button
      ref="dropdownMenu"
      :aria-label="$t('aria.buttons.languages')"
      class="button button__default button--navbar"
      @click.prevent="toggleDropdown">
      <div :class="textTheme">
        <font-awesome-icon
          :icon="['far', 'globe-europe']"
          class="button__icon"/>
      </div>
      <font-awesome-icon
        :icon="['fas', 'caret-down']"
        class="button__caret"/>
    </button>

    <ul
      :class="{ 'block': dropdownIsOpen }"
      class="dropdown__child">
      <li
        v-for="locale in $i18n.locales"
        :key="locale.code">
        <nuxt-link
          :to="switchLocalePath(locale.code)"
          class="dropdown__link">
          {{ locale.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import theming from '@/mixins/theming';

export default {
  mixins: [theming],
  data() {
    return {
      dropdownIsOpen: false
    };
  },
  mounted() {
    const escapeHandler = (event) => {
      if (event.key === 'Escape' && this.dropdownIsOpen) {
        this.dropdownIsOpen = false;
      }
    };
    document.addEventListener('keydown', escapeHandler);

    const clickHandler = (event) => {
      const element = this.$refs.dropdownMenu;
      const target = event.target;
      if (element !== target && !element.contains(target)) {
        this.dropdownIsOpen = false;
      }
    };
    document.addEventListener('click', clickHandler);

    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', escapeHandler);
      document.removeEventListener('click', clickHandler);
    });
  },
  methods: {
    toggleDropdown() {
      this.dropdownIsOpen = !this.dropdownIsOpen;
    }
  }
};
</script>
