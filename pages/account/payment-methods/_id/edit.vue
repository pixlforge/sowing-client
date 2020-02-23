<template>
  <div>
    <header class="flex items-center">

      <!-- Back -->
      <ButtonBack
        :route="{ name: 'account-payment-methods' }"
        class="sm:mr-20"
      />

      <!-- Page title -->
      <Heading
        tag="h1"
        visual="h1"
        utilities="mx-auto sm:mx-0"
      >
        {{ $t('account.payment_methods.titles.edit') }}
      </Heading>
    </header>

    <Card>
      <Paragraph class="text-center mb-60">
        {{ $t('account.payment_methods.edit.paragraph') }}
      </Paragraph>

      <ButtonPrimary
        @click.native="update"
        icon="star"
        class="mx-auto"
      >
        {{ $t('buttons.default') }}
      </ButtonPrimary>
    </Card>

  </div>
</template>

<script>
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
    Paragraph
  },
  middleware: ['authenticated'],
  layout: 'account-management',
  head() {
    return {
      title: `${this.$t('account.payment_methods.titles.edit')} | ${this.$t('account.title')}`,
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
