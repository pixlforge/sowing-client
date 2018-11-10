<template>
  <main>

    <!-- Header -->
    <Header>
      <template slot="title">
        <h1 class="header-title">Nom de la boutique</h1>
      </template>
      <template slot="description">
        <p class="header-description">
          Description de la boutique
        </p>
      </template>
    </Header>

    <section class="container py-100">

      <!-- Product -->
      <ProductDetails :product="product"/>

    </section>

  </main>
</template>

<script>
import Header from "@/components/Header";
import ProductDetails from "@/components/products/ProductDetails";

export default {
  components: {
    Header,
    ProductDetails
  },
  data() {
    return {
      product: {}
    };
  },
  async asyncData({ params, app }) {
    let res = await app.$axios.$get(`/products/${params.slug}`);

    return {
      product: res.data
    };
  }
};
</script>

