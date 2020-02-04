<template>
  <div>
    <header class="flex items-center">

      <!-- Back -->
      <AppBackButton
        :route="{ name: 'account-payment-methods' }"
        class="sm:mr-20"
      />

      <!-- Page title -->
      <Heading
        tag="h1"
        visual="h1"
        utilities="mx-auto sm:mx-0"
      >
        {{ $t('pages.account.payment_methods.titles.create') }}
      </Heading>
    </header>

    <Card>
      <Paragraph class="text-center md:text-left">
        {{ $t("stripe.add_a_card") }}
      </Paragraph>

      <form
        @submit.prevent="store"
        class="md:max-w-600"
      >

        <!-- Body -->
        <div class="my-60">
          <div
            id="elements"
            class="bg-gray-100 rounded-lg px-24 py-20"
          />
        </div>

        <!-- Store -->
        <AppButtonPrimary
          :disabled="storing"
          type="submit"
          icon="plus"
          class="mx-auto md:mx-0"
        >
          {{ $t("buttons.add") }}
        </AppButtonPrimary>
      </form>
    </Card>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Card from '@/components/Card'
import Heading from '@/components/Heading'
import AppBackButton from '@/components/buttons/AppBackButton'
import Paragraph from '@/components/paragraphs/Paragraph'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'

export default {
  components: {
    Card,
    Heading,
    AppBackButton,
    Paragraph,
    AppButtonPrimary
  },
  middleware: ['authenticated'],
  layout: 'account-management',
  head() {
    return {
      title: `${this.$t('pages.account.payment_methods.titles.create')} | ${this.$t('pages.account.title')}`,
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex'
        }
      ]
    }
  },
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
            iconColor: '#5FB881'
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
        await this.$axios.$post('/payment-methods', {
          token: token.id
        })
        this.$toast.success(this.$t('toasts.cc_added'))
        this.card.clear()
        this.$router.push({ name: 'account-payment-methods' })
      }

      this.storing = false
    }
  }
}
</script>
