<template>
  <div>

    <!-- Title -->
    <Heading
      tag="h1"
      visual="h1"
    >
      Dashboard
    </Heading>

    <Card>
      this is the dashboard of the shop management section
    </Card>

  </div>
</template>

<script>
import shopManagement from '@/mixins/shop-management'

import Card from '@/components/globals/Card'
import Heading from '@/components/globals/Heading'

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
    Card,
    Heading
  },
  middleware: ['authenticated'],
  layout: 'shop-management',
  mixins: [shopManagement]
}
</script>
