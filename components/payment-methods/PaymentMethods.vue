<template>
  <div>
    <ul class="flex flex-wrap -mx-20">
      <li
        v-if="!paymentMethods.length"
        class="w-1/2 flex items-center px-20 mt-48"
      >
        <p class="text-16 text-center leading-relaxed">
          Aucun moyen de paiement n'est associé à votre compte pour le
          moment.<br />
          Cliquez sur le bouton pour ajouter votre première carte de crédit.
        </p>
      </li>
      <li
        v-for="method in currentPaymentMethods"
        :key="method.id"
        class="w-1/2 px-20 mt-48"
      >
        <!-- eslint-disable -->
        <component
          :is="method.card_type_slug"
          :payment-method="method"
          :selected-payment-method="selectedPaymentMethod.id === method.id"
          @click.native="switchPaymentMethod(method)"
        />
        <!-- eslint-enable -->
      </li>
      <li class="w-1/2 px-20 mt-48">
        <PaymentMethodCreator @payment-method:added="addPaymentMethod" />
      </li>
    </ul>
  </div>
</template>

<script>
import CardAmex from '@/components/payment-methods/cards/CardAmex'
import CardMasterCard from '@/components/payment-methods/cards/CardMasterCard'
import CardVisa from '@/components/payment-methods/cards/CardVisa'
import PaymentMethodCreator from '@/components/payment-methods/PaymentMethodCreator'

export default {
  components: {
    /* eslint-disable */
    'american-express': CardAmex,
    mastercard: CardMasterCard,
    visa: CardVisa,
    PaymentMethodCreator,
    /* eslint-enable */
  },
  props: {
    paymentMethods: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentPaymentMethods: this.paymentMethods,
      selectedPaymentMethod: {},
    }
  },
  computed: {
    defaultPaymentMethod() {
      return this.currentPaymentMethods.find((method) => method.is_default)
    },
  },
  created() {
    if (this.paymentMethods.length) {
      this.switchPaymentMethod(this.defaultPaymentMethod)
    }
  },
  methods: {
    addPaymentMethod(method) {
      this.switchPaymentMethod(method)
      this.$emit('payment-method:added', method)
    },
    switchPaymentMethod(method) {
      this.selectedPaymentMethod = method
      this.$emit('input', this.selectedPaymentMethod.id)
    },
  },
}
</script>
