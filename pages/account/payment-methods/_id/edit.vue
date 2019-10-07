<template>
  <div>
    <header class="flex items-center">

      <!-- Back -->
      <AppBackButton
        :route="{ name: 'account-payment-methods' }"
        class="mr-20"
      />

      <!-- Page title -->
      <AppTitle
        semantic="h1"
        visual="h1"
      >
        {{ $t('pages.account.payment_methods.titles.edit') }}
      </AppTitle>
    </header>

    <div class="my-72 md:my-96">
      <AppParagraph center>
        {{ $t('pages.account.payment_methods.edit.paragraph') }}
      </AppParagraph>

      <AppButtonPrimary
        icon="star"
        class="mx-auto"
        @click.native="update"
      >
        {{ $t('buttons.default') }}
      </AppButtonPrimary>
    </div>

  </div>
</template>

<script>
import AppTitle from '@/components/AppTitle'
import AppBackButton from '@/components/buttons/AppBackButton'
import AppParagraph from '@/components/paragraphs/AppParagraph'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'

export default {
  components: {
    AppTitle,
    AppBackButton,
    AppParagraph,
    AppButtonPrimary
  },
  middleware: ['authenticated'],
  layout: 'account-management',
  head() {
    return {
      title: `${this.$t('pages.account.payment_methods.titles.edit')} | ${this.$t('pages.account.title')} | ${this.title}`,
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
      paymentMethod: res.data,
      title: app.head.title
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
