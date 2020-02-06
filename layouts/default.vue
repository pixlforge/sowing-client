<template>
  <div>

    <!-- Alert -->
    <Alert/>

    <!-- Navbar -->
    <Navbar/>

    <!-- Categories -->
    <CategoryBar/>

    <!-- Page content -->
    <Nuxt/>

    <!-- Footer -->
    <Footer/>

    <!-- Disclaimer -->
    <Disclaimer :class="bgTheme"/>
  </div>
</template>

<script>
import theming from '@/mixins/theming'

import Navbar from '@/components/globals/Navbar'
import Alert from '@/components/globals/Alert'
import Footer from '@/components/footer/Footer'
import Disclaimer from '@/components/footer/Disclaimer'
import CategoryBar from '@/components/categories/CategoryBar'

export default {
  components: {
    Navbar,
    Alert,
    Footer,
    Disclaimer,
    CategoryBar
  },
  mixins: [theming]
}
</script>
