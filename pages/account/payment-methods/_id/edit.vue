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
        {{ $t('pages.account.payment_methods.titles.edit') }}
      </Heading>
    </header>

    <AppCard>
      <AppParagraph class="text-center mb-60">
        {{ $t('pages.account.payment_methods.edit.paragraph') }}
      </AppParagraph>

      <AppButtonPrimary
        @click.native="update"
        icon="star"
        class="mx-auto"
      >
        {{ $t('buttons.default') }}
      </AppButtonPrimary>
    </AppCard>

  </div>
</template>

<script>
import AppCard from '@/components/AppCard'
import Heading from '@/components/Heading'
import AppBackButton from '@/components/buttons/AppBackButton'
import AppParagraph from '@/components/paragraphs/AppParagraph'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'

export default {
  components: {
    AppCard,
    Heading,
    AppBackButton,
    AppParagraph,
    AppButtonPrimary
  },
  middleware: ['authenticated'],
  layout: 'account-management',
  head() {
    return {
      title: `${this.$t('pages.account.payment_methods.titles.edit')} | ${this.$t('pages.account.title')}`,
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex'
        }
      ]
    }
  },
  async asyncData({ app, route }) {
    const res = await app.$axios.$get(`/payment-methods/${route.params.id}`)

    return {
      paymentMethod: res.data
    }
  },
  methods: {
    async update() {
      try {
        await this.$axios.$patch(`/payment-methods/${this.paymentMethod.id}`)
        this.$toast.success(this.$t('toasts.payment_methods.updated'))
        this.$router.push({ name: 'account-payment-methods' })
      } catch (e) {
        this.$toast.error('toasts.general_error')
      }
    }
  }
}
</script>
