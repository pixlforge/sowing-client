<template>
  <div>
    <TheAlert/>
    <Navbar/>
    <AppCategoryBar/>
    <nuxt/>
    <Footer/>
    <Disclaimer :class="bgTheme"/>
  </div>
</template>

<script>
import TheAlert from "@/components/globals/TheAlert";
import Navbar from "@/components/Navbar";
import AppCategoryBar from "@/components/categories/AppCategoryBar";
import Footer from "@/components/footer/Footer";
import Disclaimer from "@/components/footer/Disclaimer";
import theming from "@/mixins/theming";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    TheAlert,
    Navbar,
    AppCategoryBar,
    Footer,
    Disclaimer
  },
  mixins: [theming]
};
</script>
