<template>
  <div>

    <!-- Alert -->
    <AppAlert/>

    <!-- Navbar -->
    <Navbar/>

    <!-- Categories -->
    <AppCategoryBar/>

    <!-- Shop cover image -->
    <AppShopCover
      v-if="shopCover"
      :shop-cover="shopCover"
    />

    <!-- Header -->
    <AppHeader
      :class="bgTheme"
      :title="shopName ? shopName : $t('pages.shop.creation')"
    />

    <!-- Navigation -->
    <AppShopNavigation/>

    <!-- Page content -->
    <nuxt/>

    <!-- Footer -->
    <AppFooter/>

    <!-- Disclaimer -->
    <AppDisclaimer :class="bgTheme"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import Navbar from '@/components/Navbar'
import AppAlert from '@/components/globals/AppAlert'
import AppFooter from '@/components/footer/AppFooter'
import AppHeader from '@/components/headers/AppHeader'
import AppShopCover from '@/components/shops/AppShopCover'
import AppDisclaimer from '@/components/footer/AppDisclaimer'
import AppCategoryBar from '@/components/categories/AppCategoryBar'
import AppShopNavigation from '@/components/shops/navigation/AppShopNavigation'

export default {
  components: {
    Navbar,
    AppAlert,
    AppFooter,
    AppHeader,
    AppShopCover,
    AppDisclaimer,
    AppCategoryBar,
    AppShopNavigation
  },
  mixins: [theming],
  computed: {
    ...mapGetters({
      shopName: 'shop/shopName',
      shopAvatar: 'shop/shopAvatar',
      shopCover: 'shop/shopCover'
    })
  },
  destroyed() {
    this.resetShop()
  },
  methods: {
    ...mapActions({
      resetShop: 'shop/resetShop'
    })
  }
}
</script>
