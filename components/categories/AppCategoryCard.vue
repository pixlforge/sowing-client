<template>
  <div class="category-card__container">
    <nuxt-link
      :to="localePath({ name: 'categories-slug', params: { slug: category.slug } })"
      :style="imgUrl"
      class="category-card__body">
      <h5 class="category-card__name">
        {{ category.name[locale] }}
      </h5>
      <div class="category-card__mask"/>
    </nuxt-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale'
    }),
    imgUrl() {
      const img = require('@/assets/img/placeholders/category.svg');
      return `background-image: url(${img})`;
    }
  }
};
</script>
