<template>
  <div>
    Dashboard
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  middleware: ['authenticated'],
  head() {
    return {
      title: `${this.$t('pages.shop.management.dashboard.title')} | ${this.title}`
    };
  },
  layout: 'shop-management',
  computed: {
    ...mapGetters({
      shopExists: 'shop/shopExists'
    })
  },
  async asyncData({ app, store }) {
    const shop = await app.$axios.$get('/user/shop');

    return {
      shopData: shop.data,
      title: app.head.title
    };
  },
  mounted() {
    if (!this.shopExists) {
      this.setShop(this.shopData);
    }
  },
  methods: {
    ...mapActions({
      setShop: 'shop/setShop'
    })
  }
}
</script>
