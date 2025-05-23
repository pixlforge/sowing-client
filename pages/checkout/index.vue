<template>
  <main>
    <!-- Header -->
    <Header :title="pageTitle" icon="cash-register" />

    <ContentSection>
      <div class="flex">
        <div class="w-3/4 mr-48">
          <!-- Payment methods -->
          <Heading tag="h2" visual="h3">
            {{ $t('checkout.payment') }}
          </Heading>

          <PaymentMethods
            v-model="form.payment_method_id"
            :payment-methods="paymentMethods"
            class="mb-72 lg:mb-132 xl:mb-196"
            @payment-method:added="addPaymentMethod"
          />

          <!-- Cart Overview -->
          <Heading tag="h2" visual="h3">
            {{ $t('cart.title') }}
          </Heading>

          <CartOverviewProduct
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>

        <!-- Sidebar -->
        <div
          class="w-1/4 bg-green-200 rounded-lg flex flex-col justify-start p-30 mt-48"
        >
          <!-- Shipping address -->
          <ShippingAddress v-model="form.address_id" :addresses="addresses" />

          <!-- Shipping methods dropdown -->
          <ShippingMethods
            v-if="!addressManagersVisible"
            v-model="shippingMethodId"
            :methods="shippingMethods"
            :errors="errors.shipping_method_id"
            class="mt-48"
          />

          <!-- Price block -->
          <div v-if="!addressManagersVisible" class="mt-48">
            <!-- Subtotal -->
            <div class="w-full text-gray-300 text-14 flex justify-between">
              <div>
                {{ $t('checkout.subtotal') }}
              </div>
              <div>
                {{ subtotal.formatted }}
              </div>
            </div>

            <!-- Shipping -->
            <div class="w-full text-gray-300 text-14 flex justify-between mt-5">
              <div>{{ $t('checkout.delivery') }}</div>
              <div v-if="shippingMethod">
                {{ shippingMethod.price.currency }}
                {{ shippingMethod.price.amount }}
              </div>
            </div>

            <!-- Total -->
            <div
              class="w-full text-20 font-bold uppercase flex justify-between mt-16"
            >
              <div>
                {{ $t('checkout.total') }}
              </div>
              <div>
                {{ total.formatted }}
              </div>
            </div>
          </div>

          <!-- Checkout button -->
          <ButtonPrimary
            v-if="product.length && !addressManagersVisible"
            :disabled="is_empty || submitting"
            :title="$t('checkout.order')"
            icon="check-circle"
            class="shadow-xl mt-72"
            @click.native="order"
          >
            {{ $t('checkout.order') }}
          </ButtonPrimary>
        </div>
      </div>
    </ContentSection>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import CartOverviewProduct from '@/components/cart/CartOverviewProduct'
import ContentSection from '@/components/globals/ContentSection'
import Header from '@/components/headers/Header'
import Heading from '@/components/globals/Heading'
import PaymentMethods from '@/components/payment-methods/PaymentMethods'
import ShippingMethods from '@/components/addresses/ShippingMethods'
import ShippingAddress from '@/components/addresses/ShippingAddress'

export default {
  components: {
    ButtonPrimary,
    CartOverviewProduct,
    ContentSection,
    Header,
    Heading,
    PaymentMethods,
    ShippingMethods,
    ShippingAddress,
  },
  middleware: ['authenticated'],
  async asyncData({ app }) {
    const addresses = await app.$axios.$get('/addresses')
    const paymentMethods = await app.$axios.$get('/payment-methods')

    return {
      title: app.head.title,
      addresses: addresses.data,
      paymentMethods: paymentMethods.data,
    }
  },
  data() {
    return {
      form: {
        address_id: '',
        payment_method_id: '',
      },
      errors: {},
      addresses: [],
      shippingMethods: [],
      paymentMethods: [],
      submitting: false,
    }
  },
  head() {
    return {
      title: this.pageTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex',
        },
      ],
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
      addressManagersVisible: 'checkout/addressManagersVisible',
    }),
    pageTitle() {
      return this.$t('checkout.title')
    },
    shippingMethodId: {
      get() {
        return this.shippingMethod ? this.shippingMethod.id : ''
      },
      set(shippingMethodId) {
        this.setShippingMethod(
          this.shippingMethods.find(
            (method) => method.id === parseInt(shippingMethodId)
          )
        )
      },
    },
  },
  watch: {
    'form.address_id'(addressId) {
      this.getShippingMethodsForAddress(addressId).then(() => {
        this.setShippingMethod(this.shippingMethods[0])
      })
    },
    shippingMethodId() {
      this.getCart()
    },
  },
  methods: {
    ...mapActions({
      getCart: 'cart/getCart',
      setShippingMethod: 'cart/setShippingMethod',
      flash: 'alert/flash',
    }),
    async order() {
      this.submitting = true
      try {
        await this.$axios.$post('/orders', {
          ...this.form,
          shipping_method_id: this.shippingMethodId,
        })
        this.$toast.success('It worked')
        this.$router.push({ name: 'orders' })
      } catch (e) {
        this.flash({
          type: 'danger',
          message: e.response.data.message,
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
    },
  },
}
</script>
