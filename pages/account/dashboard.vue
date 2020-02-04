<template>
  <div>

    <!-- Page title -->
    <Heading
      tag="h1"
      visual="h1"
    >
      {{ $t("pages.account.dashboard.title") }}
    </Heading>

    <Card>
      <AccountCard :user="user"/>
    </Card>

  </div>
</template>

<script>
import Card from '@/components/Card'
import Heading from '@/components/Heading'
import AccountCard from '@/components/account/AccountCard'

export default {
  components: {
    Card,
    Heading,
    AccountCard
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
