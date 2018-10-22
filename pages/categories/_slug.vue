<template>
  <div>
    <div class="container py-100">
      <h1 class="title-large text-center">Category</h1>
      <div class="flex flex-wrap justify-between mt-100">
        
        <Product
          v-for="product in products"
          :key="product.id"
          :product="product"/>

      </div>
    </div>
  </div>
</template>

<script>
import Product from "@/components/products/Product";

export default {
  components: {
    Product
  },
  data() {
    return {
      products: []
    };
  },
  async asyncData({ params, app }) {
    let res = await app.$axios.$get(`/products?category=${params.slug}`);

    return {
      products: res.data
    };
  }
};
</script>

