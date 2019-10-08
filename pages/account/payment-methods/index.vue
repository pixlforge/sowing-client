<template>
  <div>
    <div class="flex flex-col md:flex-row justify-between items-center md:items-baseline">

      <!-- Page title -->
      <AppTitle
        semantic="h1"
        visual="h1"
      >
        {{ $t("pages.account.payment_methods.titles.index") }}
      </AppTitle>

      <!-- Add a payment method -->
      <AppAddButtonLink
        :route="{ name: 'account-payment-methods-create' }"
        :label="$t('buttons.add_payment_method')"
        class="mt-60 md:mt-0"
      />
    </div>

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

    <!-- Confirmation modal -->
    <AppConfirmationModal
      :title="$t('modals.payment_methods.delete.title')"
      :body="$t('modals.payment_methods.delete.body')"
      :button-label="$t('buttons.delete')"
      button-icon="trash-alt"
      icon="exclamation-circle"
      color="red"
      @confirm="destroy"
    />

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import AppTitle from '@/components/AppTitle'
import AppParagraph from '@/components/paragraphs/AppParagraph'
import AppAddButtonLink from '@/components/buttons/AppAddButtonLink'
import AppConfirmationModal from '@/components/modals/AppConfirmationModal'
import AppButtonLinkPrimary from '@/components/buttons/AppButtonLinkPrimary'
import AppPaymentMethodResource from '@/components/payment-methods/AppPaymentMethodResource'

export default {
  components: {
    AppTitle,
    AppParagraph,
    AppAddButtonLink,
    AppConfirmationModal,
    AppButtonLinkPrimary,
    AppPaymentMethodResource
  },
  middleware: ['authenticated'],
  layout: 'account-management',
  head() {
    return {
      title: `${this.$t('pages.account.payment_methods.titles.index')} | ${this.$t('pages.account.title')} | ${this.title}`,
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
    ...mapGetters({
      getResourceId: 'confirmation/getResourceId'
    })
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
      closeModal: 'confirmation/closeModal'
    }),
    async destroy() {
      try {
        await this.$axios.$delete(`/payment-methods/${this.getResourceId}`)
        await this.getPaymentMethods()
        this.$toasted.success(this.$t('toasts.payment_methods.deleted'))
      } catch (e) {
        this.$toasted.error(this.$t('toasts.general_error'))
      }
      this.closeModal()
    },
    async getPaymentMethods() {
      const res = await this.$axios.$get('/payment-methods')
      this.paymentMethods = res.data
    }
  }
}
</script>
