<template>
  <div
    :class="{ 'credit-card__container--selected': selectedPaymentMethod }"
    class="credit-card__container">
    <font-awesome-icon
      :icon="['fab', 'cc-visa']"
      :class="{ 'credit-card__icon--selected': selectedPaymentMethod }"
      class="credit-card__icon"/>
    <h5
      :class="{ 'credit-card__title--selected': selectedPaymentMethod }"
      class="credit-card__title">
      Visa
    </h5>
    <p
      :class="{ 'credit-card__last-four--selected': selectedPaymentMethod }"
      class="credit-card__last-four">
      {{ $t("credit_cards.ending_in") }} {{ paymentMethod.last_four }}
    </p>
    <font-awesome-icon
      v-if="selectedPaymentMethod"
      :icon="['far', 'check-circle']"
      class="credit-card__icon-checked"/>
  </div>
</template>

<script>
export default {
  props: {
    paymentMethod: {
      type: Object,
      required: true
    },
    selectedPaymentMethod: {
      type: Boolean,
      required: true
    }
  }
};
</script>
