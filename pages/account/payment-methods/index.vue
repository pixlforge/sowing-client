<template>
  <div>

    <!-- Page title -->
    <AppTitle
      semantic="h1"
      visual="h1"
    >
      {{ $t("pages.account.payment_methods.title") }}
    </AppTitle>

    <!-- Payment methods -->
    <ul class="w-full rounded-lg border-2 border-gray-100 overflow-hidden my-72 md:my-96">
      <AppPaymentMethodResource
        v-for="paymentMethod in paymentMethods"
        :key="paymentMethod.id"
        :payment-method="paymentMethod"
      />
    </ul>

  </div>
</template>

<script>
import AppTitle from '@/components/AppTitle'
import AppPaymentMethodResource from '@/components/payment-methods/AppPaymentMethodResource'

export default {
  components: {
    AppTitle,
    AppPaymentMethodResource
  },
  middleware: ['authenticated'],
  layout: 'account-management',
  head() {
    return {
      title: `${this.$t('pages.account.payment_methods.title')} | ${this.$t('pages.account.title')} | ${this.title}`,
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex'
        }
      ]
    }
  },
  data() {
    return {
      selectedPaymentMethod: {}
    }
  },
  async asyncData({ app }) {
    const paymentMethods = await app.$axios.$get('/payment-methods')

    return {
      paymentMethods: paymentMethods.data,
      title: app.head.title
    }
  }
}
</script>
