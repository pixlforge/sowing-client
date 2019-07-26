<template>
  <main>

    <!-- Header -->
    <AppHeader
      :title="pageTitle"
      icon="cash-register"/>

    <AppContentSection>
      <div class="checkout__section">
        <div class="checkout__content">

          <!-- Payment methods -->
          <AppTitle
            semantic="h2"
            visual="h3">
            {{ $t("pages.checkout.payment") }}
          </AppTitle>

          <AppPaymentMethods
            v-model="form.payment_method_id"
            :payment-methods="paymentMethods"
            class="mb-72 lg:mb-132 xl:mb-196"
            @payment-method:added="addPaymentMethod"/>

          <!-- Cart Overview -->
          <AppTitle
            semantic="h2"
            visual="h3">
            {{ $t("pages.cart.title") }}
          </AppTitle>

          <AppCartOverviewProduct
            v-for="product in products"
            :key="product.id"
            :product="product"/>
        </div>

        <!-- Sidebar -->
        <div class="checkout__sidebar">

          <!-- Shipping address -->
          <AppShippingAddress
            v-model="form.address_id"
            :addresses="addresses"/>

          <!-- Shipping methods dropdown -->
          <AppShippingMethods
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
          <AppButtonPrimary
            v-if="products.length && !addressManagersVisible"
            :disabled="is_empty || submitting"
            :title="$t('pages.checkout.order')"
            icon="check-circle"
            class="shadow-xl mt-72"
            @click.native="order">
            {{ $t("pages.checkout.order") }}
          </AppButtonPrimary>
        </div>
      </div>
    </AppContentSection>

  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import AppTitle from '@/components/AppTitle'
import AppHeader from '@/components/headers/AppHeader'
import AppContentSection from '@/components/AppContentSection'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'
import AppCartOverviewProduct from '@/components/cart/AppCartOverviewProduct'
import AppShippingMethods from '@/components/checkout/addresses/AppShippingMethods'
import AppShippingAddress from '@/components/checkout/addresses/AppShippingAddress'
import AppPaymentMethods from '@/components/checkout/paymentMethods/AppPaymentMethods'

export default {
  middleware: ['authenticated'],
  head() {
    return {
      title: `${this.pageTitle} | ${this.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex'
        }
      ]
    }
  },
  components: {
    AppTitle,
    AppHeader,
    AppContentSection,
    AppButtonPrimary,
    AppCartOverviewProduct,
    AppShippingMethods,
    AppShippingAddress,
    AppPaymentMethods
  },
  data() {
    return {
      form: {
        address_id: '',
        payment_method_id: ''
      },
      errors: {},
      addresses: [],
      shippingMethods: [],
      paymentMethods: [],
      submitting: false
    }
  },
  computed: {
    ...mapGetters({
      is_empty: 'cart/isEmpty',
      products: 'cart/products',
      subtotal: 'cart/subtotal',
      total: 'cart/total',
      has_changed: 'cart/hasChanged',
      shippingMethod: 'cart/shippingMethod',
      addressManagersVisible: 'checkout/addressManagersVisible'
    }),
    pageTitle() {
      return this.$t('pages.checkout.title')
    },
    shippingMethodId: {
      get() {
        return this.shippingMethod ? this.shippingMethod.id : ''
      },
      set(shippingMethodId) {
        this.setShippingMethod(
          this.shippingMethods.find(method => method.id === parseInt(shippingMethodId))
        )
      }
    }
  },
  watch: {
    'form.address_id'(addressId) {
      this.getShippingMethodsForAddress(addressId).then(() => {
        this.setShippingMethod(this.shippingMethods[0])
      })
    },
    shippingMethodId() {
      this.getCart()
    }
  },
  async asyncData({ app }) {
    const addresses = await app.$axios.$get('/addresses')
    const paymentMethods = await app.$axios.$get('/payment-methods')

    return {
      title: app.head.title,
      addresses: addresses.data,
      paymentMethods: paymentMethods.data
    }
  },
  methods: {
    ...mapActions({
      getCart: 'cart/getCart',
      setShippingMethod: 'cart/setShippingMethod',
      flash: 'alert/flash'
    }),
    async order() {
      this.submitting = true
      try {
        await this.$axios.$post(`/orders`, {
          ...this.form,
          shipping_method_id: this.shippingMethodId
        })
        this.$toast.success('It worked')
        this.$router.push(this.localePath({ name: 'orders' }))
      } catch (e) {
        this.flash({
          type: 'danger',
          message: e.response.data.message
        })
        this.$toast.error(e.response.data.message)
      }
      this.submitting = false
      this.getCart()
    },
    async getShippingMethodsForAddress(addressId) {
      try {
        const res = await this.$axios.$get(`/addresses/${addressId}/shipping`)
        this.shippingMethods = res.data
        return res
      } catch (e) {
        this.$toast.error('toasts.general_error')
      }
    },
    addPaymentMethod(method) {
      this.paymentMethods.push(method)
    }
  }
}
</script>
