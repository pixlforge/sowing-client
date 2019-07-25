<template>
  <div class="category-card__container">
    <nuxt-link
      :to="localePath({ name: 'categories-slug', params: { slug: category.slug } })"
      :style="imgUrl"
      class="category-card__body">

      <!-- Name -->
      <AppTitle
        semantic="h2"
        visual="h3"
        utilities="text-white z-10">
        {{ category.name[locale] }}
      </AppTitle>

      <!-- Mask -->
      <div class="category-card__mask"/>

    </nuxt-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import AppTitle from '@/components/AppTitle'

export default {
  components: {
    AppTitle
  },
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
      const img = require('@/assets/img/placeholders/category.svg')
      return `background-image: url(${img})`
    }
  }
}
</script>
