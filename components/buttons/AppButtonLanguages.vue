<template>
  <div class="relative">
    <button
      ref="dropdownMenu"
      :aria-label="$t('aria.buttons.languages')"
      class="outline-none focus:shadow-outline rounded-lg border border-gray-200 text-12 text-gray-500 font-bold text-center uppercase transition no-underline whitespace-no-wrap flex px-20 py-12"
      @click.prevent="toggleDropdown"
    >
      <div :class="textTheme">
        <font-awesome-icon
          :icon="['far', 'globe-europe']"
          class="text-16 mr-5"
        />
      </div>
      <font-awesome-icon
        :icon="['fas', 'caret-down']"
        class="text-16 ml-14"
      />
    </button>

    <ul
      :class="{
        'block': dropdownIsOpen,
        'hidden': !dropdownIsOpen
      }"
      class="absolute bg-white shadow-2xl rounded-lg text-left top-0 left-0 px-30 py-20 mt-48 z-20"
    >
      <AppDropdownItem
        v-for="locale in $i18n.locales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
      >
        {{ locale.name }}
      </AppDropdownItem>
    </ul>
  </div>
</template>

<script>
import theming from '@/mixins/theming'

import AppDropdownItem from '@/components/dropdowns/AppDropdownItem'

export default {
  components: {
    AppDropdownItem
  },
  mixins: [theming],
  data() {
    return {
      dropdownIsOpen: false
    }
  },
  mounted() {
    const escapeHandler = (event) => {
      if (event.key === 'Escape' && this.dropdownIsOpen) {
        this.dropdownIsOpen = false
      }
    }
    document.addEventListener('keydown', escapeHandler)

    const clickHandler = (event) => {
      const element = this.$refs.dropdownMenu
      const target = event.target
      if (element !== target && !element.contains(target)) {
        this.dropdownIsOpen = false
      }
    }
    document.addEventListener('click', clickHandler)

    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', escapeHandler)
      document.removeEventListener('click', clickHandler)
    })
  },
  methods: {
    toggleDropdown() {
      this.dropdownIsOpen = !this.dropdownIsOpen
    }
  }
}
</script>
