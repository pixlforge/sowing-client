import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      shopTheme: 'shop/shopTheme',
    }),
    btnTheme() {
      return `bg-${this.shopTheme}-500`
    },
    bgTheme() {
      return `bg-${this.shopTheme}-500`
    },
    textTheme() {
      return `text-${this.shopTheme}-500`
    },
  },
}
