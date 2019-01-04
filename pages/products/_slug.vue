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

    <!-- Product details -->
    <section class="container py-100">
      <ProductDetails :product="product"/>
    </section>

    <!-- Streak newsletter -->
    <section>
      <StreakNewsletter/>
    </section>

  </main>
</template>

<script>
import Header from "@/components/Header";
import ProductDetails from "@/components/products/ProductDetails";
import StreakNewsletter from "@/components/streaks/StreakNewsletter";
import { mapGetters } from "vuex";

export default {
  head() {
    return {
      title: `${this.title} | ${this.product.name[this.locale]}`
    };
  },
  components: {
    Header,
    ProductDetails,
    StreakNewsletter
  },
  data() {
    return {
      product: {}
    };
  },
  async asyncData({ params, app }) {
    let res = await app.$axios.$get(`/products/${params.slug}`);

    return {
      title: app.head.title,
      product: res.data
    };
  },
  computed: {
    ...mapGetters({
      locale: "locale"
    })
  }
};
</script>
