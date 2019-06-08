<template>
  <div>
    Dashboard
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  layout: "shop-management",
  async asyncData({ app, store }) {
    let shop = await app.$axios.$get("/user/shop");

    return {
      shopData: shop.data,
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

