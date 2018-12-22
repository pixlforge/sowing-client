<template>
  <div>
    <TheAlert/>
    <Navbar/>
    <Categories/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import TheAlert from "@/components/globals/TheAlert";
import Navbar from "@/components/Navbar";
import Categories from "@/components/categories/Categories";
import Footer from "@/components/footer/Footer";

export default {
  components: {
    TheAlert,
    Navbar,
    Categories,
    Footer
  }
};
</script>
