<template>
  <main>

    <!-- Header -->
    <Header>
      <template slot="icon">
        <font-awesome-icon :icon="['far', 'shopping-cart']"/>
      </template>
      <template slot="title">
        <h1 class="header__title">{{ pageTitle }}</h1>
      </template>
    </Header>

    <section class="section__container container">

      <!-- Cart Overview -->
      <div>
        <CartOverview v-if="products.length"/>
        <div
          v-else
          class="section__centered">
          <p class="title__main title--centered">
            Votre panier est vide.
          </p>
          <img
            src="~assets/img/empty.svg"
            alt="Illustration of an empty box"
            class="cart__illustration">
        </div>
      </div>

      <div
        v-if="products.length"
        class="cart__products">
        {{ $t("pages.cart.in_your_cart") }}
        <span class="cart__product-emphasis">
          {{ products.length }}
        </span>
        {{ $t("pages.cart.products") }}
        {{ $t("pages.cart.for") }}
        {{ subtotal.currency }}
        <span class="cart__product-emphasis">
          {{ subtotal.amount }}
        </span>
      </div>

      <!-- Checkout button -->
      <div class="cart__checkout-button-container">
        <nuxt-link
          v-if="products.length"
          :to="localePath({ name: 'checkout' })"
          :class="{ 'button__disabled': is_empty }"
          :disabled="is_empty"
          :title="$t('pages.cart.checkout')"
          class="button button__primary">
          <font-awesome-icon
            :icon="['far', 'check-circle']"
            class="button__icon button__icon--small"/>
          {{ $t("pages.cart.checkout") }}
        </nuxt-link>
      </div>

    </section>
  </main>
</template>

<script>
import Header from "@/components/Header";
import CartOverview from "@/components/cart/CartOverview";
import { mapGetters, mapActions } from "vuex";

export default {
  middleware: ["authenticated"],
  head() {
    return {
      title: `${this.title} | ${this.pageTitle}`
    };
  },
  components: {
    Header,
    CartOverview
  },
  async asyncData({ app }) {
    return {
      title: app.head.title
    };
  },
  computed: {
    ...mapGetters({
      is_empty: "cart/isEmpty",
      products: "cart/products",
      subtotal: "cart/subtotal",
      total: "cart/total",
      has_changed: "cart/hasChanged"
    }),
    pageTitle() {
      return this.$t("pages.cart.title");
    }
  },
  mounted() {
    this.getCart();

    if (this.has_changed) {
      this.$toast.info(`${this.$t("toasts.cart.has_changed")}`);
    }
  },
  methods: {
    ...mapActions({
      getCart: "cart/getCart"
    })
  }
};
</script>
