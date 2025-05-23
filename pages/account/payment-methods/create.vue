<template>
  <div>
    <header class="flex items-center">
      <!-- Back -->
      <ButtonBack
        :route="{ name: 'account-payment-methods' }"
        class="sm:mr-20"
      />

      <!-- Page title -->
      <Heading tag="h1" visual="h1" utilities="mx-auto sm:mx-0">
        {{ $t('account.payment_methods.titles.create') }}
      </Heading>
    </header>

    <Card>
      <Paragraph class="text-center md:text-left">
        {{ $t('stripe.add_a_card') }}
      </Paragraph>

      <form class="md:max-w-600" @submit.prevent="store">
        <!-- Body -->
        <div class="my-60">
          <div id="elements" class="bg-gray-100 rounded-lg px-24 py-20" />
        </div>

        <!-- Store -->
        <ButtonPrimary
          :disabled="storing"
          type="submit"
          icon="plus"
          class="mx-auto md:mx-0"
        >
          {{ $t('button.add') }}
        </ButtonPrimary>
      </form>
    </Card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import ButtonBack from '@/components/buttons/ButtonBack'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import Card from '@/components/globals/Card'
import Heading from '@/components/globals/Heading'
import Paragraph from '@/components/paragraphs/Paragraph'

export default {
  components: {
    ButtonBack,
    ButtonPrimary,
    Card,
    Heading,
    Paragraph,
  },
  layout: 'account-management',
  middleware: ['authenticated'],
  data() {
    return {
      storing: false,
      stripe: {},
      card: {},
      options: {
        hidePostalCode: true,
        iconStyle: 'solid',
        style: {
          base: {
            color: '#101010',
            fontSize: '16px',
            fontFamily: 'Montserrat',
            iconColor: '#5FB881',
          },
        },
      },
    }
  },
  head() {
    return {
      title: `${this.$t('account.payment_methods.titles.create')} | ${this.$t(
        'account.title'
      )}`,
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex',
        },
      ],
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
        await this.$axios.$post('/payment-methods', {
          token: token.id,
        })
        this.$toast.success(this.$t('toasts.cc_added'))
        this.card.clear()
        this.$router.push({ name: 'account-payment-methods' })
      }

      this.storing = false
    },
  },
}
</script>
