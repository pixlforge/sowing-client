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
      <AppShopCustomization/>
    </Card>

  </div>
</template>

<script>
import theming from '@/mixins/theming'
import shopManagement from '@/mixins/shop-management'

import Card from '@/components/Card'
import Heading from '@/components/Heading'
import AppShopCustomization from '@/components/shops/AppShopCustomization'

export default {
  middleware: ['authenticated'],
  head() {
    return {
      title: this.$t('pages.shop.management.theme.title'),
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
    Card,
    Heading,
    AppShopCustomization
  },
  mixins: [
    theming,
    shopManagement
  ]
}
</script>
