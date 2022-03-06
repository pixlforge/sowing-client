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
import CardAmex from '@/components/payment-methods/cards/CardAmex'
import CardMasterCard from '@/components/payment-methods/cards/CardMasterCard'
import CardVisa from '@/components/payment-methods/cards/CardVisa'

export default {
  components: {
    /* eslint-disable */
    'american-express': CardAmex,
    mastercard: CardMasterCard,
    visa: CardVisa,
    /* eslint-enable */
  },
  props: {
    paymentMethod: {
      type: Object,
      required: true,
    },
  },
}
</script>
