<template>
  <main>
    
    <!-- Header -->
    <Header>
      <template slot="icon">
        <font-awesome-icon :icon="['far', 'cash-register']"/>
      </template>
      <template slot="title">
        <h1 class="header__title">{{ pageTitle }}</h1>
      </template>
    </Header>

    <section class="section__container container">
      <div class="checkout__section">
        <div class="checkout__content">
          
          <!-- Payment methods -->
          <h2 class="checkout__payment-methods">
            {{ $t("pages.checkout.payment") }}
          </h2>
          <PaymentMethods
            :payment-methods="paymentMethods"
            v-model="form.payment_method_id"
            @payment-method:added="addPaymentMethod"/>
          
          <!-- Cart Overview -->
          <h2 class="checkout__cart-overview">
            {{ $t("pages.cart.title") }}
          </h2>
          <CartOverview/>
        </div>

        <!-- Sidebar -->
        <div class="checkout__sidebar">

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
            class="mt-48"/>

          <!-- Price block -->
          <div
            v-if="!addressManagersVisible"
            class="checkout__price-container">

            <!-- Subtotal -->
            <div class="checkout__subtotal">
              <div>
                {{ $t("pages.checkout.subtotal") }}
              </div>
              <div>
                {{ subtotal.currency }} {{ subtotal.amount }}
              </div>
            </div>

            <!-- Shipping -->
            <div class="checkout__shipping">
              <div>{{ $t("pages.checkout.delivery") }}</div>
              <div v-if="shippingMethod">
                {{ shippingMethod.price.currency }} {{ shippingMethod.price.amount }}
              </div>
            </div>

            <!-- Total -->
            <div class="checkout__total">
              <div>
                {{ $t("pages.checkout.total") }}
              </div>
              <div>
                {{ total.currency }} {{ total.amount }}
              </div>
            </div>
          </div>

          <!-- Checkout button -->
          <button
            v-if="products.length && !addressManagersVisible"
            :class="{ 'button__disabled': is_empty || submitting }"
            :disabled="is_empty || submitting"
            :title="$t('pages.checkout.order')"
            class="button button__primary button--spaced"
            @click.prevent="order">
            <font-awesome-icon
              :icon="['far', 'check-circle']"
              class="button__icon button__icon--small"/>
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
  middleware: ["authenticated"],
  head() {
    return {
      title: `${this.pageTitle} | ${this.title}`
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
