<template>
  <div
    :style="imgUrl"
    class="featured-category__container featured-category__container--large">
    <div class="featured-category__content">
      <h2 class="title__large title--white">
        Vêtements pour bébé
      </h2>
      <p class="featured-category__description">
        Now let's put some happy little clouds in here. Have fun with it. It looks so good, I might as well not stop.
      </p>
      <nuxt-link
        :to="localePath({ name: 'index' })"
        class="button button__primary button--spaced">
        Voir les produits
      </nuxt-link>
    </div>
    <div class="featured-category__mask"/>
  </div>
</template>

<script>
export default {
  computed: {
    imgUrl() {
      const img = require("@/assets/img/placeholders/product.svg");
      return `background-image: url(${img})`;
    }
  }
};
</script>
