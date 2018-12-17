<template>
  <main>
    
    <!-- Header -->
    <Header>
      <template slot="icon">
        <font-awesome-icon :icon="['far', 'cash-register']"/>
      </template>
      <template slot="title">
        <h1 class="header-title">{{ pageTitle }}</h1>
      </template>
    </Header>

    <section class="container pt-60 pb-100">
      <div class="flex">

        <!-- Details -->
        <div class="w-3/4 mr-50">
          <h2 class="text-36 text-green-darkest mt-40">Paiement</h2>
          
          <!-- Cart Overview -->
          <h2 class="text-36 text-green-darkest mt-100">Mon panier</h2>
          <CartOverview/>
        </div>

        <!-- Sidebar -->
        <div class="w-1/4 bg-green-lightest rounded-lg flex flex-col justify-start p-30 mt-40">

          <!-- Content -->
          <div>
            <ShippingAddress
              :addresses="addresses"/>

            <template v-if="!addressManagersVisible">
              <div class="mt-40">
                <h5 class="text-20 text-green-darkest">Méthode de livraison</h5>
              </div>
            </template>

            <template v-if="!addressManagersVisible">
              <div class="mt-40">
                <div class="w-full text-grey-lighter text-14 flex justify-between">
                  <div>Sous-total</div>
                  <div>{{ subtotal.currency }} {{ subtotal.amount }}</div>
                </div>

                <div class="w-full text-grey-lighter text-14 flex justify-between mt-5">
                  <div>Livraison</div>
                  <div>CHF 0.00</div>
                </div>

                <div class="w-full text-20 uppercase flex justify-between mt-15">
                  <div class="font-bold">Total</div>
                  <div class="font-bold">{{ total.currency }} {{ total.amount }}</div>
                </div>
              </div>
            </template>
          </div>

          <!-- Checkout button -->
          <button
            v-if="products.length && !addressManagersVisible"
            :class="{ 'btn-disabled': is_empty }"
            :disabled="is_empty"
            role="button"
            title="Order"
            class="btn btn-primary mt-40">
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
import ShippingAddress from "@/components/checkout/addresses/ShippingAddress";
import { mapGetters, mapActions } from "vuex";

export default {
  head() {
    return {
      title: `${this.title} | ${this.pageTitle}`
    };
  },
  components: {
    Header,
    CartOverview,
    ShippingAddress
  },
  transition: {
    name: "fade",
    mode: "out-in"
  },
  data() {
    return {
      addresses: []
    };
  },
  async asyncData({ app }) {
    let addresses = await app.$axios.$get(`/addresses`);
    return {
      title: app.head.title,
      addresses: addresses.data
    };
  },
  computed: {
    ...mapGetters({
      is_empty: "cart/isEmpty",
      products: "cart/products",
      subtotal: "cart/subtotal",
      total: "cart/total",
      has_changed: "cart/hasChanged",
      addressManagersVisible: "checkout/addressManagersVisible"
    }),
    pageTitle() {
      return this.$t("pages.checkout.title");
    }
  }
};
</script>
