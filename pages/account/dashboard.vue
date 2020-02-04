<template>
  <div>

    <!-- Page title -->
    <Heading
      tag="h1"
      visual="h1"
    >
      {{ $t("pages.account.dashboard.title") }}
    </Heading>

    <AppCard>
      <AppAccountCard :user="user"/>
    </AppCard>

  </div>
</template>

<script>
import AppCard from '@/components/AppCard'
import Heading from '@/components/Heading'
import AppAccountCard from '@/components/account/AppAccountCard'

export default {
  components: {
    AppCard,
    Heading,
    AppAccountCard
  },
  middleware: ['authenticated'],
  layout: 'account-management',
  head() {
    return {
      title: `${this.$t('pages.account.dashboard.title')} | ${this.$t('pages.account.title')}`,
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
      user: user.data
    }
  }
}
</script>
