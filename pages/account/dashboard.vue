<template>
  <div>

    <!-- Page title -->
    <AppTitle
      semantic="h1"
      visual="h1"
    >
      {{ $t("pages.account.dashboard.title") }}
    </AppTitle>

    <AppCard>
      <AppAccountCard :user="user"/>
    </AppCard>

  </div>
</template>

<script>
import AppCard from '@/components/AppCard'
import AppTitle from '@/components/AppTitle'
import AppAccountCard from '@/components/account/AppAccountCard'

export default {
  components: {
    AppCard,
    AppTitle,
    AppAccountCard
  },
  middleware: ['authenticated'],
  layout: 'account-management',
  head() {
    return {
      title: `${this.$t('pages.account.dashboard.title')} | ${this.$t('pages.account.title')} | ${this.title}`,
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex'
        }
      ]
    }
  },
  async asyncData({ app }) {
    const user = await app.$axios.$get('/user/account')

    return {
      user: user.data,
      title: app.head.title
    }
  }
}
</script>
