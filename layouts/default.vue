<template>
  <div>
    <Navbar/>
    <Categories/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Categories from "@/components/categories/Categories";
import Footer from "@/components/footer/Footer";

export default {
  components: {
    Navbar,
    Categories,
    Footer
  }
};
</script>
