<template>
  <div>

    <!-- Title -->
    <AppTitle
      semantic="h1"
      visual="h1">
      Thème
    </AppTitle>

    <!-- Shop customization -->
    <AppShopCustomization class="mt-72"/>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import AppTitle from '@/components/AppTitle'
import AppShopCustomization from '@/components/shops/AppShopCustomization'

export default {
  middleware: ['authenticated'],
  head() {
    return {
      title: `${this.$t('pages.shop.management.theme.title')} | ${this.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex'
        }
      ]
    }
  },
  layout: 'shop-management',
  components: {
    AppTitle,
    AppShopCustomization
  },
  mixins: [theming],
  computed: {
    ...mapGetters({
      shopExists: 'shop/shopExists'
    })
  },
  async asyncData({ app, store }) {
    const shop = await app.$axios.$get('/user/shop')

    return {
      shopData: shop.data,
      title: app.head.title
    }
  },
  mounted() {
    if (!this.shopExists) {
      this.setShop(this.shopData)
    }
  },
  methods: {
    ...mapActions({
      setShop: 'shop/setShop'
    })
  }
}
</script>
