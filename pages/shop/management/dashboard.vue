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
import shopManagement from '@/mixins/shop-management'

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
  mixins: [shopManagement]
}
</script>
