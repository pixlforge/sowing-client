<template>
  <div>

    <!-- Alert -->
    <AppAlert/>

    <!-- Navbar -->
    <AppNavbar/>

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

import AppNavbar from '@/components/AppNavbar'
import AppAlert from '@/components/globals/AppAlert'
import AppFooter from '@/components/footer/AppFooter'
import AppDisclaimer from '@/components/footer/AppDisclaimer'
import AppCategoryBar from '@/components/categories/AppCategoryBar'

export default {
  components: {
    AppNavbar,
    AppAlert,
    AppFooter,
    AppDisclaimer,
    AppCategoryBar
  },
  mixins: [theming]
}
</script>
