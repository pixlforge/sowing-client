<template>
  <div>

    <!-- Page title -->
    <AppTitle
      semantic="h1"
      visual="h1"
    >
      {{ $t("pages.account.password.title") }}
    </AppTitle>

  </div>
</template>

<script>
import AppTitle from '@/components/AppTitle'

export default {
  components: {
    AppTitle
  },
  middleware: ['authenticated'],
  layout: 'account-management',
  head() {
    return {
      title: `${this.$t('pages.account.password.title')} | ${this.$t('pages.account.title')} | ${this.title}`,
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
