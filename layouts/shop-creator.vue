<template>
  <div class="antialiased text-green-900">

    <!-- Alert -->
    <AppAlert/>

    <!-- Navbar -->
    <AppNavbar/>

    <!-- Categories -->
    <AppCategoryBar/>

    <!-- Shop cover image -->
    <AppShopCover
      v-if="shopCover"
      :shop-cover="shopCover"/>

    <!-- Header -->
    <AppHeader :class="bgTheme">
      <template slot="icon">
        <div
          v-if="shopAvatar"
          :style="`background-image: url('${shopAvatar}');`"
          class="header__avatar header__avatar--picture"/>
        <div
          v-else
          :class="textTheme">
          <font-awesome-icon
            :icon="['far', 'store']"
            class="block"/>
        </div>
      </template>
      <template slot="title">
        <h1 class="header__title">
          <template v-if="shopName">
            {{ shopName }}
          </template>
          <template v-else>
            {{ $t("pages.shop.creation") }}
          </template>
        </h1>
      </template>
    </AppHeader>

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
import { mapGetters, mapActions } from 'vuex';
import theming from '@/mixins/theming';

import AppNavbar from '@/components/AppNavbar';
import AppHeader from '@/components/AppHeader';
import AppAlert from '@/components/globals/AppAlert';
import AppFooter from '@/components/footer/AppFooter';
import AppShopCover from '@/components/shops/AppShopCover';
import AppDisclaimer from '@/components/footer/AppDisclaimer';
import AppCategoryBar from '@/components/categories/AppCategoryBar';
import AppShopNavigation from '@/components/shops/AppShopNavigation';

export default {
  components: {
    AppNavbar,
    AppHeader,
    AppAlert,
    AppFooter,
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
    this.resetShop();
  },
  methods: {
    ...mapActions({
      resetShop: 'shop/resetShop'
    })
  }
};
</script>
