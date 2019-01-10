<template>
  <div>
    <ul class="list-reset flex flex-wrap -mx-20">
      <li
        v-if="!paymentMethods.length"
        class="w-300 mx-20 flex items-center mt-40">
        <p class="text-16 text-center leading-normal">
          Aucun moyen de paiement n'est associé à votre compte pour le moment.<br>
          Cliquez sur le bouton pour ajouter votre première carte de crédit.
        </p>
      </li>
      <li
        v-for="method in currentPaymentMethods"
        :key="method.id"
        class="w-300 mx-20 mt-40">
        <component
          :is="method.card_type_slug"
          :payment-method="method"
          :selected-payment-method="selectedPaymentMethod.id === method.id"
          @click.native="switchPaymentMethod(method)"/>
      </li>
      <li class="w-300 mx-20 mt-40">
        <PaymentMethodCreator
          class="min-h-221"
          @payment-method:added="addPaymentMethod"/>
      </li>
    </ul>
  </div>
</template>

<script>
import PaymentMethodCreator from "@/components/checkout/paymentMethods/PaymentMethodCreator";
import MasterCard from "@/components/checkout/paymentMethods/cards/MasterCard";
import Visa from "@/components/checkout/paymentMethods/cards/Visa";
import Amex from "@/components/checkout/paymentMethods/cards/Amex";

export default {
  components: {
    PaymentMethodCreator,
    mastercard: MasterCard,
    visa: Visa,
    "american-express": Amex
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
      this.$emit("payment-method:added", method);
    },
    switchPaymentMethod(method) {
      this.selectedPaymentMethod = method;
      this.$emit("input", this.selectedPaymentMethod.id);
    }
  }
};
</script>
