<template>
  <div>

    <!-- Title -->
    <Heading
      tag="h1"
      visual="h1"
    >
      Thème
    </Heading>

    <!-- Shop customization -->
    <Card>
      <ShopCustomization/>
    </Card>

  </div>
</template>

<script>
import theming from '@/mixins/theming'
import shopManagement from '@/mixins/shop-management'

import Card from '@/components/globals/Card'
import Heading from '@/components/globals/Heading'
import ShopCustomization from '@/components/shops/ShopCustomization'

export default {
  components: {
    Card,
    Heading,
    ShopCustomization
  },
  mixins: [
    theming,
    shopManagement
  ],
  middleware: ['authenticated'],
  layout: 'shop-management',
  head() {
    return {
      title: this.$t('shop.management.theme.title'),
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
  }
}
</script>
