<template>
  <div
    :style="imgUrl"
    class="relative w-full lg:w-1/2 h-700 bg-cover bg-center bg-no-repeat flex items-end featured-category__container--large">

    <div class="flex flex-col items-start px-48 pb-48 z-10">

      <!-- Title -->
      <AppTitle
        semantic="h2"
        visual="main"
        utilities="text-white">
        Vêtements pour bébé
      </AppTitle>

      <!-- Description -->
      <p class="text-16 md:text-20 text-white mb-36">
        Now let's put some happy little clouds in here. Have fun with it. It looks so good, I might as well not stop.
      </p>

      <!-- Link -->
      <AppButtonLinkPrimary
        :to="localePath({ name: 'index' })"
        class="shadow-xl">
        Voir les produits
      </AppButtonLinkPrimary>
    </div>

    <!-- Mask -->
    <div class="absolute w-full h-full bg-black opacity-25"/>

  </div>
</template>

<script>
import AppTitle from '@/components/AppTitle'
import AppButtonLinkPrimary from '@/components/buttons/AppButtonLinkPrimary'

export default {
  components: {
    AppTitle,
    AppButtonLinkPrimary
  },
  computed: {
    imgUrl() {
      const img = require('@/assets/img/placeholders/product.svg')
      return `background-image: url(${img})`
    }
  }
}
</script>
