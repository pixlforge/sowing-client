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
    <ul
      v-if="paymentMethods.length"
      class="w-full rounded-lg border-2 border-gray-100 my-72 md:my-96"
    >
      <AppPaymentMethodResource
        v-for="paymentMethod in paymentMethods"
        :key="paymentMethod.id"
        :payment-method="paymentMethod"
      />
    </ul>

    <div
      v-else
      class="text-center mt-60"
    >
      <AppParagraph class="text-center mb-60">
        {{ $t('pages.account.payment_methods.no_payment_method_found') }}
      </AppParagraph>
      <AppButtonLinkPrimary
        :to="{ name: 'account-payment-methods' }"
        icon="plus-circle"
      >
        {{ $t('buttons.add_payment_method') }}
      </AppButtonLinkPrimary>
    </div>

  </div>
</template>

<script>
import AppTitle from '@/components/AppTitle'
import AppParagraph from '@/components/paragraphs/AppParagraph'
import AppButtonLinkPrimary from '@/components/buttons/AppButtonLinkPrimary'
import AppPaymentMethodResource from '@/components/payment-methods/AppPaymentMethodResource'

export default {
  components: {
    AppTitle,
    AppParagraph,
    AppButtonLinkPrimary,
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
