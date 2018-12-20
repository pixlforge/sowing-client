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
          <h2 class="text-36 text-green-darkest mt-40">{{ $t("pages.checkout.payment") }}</h2>
          
          <!-- Cart Overview -->
          <h2 class="text-36 text-green-darkest mt-100">{{ $t("pages.cart.title") }}</h2>
          <CartOverview/>
        </div>

        <!-- Sidebar -->
        <div class="w-1/4 bg-green-lightest rounded-lg flex flex-col justify-start p-30 mt-40">

          <!-- Content -->
          <div>
            <ShippingAddress
              v-model="form.address_id"
              :addresses="addresses"/>

            <ShippingMethods
              v-if="!addressManagersVisible"
              v-model.number="form.shipping_method_id"
              :methods="shippingMethods"
              :errors="errors.shipping_method_id"
              class="mt-40"/>

            <template v-if="!addressManagersVisible">
              <div class="mt-40">
                <div class="w-full text-grey-lighter text-14 flex justify-between">
                  <div>{{ $t("pages.checkout.subtotal") }}</div>
                  <div>{{ subtotal.currency }} {{ subtotal.amount }}</div>
                </div>

                <div class="w-full text-grey-lighter text-14 flex justify-between mt-5">
                  <div>{{ $t("pages.checkout.delivery") }}</div>
                  <div>CHF 0.00</div>
                </div>

                <div class="w-full text-20 uppercase flex justify-between mt-15">
                  <div class="font-bold">{{ $t("pages.checkout.total") }}</div>
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
            {{ $t("pages.checkout.order") }}
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
import ShippingMethods from "@/components/checkout/addresses/ShippingMethods";
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
    ShippingAddress,
    ShippingMethods
  },
  data() {
    return {
      form: {
        address_id: "",
        shipping_method_id: ""
      },
      errors: {},
      addresses: [],
      shippingMethods: []
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
  },
  watch: {
    "form.address_id"(addressId) {
      this.getShippingMethodsForAddress(addressId);
    }
  },
  methods: {
    async getShippingMethodsForAddress(addressId) {
      try {
        let res = await this.$axios.$get(`/addresses/${addressId}/shipping`);
        this.shippingMethods = res.data;
      } catch (e) {
        this.$toast.error("toasts.general_error");
      }
    }
  }
};
</script>
