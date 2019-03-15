<template>
  <main>

    <!-- Header -->
    <Header>
      <template slot="title">
        <h1 class="header__title">{{ subcategory.name[locale] }}</h1>
      </template>
      <template slot="description">
        <p class="header__description">{{ subcategory.description[locale] }}</p>
      </template>
    </Header>
    
    <section class="section__container container">
      <div class="product__wrapper">

        <!-- Products -->
        <div
          v-for="product in products"
          :key="product.id"
          class="product__container">
          <Product :product="product"/>
        </div>

      </div>
    </section>

  </main>
</template>

<script>
import Header from "@/components/Header";
import Product from "@/components/products/Product";
import { mapGetters } from "vuex";

export default {
  head() {
    return {
      title: `${this.title} | ${this.subcategory.name[this.locale]}`
    };
  },
  components: {
    Header,
    Product
  },
  data() {
    return {
      subcategory: {},
      products: []
    };
  },
  async asyncData({ params, app }) {
    let subcategory = await app.$axios.$get(
      `/categories/${params.subcategory}`
    );
    let products = await app.$axios.$get(
      `/products?category=${params.subcategory}`
    );

    return {
      title: app.head.title,
      subcategory: subcategory.data,
      products: products.data
    };
  },
  computed: {
    ...mapGetters({
      locale: "locale"
    })
  }
};
</script>
