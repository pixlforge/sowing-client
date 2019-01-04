<template>
  <div>
    <ul class="list-reset flex flex-wrap -mx-20">
      <li
        v-for="method in currentPaymentMethods"
        :key="method.id"
        class="w-300 mx-20 mt-40">
        <component
          :is="method.card_type"
          :payment-method="method"
          :selected-payment-method="selectedPaymentMethod.id === method.id"
          @click.native="switchPaymentMethod(method)"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Mastercard from "@/components/checkout/paymentMethods/cards/Mastercard";
import Visa from "@/components/checkout/paymentMethods/cards/Visa";
import Amex from "@/components/checkout/paymentMethods/cards/Amex";

export default {
  components: {
    mastercard: Mastercard,
    visa: Visa,
    amex: Amex
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
    switchPaymentMethod(method) {
      this.selectedPaymentMethod = method;
      this.$emit("input", this.selectedPaymentMethod.id);
    }
  }
};
</script>
