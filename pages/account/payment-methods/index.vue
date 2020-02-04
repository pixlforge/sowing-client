<template>
  <div>
    <AppResourceHeader>

      <!-- Page title -->
      <Heading
        tag="h1"
        visual="h1"
      >
        {{ $t("pages.account.payment_methods.titles.index") }}
      </Heading>

      <!-- Add a payment method -->
      <AppAddButtonLink
        :route="{ name: 'account-payment-methods-create' }"
        :label="$t('buttons.add_payment_method')"
        class="mt-60 md:mt-0"
      />
    </AppResourceHeader>

    <AppCard>

      <!-- Payment methods -->
      <AppResourceList v-if="paymentMethods.length">
        <AppPaymentMethodItem
          v-for="paymentMethod in paymentMethods"
          :key="paymentMethod.id"
          :payment-method="paymentMethod"
        />
      </AppResourceList>

      <!-- No payment method found -->
      <div
        v-else
        class="text-center"
      >
        <AppParagraph class="text-center mb-60">
          {{ $t('pages.account.payment_methods.no_payment_method_found') }}
        </AppParagraph>
        <AppButtonLinkPrimary
          :route="{ name: 'account-payment-methods-create' }"
          icon="plus-circle"
        >
          {{ $t('buttons.add_payment_method') }}
        </AppButtonLinkPrimary>
      </div>
    </AppCard>

    <!-- Confirmation modal -->
    <AppConfirmationModal
      :title="$t('modals.payment_methods.delete.title')"
      :body="$t('modals.payment_methods.delete.body')"
      :button-label="$t('buttons.delete')"
      @confirm="destroy"
      button-icon="trash-alt"
      icon="exclamation-circle"
      color="red"
    />

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import AppCard from '@/components/AppCard'
import Heading from '@/components/Heading'
import AppParagraph from '@/components/paragraphs/AppParagraph'
import AppAddButtonLink from '@/components/buttons/AppAddButtonLink'
import AppResourceList from '@/components/resources/AppResourceList'
import AppResourceHeader from '@/components/resources/AppResourceHeader'
import AppConfirmationModal from '@/components/modals/AppConfirmationModal'
import AppButtonLinkPrimary from '@/components/buttons/AppButtonLinkPrimary'
import AppPaymentMethodItem from '@/components/payment-methods/AppPaymentMethodItem'

export default {
  components: {
    AppCard,
    Heading,
    AppParagraph,
    AppAddButtonLink,
    AppResourceList,
    AppResourceHeader,
    AppConfirmationModal,
    AppButtonLinkPrimary,
    AppPaymentMethodItem
  },
  middleware: ['authenticated'],
  layout: 'account-management',
  head() {
    return {
      title: `${this.$t('pages.account.payment_methods.titles.index')} | ${this.$t('pages.account.title')}`,
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
      paymentMethods: paymentMethods.data
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
