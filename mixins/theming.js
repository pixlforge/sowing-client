import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      shopTheme: "shop/shopTheme"
    }),
    btnTheme() {
      return `button__${this.shopTheme}`;
    },
    bgTheme() {
      return `bg-${this.shopTheme}`;
    },
    textTheme() {
      return `text-${this.shopTheme}`;
    }
  }
};
