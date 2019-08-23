<template>
  <div>

    <!-- Page title -->
    <AppTitle
      semantic="h1"
      visual="h1"
    >
      {{ $t("pages.account.dashboard.title") }}
    </AppTitle>

    <AppAccountCard
      :user="user"
      class="my-72 md:my-96"
    />

  </div>
</template>

<script>
import AppTitle from '@/components/AppTitle'
import AppAccountCard from '@/components/account/AppAccountCard'

export default {
  components: {
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
