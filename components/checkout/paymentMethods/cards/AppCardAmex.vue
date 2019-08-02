<template>
  <div
    :class="{
      'border-green-500 shadow-2xl': selectedPaymentMethod,
      'border-gray-200': !selectedPaymentMethod
    }"
    class="relative rounded-lg flex border transition flex-col items-center cursor-pointer p-36"
  >
    <font-awesome-icon
      :icon="['fab', 'cc-amex']"
      :class="{
        'text-green-500': selectedPaymentMethod,
        'text-gray-200': !selectedPaymentMethod
      }"
      class="text-72 transition"
    />
    <h5
      :class="{
        'text-green-500': selectedPaymentMethod,
        'text-gray-200': !selectedPaymentMethod
      }"
      class="text-16 font-extrabold uppercase transition mt-20"
    >
      American Express
    </h5>
    <p
      :class="{
        'text-green-500': selectedPaymentMethod,
        'text-gray-200': !selectedPaymentMethod
      }"
      class="text-12 transition mt-5"
    >
      {{ $t("credit_cards.ending_in") }} {{ paymentMethod.last_four }}
    </p>
    <font-awesome-icon
      v-if="selectedPaymentMethod"
      :icon="['far', 'check-circle']"
      class="absolute top-0 left-0 text-30 text-green-400 ml-20 mt-20"
    />
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
}
</script>
