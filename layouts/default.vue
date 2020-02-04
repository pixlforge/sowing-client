<template>
  <div>

    <!-- Alert -->
    <Alert/>

    <!-- Navbar -->
    <Navbar/>

    <!-- Categories -->
    <AppCategoryBar/>

    <!-- Page content -->
    <nuxt/>

    <!-- Footer -->
    <Footer/>

    <!-- Disclaimer -->
    <Disclaimer :class="bgTheme"/>
  </div>
</template>

<script>
import theming from '@/mixins/theming'

import Navbar from '@/components/Navbar'
import Alert from '@/components/globals/Alert'
import Footer from '@/components/footer/Footer'
import Disclaimer from '@/components/footer/Disclaimer'
import AppCategoryBar from '@/components/categories/AppCategoryBar'

export default {
  components: {
    Navbar,
    Alert,
    Footer,
    Disclaimer,
    AppCategoryBar
  },
  mixins: [theming]
}
</script>
