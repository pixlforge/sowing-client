<template>
  <div
    :class="{ 'cc-container-selected': selectedPaymentMethod }"
    class="cc-container">
    <font-awesome-icon
      :icon="['fab', 'cc-mastercard']"
      :class="{ 'cc-icon-selected': selectedPaymentMethod }"
      class="cc-icon"/>
    <h5
      :class="{ 'cc-title-selected': selectedPaymentMethod }"
      class="cc-title">
      Mastercard
    </h5>
    <p
      :class="{ 'cc-last-four-selected': selectedPaymentMethod }"
      class="cc-last-four">
      {{ $t("components.cc.ending_in") }} {{ paymentMethod.last_four }}
    </p>
    <font-awesome-icon
      v-if="selectedPaymentMethod"
      :icon="['far', 'check-circle']"
      class="cc-icon-checked"/>
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

