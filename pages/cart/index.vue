<template>
  <main>

    <!-- Header -->
    <AppHeader
      :title="pageTitle"
      icon="shopping-cart"/>

    <!-- Page contents -->
    <AppContentSection>

      <!-- Cart Overview -->
      <div>
        <template v-if="products.length">
          <AppCartOverviewProduct
            v-for="product in products"
            :key="product.id"
            :product="product"/>
        </template>
        <div v-else>

          <AppSplash
            :title="$t('pages.cart.cart_is_empty')"
            :subtitle="$t('pages.cart.add_something')"
            class="max-w-800">
            <template slot="illustration">
              <img
                src="~assets/img/empty.svg"
                alt="Illustration of an empty box">
            </template>
          </AppSplash>

        </div>
      </div>

      <div
        v-if="products.length"
        class="text-24 font-semibold text-center mt-96">
        {{ $t("pages.cart.in_your_cart") }}
        <span class="text-green-500">
          {{ products.length }}
        </span>
        {{ $t("pages.cart.products") }}
        {{ $t("pages.cart.for") }}
        {{ subtotal.currency }}
        <span class="text-green-500">
          {{ subtotal.amount }}
        </span>
      </div>

      <!-- Checkout button -->
      <AppButtonLinkPrimary
        v-if="products.length"
        :to="localePath({ name: 'checkout' })"
        :disabled="is_empty"
        :title="$t('pages.cart.checkout')"
        icon="check-circle"
        size="large"
        class="block shadow-2xl my-72 md:my-96">
        {{ $t("pages.cart.checkout") }}
      </AppButtonLinkPrimary>
    </AppContentSection>

  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import AppSplash from '@/components/AppSplash'
import AppHeader from '@/components/headers/AppHeader'
import AppContentSection from '@/components/AppContentSection'
import AppButtonLinkPrimary from '@/components/buttons/AppButtonLinkPrimary'
import AppCartOverviewProduct from '@/components/cart/AppCartOverviewProduct'

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
    AppSplash,
    AppHeader,
    AppContentSection,
    AppButtonLinkPrimary,
    AppCartOverviewProduct
  },
  computed: {
    ...mapGetters({
      is_empty: 'cart/isEmpty',
      products: 'cart/products',
      subtotal: 'cart/subtotal',
      total: 'cart/total',
      has_changed: 'cart/hasChanged'
    }),
    pageTitle() {
      return this.$t('pages.cart.title')
    }
  },
  asyncData({ app }) {
    return {
      title: app.head.title
    }
  },
  mounted() {
    this.getCart()

    if (this.has_changed) {
      this.$toast.info(`${this.$t('toasts.cart.has_changed')}`)
    }
  },
  methods: {
    ...mapActions({
      getCart: 'cart/getCart'
    })
  }
}
</script>
