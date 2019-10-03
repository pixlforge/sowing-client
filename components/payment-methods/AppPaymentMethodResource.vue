<template>
  <li class="relative h-80 odd:bg-green-100 border-b-2 last:border-b-0 border-gray-100 flex px-20">

    <!-- Controls -->
    <div
      ref="controls"
      :class="{
        'w-full': controlsOpen
      }"
      class="absolute w-0 h-full bg-white flex justify-center items-center -mx-20 origin-left transition-all transition-medium z-10"
    >
      <template v-if="controlsOpen">
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
      </template>
    </div>

    <!-- Content -->
    <div
      class="w-full flex items-center text-center"
    >

      <!-- Card type icon -->
      <div class="hidden md:block md:w-1/12">
        <font-awesome-icon
          :icon="['fab', cardType]"
          class="text-36 lg:text-48 text-gray-300"
        />
      </div>

      <!-- Card type -->
      <div class="w-full md:w-5/12 text-12 md:text-14">
        {{ paymentMethod.card_type }}
      </div>

      <!-- Last four -->
      <div class="w-full md:w-4/12">
        <div class="text-10 text-gray-300">
          {{ $t('credit_cards.ending_in') }}
        </div>
        <div class="text-12 text-gray-400">
          {{ paymentMethod.last_four }}
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

      <!-- Open button -->
      <div class="md:w-1/12 flex justify-end">
        <button
          class="text-gray-300 hover:text-gray-800 transition-color transition-faster px-10"
          @click.prevent="controlsOpen = !controlsOpen"
        >
          <font-awesome-icon
            :icon="['far', 'ellipsis-v']"
            class="text-20"
          />
        </button>
      </div>
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
  data() {
    return {
      controlsOpen: false
    }
  },
  computed: {
    cardType() {
      if (this.paymentMethod.card_type_slug === 'american-express') {
        return 'cc-amex'
      }

      return 'cc-' + this.paymentMethod.card_type_slug
    }
  },
  mounted() {
    const escapeHandler = (event) => {
      if (event.key === 'Escape' && this.controlsOpen) {
        this.controlsOpen = false
      }
    }
    document.addEventListener('keydown', escapeHandler)

    const clickHandler = (event) => {
      const element = this.$refs.controls
      const target = event.target
      if (element === target || target.contains(element)) {
        this.controlsOpen = false
      }
    }
    document.addEventListener('click', clickHandler)

    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', escapeHandler)
      document.removeEventListener('click', clickHandler)
    })
  }
}
</script>
