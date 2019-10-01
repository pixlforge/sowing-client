<template>
  <div>
    <component
      :is="paymentMethod.card_type_slug"
      :payment-method="paymentMethod"
      :selected-payment-method="selectedPaymentMethod.id === method.id"
      @click.native="switchPaymentMethod(method)"
    />
  </div>
</template>

<script>
import AppCardVisa from '@/components/payment-methods/cards/AppCardVisa'
import AppCardAmex from '@/components/payment-methods/cards/AppCardAmex'
import AppCardMasterCard from '@/components/payment-methods/cards/AppCardMasterCard'

export default {
  components: {
    visa: AppCardVisa,
    'american-express': AppCardAmex,
    mastercard: AppCardMasterCard
  },
  props: {
    paymentMethod: {
      type: Object,
      required: true
    }
  }
}
</script>
