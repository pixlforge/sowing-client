<template>
  <div>
    <ResourceHeader>

      <!-- Page title -->
      <Heading
        tag="h1"
        visual="h1"
      >
        {{ $t("account.payment_methods.titles.index") }}
      </Heading>

      <!-- Add a payment method -->
      <AddButtonLink
        :route="{ name: 'account-payment-methods-create' }"
        :label="$t('buttons.add_payment_method')"
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
      <div
        v-else
        class="text-center"
      >
        <Paragraph class="text-center mb-60">
          {{ $t('account.payment_methods.no_payment_method_found') }}
        </Paragraph>
        <ButtonLinkPrimary
          :route="{ name: 'account-payment-methods-create' }"
          icon="plus-circle"
        >
          {{ $t('buttons.add_payment_method') }}
        </ButtonLinkPrimary>
      </div>
    </Card>

    <!-- Confirmation modal -->
    <ConfirmationModal
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

import Card from '@/components/globals/Card'
import Heading from '@/components/globals/Heading'
import Paragraph from '@/components/paragraphs/Paragraph'
import AddButtonLink from '@/components/buttons/AddButtonLink'
import ResourceList from '@/components/resources/ResourceList'
import ResourceHeader from '@/components/resources/ResourceHeader'
import ConfirmationModal from '@/components/modals/ConfirmationModal'
import ButtonLinkPrimary from '@/components/buttons/ButtonLinkPrimary'
import PaymentMethodItem from '@/components/payment-methods/PaymentMethodItem'

export default {
  components: {
    Card,
    Heading,
    Paragraph,
    AddButtonLink,
    ResourceList,
    ResourceHeader,
    ConfirmationModal,
    ButtonLinkPrimary,
    PaymentMethodItem
  },
  middleware: ['authenticated'],
  layout: 'account-management',
  head() {
    return {
      title: `${this.$t('account.payment_methods.titles.index')} | ${this.$t('account.title')}`,
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
