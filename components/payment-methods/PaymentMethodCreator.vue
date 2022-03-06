<template>
  <div
    class="w-full h-full min-h-221 flex flex-col justify-center items-center px-20"
  >
    <!-- Button -->
    <button
      v-if="!showing"
      class="w-80 h-80 rounded-full bg-gray-200 hover:bg-green-500 text-white transition-colors duration-200 ease-out p-0"
      @click.prevent="showing = true"
    >
      <font-awesome-icon :icon="['far', 'plus']" class="text-36" />
    </button>

    <form
      v-show="showing"
      class="w-full h-full flex flex-col items-center"
      @submit.prevent="store"
    >
      <!-- Body -->
      <div class="w-full mt-20">
        <label for="elements" class="block text-14 leading-normal mb-20">
          {{ $t('stripe.add_a_card') }}
        </label>
        <div id="elements" class="bg-green-200 rounded-lg pl-10 py-10" />
      </div>

      <!-- Controls -->
      <div class="flex mt-20">
        <!-- Store -->
        <ButtonPrimary
          :disabled="storing"
          type="submit"
          icon="plus"
          class="mr-5"
        >
          {{ $t('button.add') }}
        </ButtonPrimary>

        <!-- Cancel -->
        <ButtonTertiary
          :disabled="storing"
          @click.native.prevent="showing = false"
        >
          {{ $t('button.cancel') }}
        </ButtonTertiary>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import ButtonTertiary from '@/components/buttons/ButtonTertiary'

export default {
  components: {
    ButtonPrimary,
    ButtonTertiary,
  },
  data() {
    return {
      storing: false,
      showing: false,
      stripe: {},
      card: {},
      options: {
        style: {
          base: {
            fontSize: '16px',
            iconColor: '#8D8D8D',
          },
        },
      },
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale',
    }),
  },
  mounted() {
    this.stripe = window.Stripe(process.env.STRIPE_PUBLIC)

    this.card = this.stripe
      .elements({ locale: this.locale })
      .create('card', this.options)
    this.card.mount('#elements')
  },
  methods: {
    async store() {
      this.storing = true
      const { token, error } = await this.stripe.createToken(this.card)

      if (error) {
        this.$toast.error(this.$t('toasts.general_error'))
      } else {
        const res = await this.$axios.$post('/payment-methods', {
          token: token.id,
        })
        this.$toast.success(this.$t('toasts.cc_added'))
        this.$emit('payment-method:added', res.data)
        this.card.clear()
        this.showing = false
      }

      this.storing = false
    },
  },
}
</script>
