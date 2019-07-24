<template>
  <div
    :style="imgUrl"
    class="featured-category__container featured-category__container--large">

    <div class="featured-category__content">

      <!-- Title -->
      <AppTitle
        semantic="h2"
        visual="main"
        utilities="text-white">
        Vêtements pour bébé
      </AppTitle>

      <!-- Description -->
      <p class="featured-category__description my-16">
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
    <div class="featured-category__mask"/>

  </div>
</template>

<script>
import AppTitle from '@/components/AppTitle';
import AppButtonLinkPrimary from '@/components/buttons/AppButtonLinkPrimary';

export default {
  components: {
    AppTitle,
    AppButtonLinkPrimary
  },
  computed: {
    imgUrl() {
      const img = require('@/assets/img/placeholders/product.svg');
      return `background-image: url(${img})`;
    }
  }
};
</script>
