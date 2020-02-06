<template>
  <div>
    <ResourceHeader>

      <!-- Page title -->
      <Heading
        tag="h1"
        visual="h1"
      >
        {{ $t("products.management.index.title") }}
      </Heading>

      <!-- Add a product -->
      <AddButtonLink
        :route="{ name: 'shop-management-products-create-product' }"
        :label="$t('buttons.add_product')"
        class="mt-60 md:mt-0"
      />
    </ResourceHeader>

    <Card>
      List of all products
    </Card>

  </div>
</template>

<script>
import shopManagement from '@/mixins/shop-management'

import Card from '@/components/globals/Card'
import Heading from '@/components/globals/Heading'
import AddButtonLink from '@/components/buttons/AddButtonLink'
import ResourceHeader from '@/components/resources/ResourceHeader'

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
    Card,
    Heading,
    AddButtonLink,
    ResourceHeader
  },
  mixins: [shopManagement]
}
</script>
