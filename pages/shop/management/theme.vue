<template>
  <section class="shop__content">
    <h3 class="title__larger">
      Thème
    </h3>
    <div class="shop__section">
      <AppShopCustomization/>
    </div>
  </section>
</template>

<script>
import AppShopCustomization from "@/components/shops/AppShopCustomization";
import theming from "@/mixins/theming";
import { mapGetters, mapActions } from "vuex";

export default {
  middleware: ["authenticated"],
  head() {
    return {
      title: `${this.$t("pages.shop.management.theme.title")} | ${this.title}`
    };
  },
  layout: "shop-management",
  components: {
    AppShopCustomization
  },
  mixins: [theming],
  async asyncData({ app, store }) {
    let shop = await app.$axios.$get("/user/shop");

    return {
      shopData: shop.data,
      title: app.head.title
    };
  },
  computed: {
    ...mapGetters({
      shopExists: "shop/shopExists"
    })
  },
  mounted() {
    if (!this.shopExists) {
      this.setShop(this.shopData);
    }
  },
  methods: {
    ...mapActions({
      setShop: "shop/setShop"
    })
  }
}
</script>
