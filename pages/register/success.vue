<template>
  <main>

    <!-- Header -->
    <AppHeader
      :title="$t('pages.register.title')"
      icon="user-plus"/>

    <!-- Splash -->
    <AppSplash
      :title="$t('pages.register_success.congratulations')"
      :subtitle="$t('pages.register_success.account_created')"
      type="success"
      class="max-w-800">
      <template slot="illustration">
        <img
          src="~assets/img/success_smiley.svg"
          :alt="$t('pages.register_success.congratulations')">
      </template>
    </AppSplash>
  </main>
</template>

<script>
import AppSplash from '@/components/AppSplash'
import AppHeader from '@/components/headers/AppHeader'

export default {
  head() {
    return {
      title: `${this.$t('pages.register_success.title')} | ${this.title}`
    }
  },
  components: {
    AppSplash,
    AppHeader
  },
  asyncData({ app }) {
    return {
      title: app.head.title
    }
  }
}
</script>
