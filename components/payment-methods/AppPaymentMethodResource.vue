<template>
  <li class="odd:bg-green-100 flex flex-col md:flex-row items-center text-center px-20 py-16">

    <!-- Card type icon -->
    <div class="hidden md:block md:w-1/12">
      <font-awesome-icon
        :icon="['fab', cardType]"
        class="text-36 lg:text-48 text-gray-300"
      />
    </div>

    <div class="w-full md:w-7/12 flex items-center py-20 md:py-0">

      <!-- Card type -->
      <div class="w-full md:w-1/2 text-12 md:text-14">
        {{ paymentMethod.card_type }}
      </div>

      <!-- Last four -->
      <div class="w-full md:w-1/2">
        <div class="text-10 text-gray-300">
          {{ $t('credit_cards.ending_in') }}
        </div>
        <div class="text-12 text-gray-400">
          {{ paymentMethod.last_four }}
        </div>
      </div>
    </div>

    <!-- Default payment method -->
    <div class="hidden md:block md:w-1/12">
      <div
        v-if="paymentMethod.is_default"
        class="relative group cursor-pointer"
      >
        <font-awesome-icon
          :icon="['fas', 'star']"
          :title="$t('pages.account.payment_methods.is_default')"
          class="text-14 text-orange-400"
        />
        <div class="absolute top-0 bg-white rounded-lg shadow-lg invisible group-hover:visible text-12 px-20 py-12 -mx-72 -mt-72">
          {{ $t('pages.account.payment_methods.is_default') }}
        </div>
      </div>
    </div>

    <!-- Controls -->
    <div class="w-full md:w-3/12 flex justify-center md:justify-end items-center py-20 md:py-0">
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
  },
  computed: {
    cardType() {
      if (this.paymentMethod.card_type_slug === 'american-express') {
        return 'cc-amex'
      }

      return 'cc-' + this.paymentMethod.card_type_slug
    }
  }
}
</script>
