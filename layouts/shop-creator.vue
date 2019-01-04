<template>
  <div>
    <TheAlert/>
    <Navbar/>
    <Categories/>
    <div
      v-if="shopCover"
      :style="`background-image: url('${shopCover}');`"
      class="block w-full h-350 bg-center bg-no-repeat bg-cover"/>
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
          <template v-else>{{ $t("pages.shop.title") }}</template>
        </h1>
      </template>
    </Header>
    <Navigation/>
    <nuxt/>
    <Footer/>
    <Disclaimer :class="bgTheme"/>
  </div>
</template>

<script>
import TheAlert from "@/components/globals/TheAlert";
import Navbar from "@/components/Navbar";
import Categories from "@/components/categories/Categories";
import Header from "@/components/Header";
import Navigation from "@/components/shops/creator/Navigation";
import Footer from "@/components/footer/Footer";
import Disclaimer from "@/components/footer/Disclaimer";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    TheAlert,
    Navbar,
    Categories,
    Header,
    Navigation,
    Footer,
    Disclaimer
  },
  computed: {
    ...mapGetters({
      shopName: "shop/shopName",
      shopAvatar: "shop/shopAvatar",
      shopCover: "shop/shopCover",
      shopTheme: "shop/shopTheme"
    }),
    bgTheme() {
      return `bg-${this.shopTheme}`;
    },
    textTheme() {
      return `text-${this.shopTheme}`;
    }
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
