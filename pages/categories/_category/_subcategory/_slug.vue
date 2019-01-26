<template>
  <main>

    <!-- Header -->
    <Header>
      <template slot="title">
        <h1 class="header-title">{{ subcategory.name[locale] }}</h1>
      </template>
      <template slot="description">
        <p class="header-description">
          {{ subcategory.description[locale] }}
        </p>
      </template>
    </Header>
    
    <section class="container section mt-120">
      <div class="flex flex-wrap justify-between -mx-40">

        <!-- Products -->        
        <div
          v-for="product in products"
          :key="product.id"
          class="w-1/2 p-40">
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
