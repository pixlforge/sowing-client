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
      <div class="rounded-lg shadow-lg flex">
        <div class="w-1/3">
          <img
            :src="imgUrl"
            :alt="imgAlt"
            class="block rounded-l-lg">
        </div>
        <div class="w-2/3 p-30">
          <form @submit.prevent>
            <Variation
              v-for="(variations, type) in product.variations"
              :key="type"
              :type="type"
              :variations="variations"
              class="mt-20"/>
          </form>
        </div>
      </div>

    </section>

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
  },
  computed: {
    imgUrl() {
      return `https://bulma.io/images/placeholders/1280x960.png`;
    },
    imgAlt() {
      return this.$t("components.product.img.alt");
    }
  }
};
</script>

