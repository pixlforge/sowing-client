<template>
  <div>

    <!-- Alert -->
    <AppAlert/>

    <!-- Navbar -->
    <Navbar/>

    <!-- Categories -->
    <AppCategoryBar/>

    <!-- Shop cover image -->
    <ShopCover
      v-if="shopCover"
      :shop-cover="shopCover"
    />

    <!-- Header -->
    <Header
      :class="bgTheme"
      :title="shopName ? shopName : $t('pages.shop.creation')"
    />

    <!-- Navigation -->
    <ShopNavigation/>

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
import Header from '@/components/headers/Header'
import ShopCover from '@/components/shops/ShopCover'
import AppDisclaimer from '@/components/footer/AppDisclaimer'
import AppCategoryBar from '@/components/categories/AppCategoryBar'
import ShopNavigation from '@/components/shops/navigation/ShopNavigation'

export default {
  components: {
    Navbar,
    AppAlert,
    AppFooter,
    Header,
    ShopCover,
    AppDisclaimer,
    AppCategoryBar,
    ShopNavigation
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
