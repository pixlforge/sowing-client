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
import { mapGetters, mapActions } from 'vuex';
import theming from '@/mixins/theming';

import AppShopCustomization from '@/components/shops/AppShopCustomization';

export default {
  middleware: ['authenticated'],
  head() {
    return {
      title: `${this.$t('pages.shop.management.theme.title')} | ${this.title}`
    };
  },
  layout: 'shop-management',
  components: {
    AppShopCustomization
  },
  mixins: [theming],
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
