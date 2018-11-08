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
    <div class="container pb-100">
      <p class="text-base mt-100">
        {{ product }}
      </p>
    </div>
  </main>
</template>

<script>
import Header from "@/components/Header";

export default {
  components: {
    Header
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

