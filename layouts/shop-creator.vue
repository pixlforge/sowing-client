<template>
  <div>
    <TheAlert/>
    <Navbar/>
    <Categories/>
    <div
      v-if="shopCover"
      :style="`background-image: url('${shopCover}');`"
      class="block w-full h-350 bg-center bg-no-repeat bg-cover"/>
    <Header>
      <template slot="icon">
        <div
          v-if="shopAvatar"
          :style="`background-image: url('${shopAvatar}');`"
          class="block w-110 h-110 rounded-full bg-center bg-no-repeat bg-cover"/>
        <font-awesome-icon
          v-else
          :icon="['far', 'store']"/>
      </template>
      <template slot="title">
        <h1 class="header-title">{{ $t("pages.shop.title") }}</h1>
      </template>
    </Header>
    <Navigation/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import TheAlert from "@/components/globals/TheAlert";
import Navbar from "@/components/Navbar";
import Categories from "@/components/categories/Categories";
import Header from "@/components/Header";
import Navigation from "@/components/shops/creator/Navigation";
import Footer from "@/components/footer/Footer";
import { mapGetters } from "vuex";

export default {
  components: {
    TheAlert,
    Navbar,
    Categories,
    Header,
    Navigation,
    Footer
  },
  computed: {
    ...mapGetters({
      shopAvatar: "shop/shopAvatar",
      shopCover: "shop/shopCover"
    })
  }
};
</script>
