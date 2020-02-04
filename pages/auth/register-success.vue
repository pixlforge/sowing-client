<template>
  <main>

    <!-- Header -->
    <Header
      :title="$t('pages.register.title')"
      icon="user-plus"
    />

    <!-- Splash -->
    <Splash
      :title="$t('pages.register_success.congratulations')"
      :subtitle="$t('pages.register_success.account_created')"
      type="success"
      class="max-w-800"
    >
      <template slot="illustration">
        <img
          :alt="$t('pages.register_success.congratulations')"
          src="~assets/img/success_smiley.svg"
        >
      </template>
    </Splash>
  </main>
</template>

<script>
import Splash from '@/components/Splash'
import Header from '@/components/headers/Header'

export default {
  middleware: ['authenticated'],
  head() {
    return {
      title: this.$t('pages.register_success.title')
    }
  },
  components: {
    Splash,
    Header
  }
}
</script>
