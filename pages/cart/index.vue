<template>
  <main>

    <!-- Header -->
    <Header>
      <template slot="icon">
        <font-awesome-icon :icon="['far', 'shopping-cart']"/>
      </template>
      <template slot="title">
        <h1 class="header-title">{{ pageTitle }}</h1>
      </template>
    </Header>

    <section class="container py-60">
      <CartOverview/>
    </section>

  </main>
</template>

<script>
import Header from "@/components/Header";
import CartOverview from "@/components/cart/CartOverview";

export default {
  components: {
    Header,
    CartOverview
  },
  computed: {
    pageTitle() {
      return this.$t("pages.cart.title");
    }
  }
};
</script>

