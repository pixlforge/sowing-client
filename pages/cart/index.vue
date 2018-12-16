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

    <section class="container pt-60 pb-100">
      <div class="flex">

        <!-- Cart Overview -->
        <div class="w-3/4 mr-50">
          <CartOverview v-if="products.length"/>
          <div
            v-else
            class="flex flex-col items-center">
            <p class="text-30 text-green-darkest font-semibold">Votre panier est vide.</p>
            <img
              src="~assets/img/empty.svg"
              alt="Illustration of an empty box"
              class="block w-1/3 mt-100">
          </div>
        </div>

        <!-- Sidebar -->
        <div class="w-1/4 bg-green-lightest rounded-lg flex flex-col justify-between p-30 mt-40">

          <div>
            <div class="w-full text-grey-lighter text-14 flex justify-between">
              <div>Sous-total</div>
              <div>{{ subtotal.currency }} {{ subtotal.amount }}</div>
            </div>

            <div class="w-full text-grey-lighter text-14 flex justify-between mt-5">
              <div>Livraison</div>
              <div>CHF 0.00</div>
            </div>

            <div class="w-full text-20 uppercase flex justify-between mt-15">
              <div class="font-extrabold">Total</div>
              <div class="font-semibold">{{ total.currency }} {{ total.amount }}</div>
            </div>
          </div>

          <!-- Checkout button -->
          <button
            v-if="products.length"
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

      </div>
    </section>
  </main>
</template>

<script>
import Header from "@/components/Header";
import CartOverview from "@/components/cart/CartOverview";
import { mapGetters, mapActions } from "vuex";

export default {
  head() {
    return {
      title: `${this.title} | ${this.$t("pages.cart.title")}`
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

