<template>
  <div>
    <TheAlert/>
    <Navbar/>
    <Categories/>
    <nuxt/>
    <Footer/>
    <Disclaimer/>
  </div>
</template>

<script>
import TheAlert from "@/components/globals/TheAlert";
import Navbar from "@/components/Navbar";
import Categories from "@/components/categories/Categories";
import Footer from "@/components/footer/Footer";
import Disclaimer from "@/components/footer/Disclaimer";

export default {
  components: {
    TheAlert,
    Navbar,
    Categories,
    Footer,
    Disclaimer
  }
};
</script>
