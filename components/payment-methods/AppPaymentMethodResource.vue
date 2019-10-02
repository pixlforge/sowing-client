<template>
  <li class="odd:bg-green-100 flex items-center text-14 text-center px-20 py-16">

    <!-- Card type icon -->
    <div class="w-1/12">
      <font-awesome-icon
        :icon="['fab', 'cc-mastercard']"
        class="text-48 text-gray-300"
      />
    </div>

    <!-- Card type -->
    <div class="w-3/12">
      {{ paymentMethod.card_type }}
    </div>

    <!-- Last four -->
    <div class="w-3/12">
      {{ paymentMethod.last_four }}
    </div>

    <!-- Default payment method -->
    <div class="w-1/12">
      <font-awesome-icon
        v-if="paymentMethod.is_default"
        :icon="['fas', 'check-circle']"
        class="text-20 text-blue-500"
      />
    </div>

    <!-- Controls -->
    <div class="w-4/12 flex justify-end items-center">
      <AppViewButton
        :route="{
          name: 'account-payment-methods-id-details',
          params: {
            id: paymentMethod.id
          }
        }"
      />
      <AppEditButton
        :route="{
          name: 'account-payment-methods-id-edit',
          params: {
            id: paymentMethod.id
          }
        }"
      />
      <AppDeleteButton/>
    </div>
  </li>
</template>

<script>
import AppViewButton from '@/components/buttons/AppViewButton'
import AppEditButton from '@/components/buttons/AppEditButton'
import AppDeleteButton from '@/components/buttons/AppDeleteButton'

export default {
  components: {
    AppViewButton,
    AppEditButton,
    AppDeleteButton
  },
  props: {
    paymentMethod: {
      type: Object,
      required: true
    }
  }
}
</script>
