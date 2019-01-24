<template>
  <div>
    <TheAlert/>
    <Navbar/>
    <Categories/>
    <nuxt/>
    <Footer/>
    <Disclaimer :class="bgTheme"/>
  </div>
</template>

<script>
import TheAlert from "@/components/globals/TheAlert";
import Navbar from "@/components/Navbar";
import Categories from "@/components/categories/Categories";
import Footer from "@/components/footer/Footer";
import Disclaimer from "@/components/footer/Disclaimer";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    TheAlert,
    Navbar,
    Categories,
    Footer,
    Disclaimer
  },
  computed: {
    ...mapGetters({
      shopTheme: "shop/shopTheme"
    }),
    bgTheme() {
      return `bg-${this.shopTheme}`;
    },
    textTheme() {
      return `text-${this.shopTheme}`;
    }
  }
};
</script>
