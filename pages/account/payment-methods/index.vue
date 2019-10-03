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
    <ul class="w-full rounded-lg border-2 border-gray-100 my-72 md:my-96">
      <AppPaymentMethodResource
        v-for="paymentMethod in paymentMethods"
        :key="paymentMethod.id"
        :payment-method="paymentMethod"
      />
    </ul>

    <!-- Confirmation modal -->
    <AppConfirmationModal
      :title="$t('modals.addresses.delete.title')"
      :body="$t('modals.addresses.delete.body')"
      :button-label="$t('buttons.delete')"
      button-icon="trash-alt"
      icon="exclamation-circle"
      color="red"
      @confirm="destroy"
    />

  </div>
</template>

<script>
import { mapActions } from 'vuex'

import AppTitle from '@/components/AppTitle'
import AppConfirmationModal from '@/components/modals/AppConfirmationModal'
import AppPaymentMethodResource from '@/components/payment-methods/AppPaymentMethodResource'

export default {
  components: {
    AppTitle,
    AppConfirmationModal,
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
  },
  methods: {
    ...mapActions({
      displayConfirmationModal: 'confirmation/displayConfirmationModal'
    }),
    async destroy() {
      await console.log('Destroy payment method')
      this.displayConfirmationModal(false)
    }
  }
}
</script>
