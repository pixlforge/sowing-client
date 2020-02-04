<template>
  <div>
    <!-- eslint-disable -->
    <component
      :is="paymentMethod.card_type_slug"
      :payment-method="paymentMethod"
      :selected-payment-method="selectedPaymentMethod.id === method.id"
      @click.native="switchPaymentMethod(method)"
    />
    <!-- eslint-enable -->
  </div>
</template>

<script>
import CardVisa from '@/components/payment-methods/cards/CardVisa'
import CardAmex from '@/components/payment-methods/cards/CardAmex'
import CardMasterCard from '@/components/payment-methods/cards/CardMasterCard'

export default {
  components: {
    /* eslint-disable */
    visa: CardVisa,
    'american-express': CardAmex,
    mastercard: CardMasterCard
    /* eslint-enable */
  },
  props: {
    paymentMethod: {
      type: Object,
      required: true
    }
  }
}
</script>
