import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      locale: 'locale',
    }),
    availableLocales() {
      return this.$i18n.locales
    },
    currentLocale() {
      return this.availableLocales.find((locale) => locale.code === this.locale)
    },
  },
  methods: {
    setLocale(locale) {
      this.$i18n.setLocale(locale.code)
    },
  },
}
