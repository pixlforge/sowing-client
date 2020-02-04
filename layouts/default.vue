<template>
  <div>

    <!-- Alert -->
    <AppAlert/>

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
import AppAlert from '@/components/globals/AppAlert'
import AppFooter from '@/components/footer/AppFooter'
import AppDisclaimer from '@/components/footer/AppDisclaimer'
import AppCategoryBar from '@/components/categories/AppCategoryBar'

export default {
  components: {
    Navbar,
    AppAlert,
    AppFooter,
    AppDisclaimer,
    AppCategoryBar
  },
  mixins: [theming]
}
</script>
