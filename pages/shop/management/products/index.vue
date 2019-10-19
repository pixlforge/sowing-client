<template>
  <div>
    <AppResourceHeader>

      <!-- Page title -->
      <AppTitle
        semantic="h1"
        visual="h1"
      >
        {{ $t("pages.account.addresses.titles.index") }}
      </AppTitle>

      <!-- Add a product -->
      <AppAddButtonLink
        :route="{ name: 'shop-management-products-create' }"
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
import { mapGetters, mapActions } from 'vuex'

import AppCard from '@/components/AppCard'
import AppTitle from '@/components/AppTitle'
import AppAddButtonLink from '@/components/buttons/AppAddButtonLink'
import AppResourceHeader from '@/components/resources/AppResourceHeader'

export default {
  layout: 'shop-management',
  middleware: ['authenticated', 'hasShop'],
  components: {
    AppCard,
    AppTitle,
    AppAddButtonLink,
    AppResourceHeader
  },
  computed: {
    ...mapGetters({
      shopExists: 'shop/shopExists'
    })
  },
  async asyncData({ app, store }) {
    const shop = await app.$axios.$get('/user/shop')

    return {
      shopData: shop.data,
      title: app.head.title
    }
  },
  mounted() {
    if (!this.shopExists) {
      this.setShop(this.shopData)
    }
  },
  methods: {
    ...mapActions({
      setShop: 'shop/setShop'
    })
  }
}
</script>
