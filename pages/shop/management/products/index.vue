<template>
  <div>
    <ResourceHeader>

      <!-- Page title -->
      <Heading
        tag="h1"
        visual="h1"
      >
        {{ $t("product.management.index.title") }}
      </Heading>

      <!-- Add a product -->
      <ButtonLinkAdd
        :route="{ name: 'shop-management-products-create-product' }"
        :label="$t('button.add_product')"
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

import ButtonLinkAdd from '@/components/buttons/ButtonLinkAdd'
import Card from '@/components/globals/Card'
import Heading from '@/components/globals/Heading'
import ResourceHeader from '@/components/resources/ResourceHeader'

export default {
  components: {
    ButtonLinkAdd,
    Card,
    Heading,
    ResourceHeader
  },
  mixins: [shopManagement],
  middleware: ['authenticated', 'hasShop'],
  layout: 'shop-management',
  head() {
    return {
      title: this.$t('product.management.index.title'),
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
