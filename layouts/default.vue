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

<style>
html {
  font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-size: 10px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.toasted {
  font-size: 1.8rem !important;
  font-weight: 400 !important;
}

.toasted.toasted-primary.success {
  background-color: #5fb881 !important;
}

/* .toasted-container.top-right {
  top: 4% !important;
  right: 3% !important;
} */
</style>
