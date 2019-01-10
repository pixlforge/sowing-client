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
        <div class="w-3/4 mr-50">
          
          <!-- Payment methods -->
          <h2 class="text-36 text-green-darkest mt-40">{{ $t("pages.checkout.payment") }}</h2>
          <PaymentMethods
            :payment-methods="paymentMethods"
            v-model="form.payment_method_id"
            @payment-method:added="addPaymentMethod"/>
          
          <!-- Cart Overview -->
          <h2 class="text-36 text-green-darkest mt-100">{{ $t("pages.cart.title") }}</h2>
          <CartOverview/>
        </div>

        <!-- Sidebar -->
        <div class="w-1/4 bg-green-lightest rounded-lg flex flex-col justify-start p-30 mt-40">

          <!-- Shipping address -->
          <ShippingAddress
            v-model="form.address_id"
            :addresses="addresses"/>

          <!-- Shipping methods dropdown -->
          <ShippingMethods
            v-if="!addressManagersVisible"
            v-model="shippingMethodId"
            :methods="shippingMethods"
            :errors="errors.shipping_method_id"
            class="mt-40"/>

          <!-- Price block -->
          <div
            v-if="!addressManagersVisible"
            class="mt-40">

            <!-- Subtotal -->
            <div class="w-full text-grey-lighter text-14 flex justify-between">
              <div>{{ $t("pages.checkout.subtotal") }}</div>
              <div>{{ subtotal.currency }} {{ subtotal.amount }}</div>
            </div>

            <!-- Shipping -->
            <div class="w-full text-grey-lighter text-14 flex justify-between mt-5">
              <div>{{ $t("pages.checkout.delivery") }}</div>
              <div v-if="shippingMethod">{{ shippingMethod.price.currency }} {{ shippingMethod.price.amount }}</div>
            </div>

            <!-- Total -->
            <div class="w-full text-20 uppercase flex justify-between mt-15">
              <div class="font-bold">{{ $t("pages.checkout.total") }}</div>
              <div class="font-bold">{{ total.currency }} {{ total.amount }}</div>
            </div>
          </div>

          <!-- Checkout button -->
          <button
            v-if="products.length && !addressManagersVisible"
            :class="{ 'btn-disabled': is_empty || submitting }"
            :disabled="is_empty || submitting"
            :title="$t('pages.checkout.order')"
            class="btn btn-primary mt-40"
            @click.prevent="order">
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
import PaymentMethods from "@/components/checkout/paymentMethods/PaymentMethods";
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
    ShippingMethods,
    PaymentMethods
  },
  data() {
    return {
      form: {
        address_id: "",
        payment_method_id: ""
      },
      errors: {},
      addresses: [],
      shippingMethods: [],
      paymentMethods: [],
      submitting: false
    };
  },
  async asyncData({ app }) {
    let addresses = await app.$axios.$get("/addresses");
    let paymentMethods = await app.$axios.$get("/payment-methods");
    return {
      title: app.head.title,
      addresses: addresses.data,
      paymentMethods: paymentMethods.data
    };
  },
  computed: {
    ...mapGetters({
      is_empty: "cart/isEmpty",
      products: "cart/products",
      subtotal: "cart/subtotal",
      total: "cart/total",
      has_changed: "cart/hasChanged",
      shippingMethod: "cart/shippingMethod",
      addressManagersVisible: "checkout/addressManagersVisible"
    }),
    pageTitle() {
      return this.$t("pages.checkout.title");
    },
    shippingMethodId: {
      get() {
        return this.shippingMethod ? this.shippingMethod.id : "";
      },
      set(shippingMethodId) {
        this.setShippingMethod(
          this.shippingMethods.find(method => method.id == shippingMethodId)
        );
      }
    }
  },
  watch: {
    "form.address_id"(addressId) {
      this.getShippingMethodsForAddress(addressId).then(() => {
        this.setShippingMethod(this.shippingMethods[0]);
      });
    },
    shippingMethodId() {
      this.getCart();
    }
  },
  methods: {
    ...mapActions({
      getCart: "cart/getCart",
      setShippingMethod: "cart/setShippingMethod",
      flash: "alert/flash"
    }),
    async order() {
      this.submitting = true;
      try {
        let res = await this.$axios.$post(`/orders`, {
          ...this.form,
          shipping_method_id: this.shippingMethodId
        });
        this.$toast.success("It worked");
        this.$router.push(this.localePath({ name: "orders" }));
      } catch (e) {
        this.flash({
          type: "danger",
          message: e.response.data.message
        });
        this.$toast.error(e.response.data.message);
      }
      this.submitting = false;
      this.getCart();
    },
    async getShippingMethodsForAddress(addressId) {
      try {
        let res = await this.$axios.$get(`/addresses/${addressId}/shipping`);
        this.shippingMethods = res.data;
        return res;
      } catch (e) {
        this.$toast.error("toasts.general_error");
      }
    },
    addPaymentMethod(method) {
      this.paymentMethods.push(method);
    }
  }
};
</script>
