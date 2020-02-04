<template>
  <div>

    <!-- Title -->
    <Heading
      tag="h1"
      visual="h1"
    >
      Dashboard
    </Heading>

    <AppCard>
      this is the dashboard of the shop management section
    </AppCard>

  </div>
</template>

<script>
import shopManagement from '@/mixins/shop-management'

import AppCard from '@/components/AppCard'
import Heading from '@/components/Heading'

export default {
  head() {
    return {
      title: this.$t('pages.shop.management.dashboard.title'),
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
  components: {
    AppCard,
    Heading
  },
  middleware: ['authenticated'],
  layout: 'shop-management',
  mixins: [shopManagement]
}
</script>
