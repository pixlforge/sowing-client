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
    <div class="flex flex-wrap -mx-10 my-72 md:my-96">
      <div
        v-for="paymentMethod in paymentMethods"
        :key="paymentMethod.id"
        class="w-1/2 px-10"
      >
        <component
          :is="paymentMethod.card_type_slug"
          :payment-method="paymentMethod"
          :selected-payment-method="selectedPaymentMethod.id === paymentMethod.id"
          @click.native="switchPaymentMethod(paymentMethod)"
        />
      </div>
    </div>

  </div>
</template>

<script>
import AppTitle from '@/components/AppTitle'
import AppCardVisa from '@/components/payment-methods/cards/AppCardVisa'
import AppCardAmex from '@/components/payment-methods/cards/AppCardAmex'
import AppCardMasterCard from '@/components/payment-methods/cards/AppCardMasterCard'

export default {
  components: {
    AppTitle,
    visa: AppCardVisa,
    'american-express': AppCardAmex,
    mastercard: AppCardMasterCard
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
  computed: {
    defaultPaymentMethod() {
      return this.paymentMethods.find(method => method.is_default)
    }
  },
  async asyncData({ app }) {
    const paymentMethods = await app.$axios.$get('/payment-methods')

    return {
      paymentMethods: paymentMethods.data,
      title: app.head.title
    }
  },
  created() {
    if (this.paymentMethods.length) {
      this.switchPaymentMethod(this.defaultPaymentMethod)
    }
  },
  methods: {
    switchPaymentMethod(paymentMethod) {
      this.selectedPaymentMethod = paymentMethod
    }
  }
}
</script>
