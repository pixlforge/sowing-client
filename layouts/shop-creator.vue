<template>
  <div>
    <TheAlert/>
    <Navbar/>
    <AppCategoryBar/>
    <AppShopCover
      v-if="shopCover"
      :shop-cover="shopCover"/>
    <Header :class="bgTheme">
      <template slot="icon">
        <div
          v-if="shopAvatar"
          :style="`background-image: url('${shopAvatar}');`"
          class="block w-110 h-110 rounded-full bg-center bg-no-repeat bg-cover"/>
        <div
          v-else
          :class="textTheme">
          <font-awesome-icon
            :icon="['far', 'store']"
            class="block"/>
        </div>
      </template>
      <template slot="title">
        <h1 class="header-title">
          <template v-if="shopName">{{ shopName }}</template>
          <template v-else>{{ $t("pages.shop.creation") }}</template>
        </h1>
      </template>
    </Header>
    <AppShopNavigation/>
    <nuxt/>
    <Footer/>
    <Disclaimer :class="bgTheme"/>
  </div>
</template>

<script>
import TheAlert from "@/components/globals/TheAlert";
import Navbar from "@/components/Navbar";
import AppCategoryBar from "@/components/categories/AppCategoryBar";
import Header from "@/components/Header";
import AppShopNavigation from "@/components/shops/AppShopNavigation";
import Footer from "@/components/footer/Footer";
import Disclaimer from "@/components/footer/Disclaimer";
import AppShopCover from "@/components/shops/AppShopCover";
import theming from "@/mixins/theming";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    TheAlert,
    Navbar,
    AppCategoryBar,
    Header,
    AppShopNavigation,
    Footer,
    Disclaimer,
    AppShopCover
  },
  mixins: [theming],
  computed: {
    ...mapGetters({
      shopName: "shop/shopName",
      shopAvatar: "shop/shopAvatar",
      shopCover: "shop/shopCover"
    })
  },
  destroyed() {
    this.resetShop();
  },
  methods: {
    ...mapActions({
      resetShop: "shop/resetShop"
    })
  }
};
</script>
