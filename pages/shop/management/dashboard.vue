<template>
  <div>
    <!-- Title -->
    <Heading tag="h1" visual="h1"> Dashboard </Heading>

    <Card> this is the dashboard of the shop management section </Card>
  </div>
</template>

<script>
import shopManagement from '@/mixins/shop-management'

import Card from '@/components/globals/Card'
import Heading from '@/components/globals/Heading'

export default {
  components: {
    Card,
    Heading,
  },
  mixins: [shopManagement],
  layout: 'shop-management',
  middleware: ['authenticated'],
  head() {
    return {
      title: this.$t('shop.management.dashboard.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex',
        },
      ],
    }
  },
}
</script>
