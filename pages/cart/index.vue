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

      <!-- Cart Overview -->
      <CartOverview v-if="products.length"/>

      <div
        v-else
        class="flex flex-col items-center py-40">
        <p class="text-28 text-green-darkest font-semibold">Votre panier est vide.</p>

        <img
          src="~assets/img/empty.svg"
          alt="Illustration of an empty box"
          class="block w-1/3 mt-100">
      </div>

      <!-- Checkout button -->
      <div
        v-if="products.length"
        class="flex justify-center">
        <button
          :class="{ 'btn-disabled': is_empty }"
          :disabled="is_empty"
          role="button"
          title="Checkout"
          class="btn btn-primary">
          <font-awesome-icon
            :icon="['far', 'check-circle']"
            class="text-white mr-5"/>
          Commander
        </button>
      </div>
    </section>

  </main>
</template>

<script>
import Header from "@/components/Header";
import CartOverview from "@/components/cart/CartOverview";
import { mapGetters } from "vuex";

export default {
  components: {
    Header,
    CartOverview
  },
  computed: {
    ...mapGetters({
      is_empty: "cart/isEmpty",
      products: "cart/products"
    }),
    pageTitle() {
      return this.$t("pages.cart.title");
    }
  }
};
</script>

