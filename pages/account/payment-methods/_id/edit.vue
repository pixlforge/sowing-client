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

  </div>
</template>

<script>
import AppTitle from '@/components/AppTitle'
import AppBackButton from '@/components/buttons/AppBackButton'

export default {
  components: {
    AppTitle,
    AppBackButton
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
  asyncData({ app }) {
    return {
      title: app.head.title
    }
  }
}
</script>
