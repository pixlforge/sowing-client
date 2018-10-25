<template>
  <div>
    <Header :item="subcategory"/>
    <div class="container pb-100">
      <div class="flex flex-wrap justify-between mt-60">
        
        <!-- List all products for the given subcategory -->
        <Product
          v-for="product in products"
          :key="product.id"
          :product="product"
          class="mt-40"/>

      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Product from "@/components/products/Product";
import { mapGetters } from "vuex";

export default {
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

