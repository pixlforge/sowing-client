<template>
  <div>
    <!-- Alert -->
    <Alert />

    <!-- Navbar -->
    <Navbar />

    <!-- Categories -->
    <CategoryBar />

    <!-- Page content -->
    <Nuxt />

    <!-- Footer -->
    <Footer />

    <!-- FooterDisclaimer -->
    <FooterDisclaimer :class="bgTheme" />
  </div>
</template>

<script>
import theming from '@/mixins/theming'

import Alert from '@/components/globals/Alert'
import CategoryBar from '@/components/categories/CategoryBar'
import FooterDisclaimer from '@/components/footer/FooterDisclaimer'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/globals/Navbar'

export default {
  components: {
    Alert,
    CategoryBar,
    FooterDisclaimer,
    Footer,
    Navbar,
  },
  mixins: [theming],
}
</script>
