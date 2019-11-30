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
import theming from '@/mixins/theming'
import shopManagement from '@/mixins/shop-management'

import AppCard from '@/components/AppCard'
import AppTitle from '@/components/AppTitle'
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
    AppCard,
    AppTitle,
    AppShopCustomization
  },
  mixins: [
    theming,
    shopManagement
  ]
}
</script>
