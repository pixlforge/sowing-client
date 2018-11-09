<template>
  <main>
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
    <div class="container">

      <section class="section pt-100">
        <form @submit.prevent>
          <Variation
            v-for="(variations, type) in product.variations"
            :key="type"
            :type="type"
            :variations="variations"
            class="mt-20"/>
        </form>
      </section>

    </div>
  </main>
</template>

<script>
import Header from "@/components/Header";
import Variation from "@/components/products/Variation";

export default {
  components: {
    Header,
    Variation
  },
  data() {
    return {
      product: []
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

