<template>
  <div>

    <!-- Page title -->
    <Heading
      tag="h1"
      visual="h1"
    >
      {{ $t("account.dashboard.title") }}
    </Heading>

    <Card>
      <AccountCard :user="user"/>
    </Card>

  </div>
</template>

<script>
import Heading from '@/components/globals/Heading'
import Card from '@/components/globals/Card'
import AccountCard from '@/components/account/AccountCard'

export default {
  components: {
    Heading,
    Card,
    AccountCard
  },
  middleware: ['authenticated'],
  layout: 'account-management',
  head() {
    return {
      title: `${this.$t('account.dashboard.title')} | ${this.$t('account.title')}`,
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
