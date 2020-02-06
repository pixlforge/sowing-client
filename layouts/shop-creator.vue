<template>
  <div>

    <!-- Alert -->
    <Alert/>

    <!-- Navbar -->
    <Navbar/>

    <!-- Categories -->
    <CategoryBar/>

    <!-- Shop cover image -->
    <ShopCover
      v-if="shopCover"
      :shop-cover="shopCover"
    />

    <!-- Header -->
    <Header
      :class="bgTheme"
      :title="shopName ? shopName : $t('shop.creation')"
    />

    <!-- Navigation -->
    <ShopNavigation/>

    <!-- Page content -->
    <nuxt/>

    <!-- Footer -->
    <Footer/>

    <!-- Disclaimer -->
    <Disclaimer :class="bgTheme"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import Navbar from '@/components/globals/Navbar'
import Alert from '@/components/globals/Alert'
import Footer from '@/components/footer/Footer'
import Header from '@/components/headers/Header'
import ShopCover from '@/components/shops/ShopCover'
import Disclaimer from '@/components/footer/Disclaimer'
import CategoryBar from '@/components/categories/CategoryBar'
import ShopNavigation from '@/components/shops/navigation/ShopNavigation'

export default {
  components: {
    Navbar,
    Alert,
    Footer,
    Header,
    ShopCover,
    Disclaimer,
    CategoryBar,
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
