<template>
  <div class="md:relative">
    <button
      ref="dropdownMenu"
      :title="$t('aria.buttons.languages')"
      :aria-label="$t('aria.buttons.languages')"
      @click.prevent="toggleDropdown"
      class="outline-none focus:shadow-outline rounded-lg border border-gray-200 text-12 text-gray-500 font-bold text-center uppercase no-underline whitespace-no-wrap flex px-20 py-12"
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

    <DropdownTransition>
      <DropdownContainer v-if="dropdownIsOpen">
        <DropdownItem
          v-for="locale in availableLocales"
          :key="locale.code"
          @click.native="setLocale(locale)"
        >
          {{ locale.name }}
        </DropdownItem>
      </DropdownContainer>
    </DropdownTransition>
  </div>
</template>

<script>
import theming from '@/mixins/theming'

import DropdownItem from '@/components/dropdowns/DropdownItem'
import DropdownTransition from '@/components/transitions/DropdownTransition'
import DropdownContainer from '@/components/dropdowns/DropdownContainer'

export default {
  components: {
    DropdownItem,
    DropdownTransition,
    DropdownContainer
  },
  mixins: [theming],
  data() {
    return {
      dropdownIsOpen: false
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales
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
    },
    setLocale(locale) {
      this.$i18n.setLocale(locale.code)
    }
  }
}
</script>
