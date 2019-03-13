<template>
  <div
    :class="bgTheme"
    class="tile__container"
    @click.prevent="update">
    <font-awesome-icon
      v-if="theme === shopTheme"
      :icon="['far', 'check-circle']"
      class="tile__icon"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    theme: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      shopTheme: "shop/shopTheme"
    }),
    bgTheme() {
      return `bg-${this.theme}`;
    }
  },
  methods: {
    ...mapActions({
      setShopTheme: "shop/setShopTheme"
    }),
    async update() {
      try {
        await this.setShopTheme(this.theme);
        this.$toast.success(this.$t("toasts.theme_updated"));
      } catch (e) {
        this.$toast.error(this.$t("toasts.general_error"));
      }
    }
  }
};
</script>
