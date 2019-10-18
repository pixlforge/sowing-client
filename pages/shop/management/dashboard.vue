<template>
  <div>

    <!-- Title -->
    <AppTitle
      semantic="h1"
      visual="h1"
    >
      Dashboard
    </AppTitle>

    <AppCard>
      this is the dashboard of the shop management section
    </AppCard>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import AppCard from '@/components/AppCard'
import AppTitle from '@/components/AppTitle'

export default {
  components: {
    AppCard,
    AppTitle
  },
  middleware: ['authenticated'],
  head() {
    return {
      title: `${this.$t('pages.shop.management.dashboard.title')} | ${this.title}`,
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
