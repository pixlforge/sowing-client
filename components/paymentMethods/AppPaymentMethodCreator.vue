<template>
  <div class="w-full h-full min-h-221 flex flex-col justify-center items-center px-20">

    <!-- Button -->
    <button
      v-if="!showing"
      class="bg-gray-200 hover:bg-green-500 transition-color transition-faster text-white w-80 h-80 rounded-full p-0"
      @click.prevent="showing = true"
    >
      <font-awesome-icon
        :icon="['far', 'plus']"
        class="text-36"
      />
    </button>

    <form
      v-show="showing"
      class="w-full h-full flex flex-col items-center"
      @submit.prevent="store"
    >

      <!-- Body -->
      <div class="w-full mt-20">
        <label
          for="elements"
          class="block text-14 leading-normal mb-20"
        >
          {{ $t("stripe.add_a_card") }}
        </label>
        <div
          id="elements"
          class="bg-green-200 rounded-lg pl-10 py-10"
        />
      </div>

      <!-- Controls -->
      <div class="flex mt-20">

        <!-- Store -->
        <AppButtonPrimary
          :disabled="storing"
          type="submit"
          icon="plus"
          class="mr-5"
        >
          {{ $t("buttons.add") }}
        </AppButtonPrimary>

        <!-- Cancel -->
        <AppButtonTertiary
          :disabled="storing"
          @click.native.prevent="showing = false"
        >
          {{ $t("buttons.cancel") }}
        </AppButtonTertiary>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'
import AppButtonTertiary from '@/components/buttons/AppButtonTertiary'

export default {
  components: {
    AppButtonPrimary,
    AppButtonTertiary
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
            iconColor: '#8D8D8D'
          }
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale'
    })
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
          token: token.id
        })
        this.$toast.success(this.$t('toasts.cc_added'))
        this.$emit('payment-method:added', res.data)
        this.card.clear()
        this.showing = false
      }

      this.storing = false
    }
  }
}
</script>
