<template>
  <main>

    <!-- Header -->
    <AppHeader>
      <template slot="title">
        <h1 class="header__title">
          {{ subcategory.name[locale] }}
        </h1>
      </template>
      <template slot="description">
        <p class="header__description">
          {{ subcategory.description[locale] }}
        </p>
      </template>
    </AppHeader>

    <section class="section__container container">
      <div class="product__wrapper">

        <!-- Products -->
        <div
          v-for="product in products"
          :key="product.id"
          class="product__container">
          <AppProduct :product="product"/>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

import AppHeader from '@/components/AppHeader';
import AppProduct from '@/components/products/AppProduct';

export default {
  head() {
    return {
      title: `${this.subcategory.name[this.locale]} | ${this.title}`
    };
  },
  components: {
    AppHeader,
    AppProduct
  },
  data() {
    return {
      subcategory: {},
      products: []
    };
  },
  computed: {
    ...mapGetters({
      locale: 'locale'
    })
  },
  async asyncData({ params, app }) {
    const subcategory = await app.$axios.$get(
      `/categories/${params.subcategory}`
    );
    const products = await app.$axios.$get(
      `/products?category=${params.subcategory}`
    );

    return {
      title: app.head.title,
      subcategory: subcategory.data,
      products: products.data
    };
  }
};
</script>
