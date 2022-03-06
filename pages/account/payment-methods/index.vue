<template>
  <div>
    <ResourceHeader>
      <!-- Page title -->
      <Heading tag="h1" visual="h1">
        {{ $t('account.payment_methods.titles.index') }}
      </Heading>

      <!-- Add a payment method -->
      <ButtonLinkAdd
        :route="{ name: 'account-payment-methods-create' }"
        :label="$t('button.add_payment_method')"
        class="mt-60 md:mt-0"
      />
    </ResourceHeader>

    <Card>
      <!-- Payment methods -->
      <ResourceList v-if="paymentMethods.length">
        <PaymentMethodItem
          v-for="paymentMethod in paymentMethods"
          :key="paymentMethod.id"
          :payment-method="paymentMethod"
        />
      </ResourceList>

      <!-- No payment method found -->
      <div v-else class="text-center">
        <Paragraph class="text-center mb-60">
          {{ $t('account.payment_methods.no_payment_method_found') }}
        </Paragraph>
        <ButtonLinkPrimary
          :route="{ name: 'account-payment-methods-create' }"
          icon="plus-circle"
        >
          {{ $t('button.add_payment_method') }}
        </ButtonLinkPrimary>
      </div>
    </Card>

    <!-- Confirmation modal -->
    <ConfirmationModal
      :title="$t('modals.payment_methods.delete.title')"
      :body="$t('modals.payment_methods.delete.body')"
      :button-label="$t('button.delete')"
      button-icon="trash-alt"
      icon="exclamation-circle"
      color="red"
      @confirm="destroy"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import ButtonLinkAdd from '@/components/buttons/ButtonLinkAdd'
import ButtonLinkPrimary from '@/components/buttons/ButtonLinkPrimary'
import Card from '@/components/globals/Card'
import ConfirmationModal from '@/components/modals/ConfirmationModal'
import Heading from '@/components/globals/Heading'
import Paragraph from '@/components/paragraphs/Paragraph'
import PaymentMethodItem from '@/components/payment-methods/PaymentMethodItem'
import ResourceHeader from '@/components/resources/ResourceHeader'
import ResourceList from '@/components/resources/ResourceList'

export default {
  components: {
    ButtonLinkAdd,
    ButtonLinkPrimary,
    Card,
    ConfirmationModal,
    Heading,
    Paragraph,
    PaymentMethodItem,
    ResourceHeader,
    ResourceList,
  },
  layout: 'account-management',
  middleware: ['authenticated'],
  async asyncData({ app }) {
    const paymentMethods = await app.$axios.$get('/payment-methods')

    return {
      paymentMethods: paymentMethods.data,
    }
  },
  data() {
    return {
      selectedPaymentMethod: {},
    }
  },
  head() {
    return {
      title: `${this.$t('account.payment_methods.titles.index')} | ${this.$t(
        'account.title'
      )}`,
      meta: [
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
      getResourceId: 'confirmation/getResourceId',
    }),
  },
  methods: {
    ...mapActions({
      closeModal: 'confirmation/closeModal',
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
    },
  },
}
</script>
