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
    <AppFooter/>

    <!-- Disclaimer -->
    <AppDisclaimer :class="bgTheme"/>
  </div>
</template>

<script>
import theming from '@/mixins/theming'

import Navbar from '@/components/Navbar'
import Alert from '@/components/globals/Alert'
import AppFooter from '@/components/footer/AppFooter'
import AppDisclaimer from '@/components/footer/AppDisclaimer'
import AppCategoryBar from '@/components/categories/AppCategoryBar'

export default {
  components: {
    Navbar,
    Alert,
    AppFooter,
    AppDisclaimer,
    AppCategoryBar
  },
  mixins: [theming]
}
</script>
