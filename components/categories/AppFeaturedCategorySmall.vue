<template>
  <div
    :style="imgUrl"
    class="featured-category__container">
    <div class="featured-category__content">

      <!-- Title -->
      <AppTitle
        semantic="h2"
        visual="main"
        utilities="text-white">
        Savon artisanal
      </AppTitle>

      <!-- Description -->
      <p class="featured-category__description">
        Now let's put some happy little clouds in here. Have fun with it. It looks so good, I might as well not stop.
      </p>

      <!-- Link -->
      <nuxt-link
        :to="localePath({ name: 'index' })"
        class="button button__primary button--spaced">
        Voir les produits
      </nuxt-link>
    </div>

    <!-- Mask -->
    <div class="featured-category__mask"/>

  </div>
</template>

<script>
import AppTitle from '@/components/AppTitle';

export default {
  components: {
    AppTitle
  },
  computed: {
    imgUrl() {
      const img = require('@/assets/img/placeholders/product.svg');
      return `background-image: url(${img})`;
    }
  }
};
</script>
