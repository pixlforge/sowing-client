<template>
  <div
    :class="{
      'border-green-500 shadow-2xl': selectedPaymentMethod,
      'border-gray-200': !selectedPaymentMethod,
    }"
    class="relative rounded-lg flex border transition-shadow transition-faster flex-col items-center cursor-pointer p-36"
  >
    <font-awesome-icon
      :icon="['fab', 'cc-mastercard']"
      :class="{
        'text-green-500': selectedPaymentMethod,
        'text-gray-200': !selectedPaymentMethod,
      }"
      class="text-72 transition-colors duration-200 ease-out"
    />
    <h5
      :class="{
        'text-green-500': selectedPaymentMethod,
        'text-gray-200': !selectedPaymentMethod,
      }"
      class="text-16 font-extrabold uppercase transition-colors duration-200 ease-out mt-20"
    >
      MasterCard
    </h5>
    <p
      :class="{
        'text-green-500': selectedPaymentMethod,
        'text-gray-200': !selectedPaymentMethod,
      }"
      class="text-12 transition-color transition-faster mt-5"
    >
      {{ $t('credit_cards.ending_in') }} {{ paymentMethod.last_four }}
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
      required: true,
    },
    selectedPaymentMethod: {
      type: Boolean,
      required: true,
    },
  },
}
</script>
