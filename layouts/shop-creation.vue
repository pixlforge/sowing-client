<template>
  <div>
    <TheAlert/>
    <Navbar/>
    <Categories/>
    <Header>
      <template slot="icon">
        <font-awesome-icon :icon="['far', 'store']"/>
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

export default {
  components: {
    TheAlert,
    Navbar,
    Categories,
    Header,
    Navigation,
    Footer
  }
};
</script>
