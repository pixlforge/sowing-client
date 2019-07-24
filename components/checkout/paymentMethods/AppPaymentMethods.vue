<template>
  <div>
    <ul class="payment-method__list">
      <li
        v-if="!paymentMethods.length"
        class="payment-method__list-item payment-method__list-item--empty">
        <p class="payment-method__empty">
          Aucun moyen de paiement n'est associé à votre compte pour le moment.<br>
          Cliquez sur le bouton pour ajouter votre première carte de crédit.
        </p>
      </li>
      <li
        v-for="method in currentPaymentMethods"
        :key="method.id"
        class="payment-method__list-item">
        <component
          :is="method.card_type_slug"
          :payment-method="method"
          :selected-payment-method="selectedPaymentMethod.id === method.id"
          @click.native="switchPaymentMethod(method)"/>
      </li>
      <li class="payment-method__list-item">
        <AppPaymentMethodCreator @payment-method:added="addPaymentMethod"/>
      </li>
    </ul>
  </div>
</template>

<script>
import AppCardVisa from '@/components/checkout/paymentMethods/cards/AppCardVisa';
import AppCardAmex from '@/components/checkout/paymentMethods/cards/AppCardAmex';
import AppCardMasterCard from '@/components/checkout/paymentMethods/cards/AppCardMasterCard';
import AppPaymentMethodCreator from '@/components/checkout/paymentMethods/AppPaymentMethodCreator';

export default {
  components: {
    visa: AppCardVisa,
    'american-express': AppCardAmex,
    mastercard: AppCardMasterCard,
    AppPaymentMethodCreator
  },
  props: {
    paymentMethods: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentPaymentMethods: this.paymentMethods,
      selectedPaymentMethod: {}
    };
  },
  computed: {
    defaultPaymentMethod() {
      return this.currentPaymentMethods.find(method => method.is_default);
    }
  },
  created() {
    if (this.paymentMethods.length) {
      this.switchPaymentMethod(this.defaultPaymentMethod);
    }
  },
  methods: {
    addPaymentMethod(method) {
      this.switchPaymentMethod(method);
      this.$emit('payment-method:added', method);
    },
    switchPaymentMethod(method) {
      this.selectedPaymentMethod = method;
      this.$emit('input', this.selectedPaymentMethod.id);
    }
  }
};
</script>
