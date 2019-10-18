<template>
  <div>

    <!-- Title -->
    <AppTitle
      semantic="h1"
      visual="h1"
    >
      Thème
    </AppTitle>

    <!-- Shop customization -->
    <AppCard>
      <AppShopCustomization/>
    </AppCard>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import AppCard from '@/components/AppCard'
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
    AppCard,
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
