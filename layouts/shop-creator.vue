<template>
  <div>
    <!-- Alert -->
    <Alert />

    <!-- Navbar -->
    <Navbar />

    <!-- Categories -->
    <CategoryBar />

    <!-- Shop cover image -->
    <ShopCover v-if="shopCover" :shop-cover="shopCover" />

    <!-- Header -->
    <Header
      :class="bgTheme"
      :title="shopName ? shopName : $t('shop.creation')"
    />

    <!-- Navigation -->
    <ShopNavigation />

    <!-- Page content -->
    <Nuxt />

    <!-- Footer -->
    <Footer />

    <!-- Disclaimer -->
    <FooterDisclaimer :class="bgTheme" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import Alert from '@/components/globals/Alert'
import CategoryBar from '@/components/categories/CategoryBar'
import Disclaimer from '@/components/footer/Disclaimer'
import Footer from '@/components/footer/Footer'
import Header from '@/components/headers/Header'
import Navbar from '@/components/globals/Navbar'
import ShopCover from '@/components/shops/ShopCover'
import ShopNavigation from '@/components/shops/navigation/ShopNavigation'

export default {
  components: {
    Alert,
    CategoryBar,
    Disclaimer,
    Footer,
    Header,
    Navbar,
    ShopCover,
    ShopNavigation,
  },
  mixins: [theming],
  computed: {
    ...mapGetters({
      shopName: 'shop/shopName',
      shopAvatar: 'shop/shopAvatar',
      shopCover: 'shop/shopCover',
    }),
  },
  destroyed() {
    this.resetShop()
  },
  methods: {
    ...mapActions({
      resetShop: 'shop/resetShop',
    }),
  },
}
</script>
