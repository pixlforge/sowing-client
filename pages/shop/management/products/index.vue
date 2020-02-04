<template>
  <div>
    <AppResourceHeader>

      <!-- Page title -->
      <Heading
        tag="h1"
        visual="h1"
      >
        {{ $t("products.management.index.title") }}
      </Heading>

      <!-- Add a product -->
      <AppAddButtonLink
        :route="{ name: 'shop-management-products-create-product' }"
        :label="$t('buttons.add_product')"
        class="mt-60 md:mt-0"
      />
    </AppResourceHeader>

    <AppCard>
      List of all products
    </AppCard>

  </div>
</template>

<script>
import shopManagement from '@/mixins/shop-management'

import AppCard from '@/components/AppCard'
import Heading from '@/components/Heading'
import AppAddButtonLink from '@/components/buttons/AppAddButtonLink'
import AppResourceHeader from '@/components/resources/AppResourceHeader'

export default {
  head() {
    return {
      title: this.$t('products.management.index.title'),
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
  middleware: ['authenticated', 'hasShop'],
  components: {
    AppCard,
    Heading,
    AppAddButtonLink,
    AppResourceHeader
  },
  mixins: [shopManagement]
}
</script>
