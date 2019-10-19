<template>
  <div>
    <header class="flex items-center">

      <!-- Back -->
      <AppBackButton
        :route="{ name: 'shop-management-products' }"
        class="mr-20"
      />

      <!-- Page title -->
      <AppTitle
        semantic="h1"
        visual="h2"
      >
        {{ $t("products.management.create.title") }}
      </AppTitle>
    </header>

    <AppCard>
      Add a new product to your shop
    </AppCard>

  </div>
</template>

<script>
import shopManagement from '@/mixins/shop-management'

import AppCard from '@/components/AppCard'
import AppTitle from '@/components/AppTitle'
import AppBackButton from '@/components/buttons/AppBackButton'

export default {
  layout: 'shop-management',
  middleware: ['authenticated', 'hasShop'],
  components: {
    AppCard,
    AppTitle,
    AppBackButton
  },
  mixins: [shopManagement]
}
</script>
