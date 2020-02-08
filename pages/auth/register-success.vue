<template>
  <main>

    <!-- Header -->
    <Header
      :title="$t('register.title')"
      icon="user-plus"
    />

    <!-- Splash -->
    <Splash
      :title="$t('register_success.congratulations')"
      :subtitle="$t('register_success.account_created')"
      type="success"
      class="max-w-800"
    >
      <template slot="illustration">
        <img
          :alt="$t('register_success.congratulations')"
          src="~assets/img/success_smiley.svg"
        >
      </template>
    </Splash>
  </main>
</template>

<script>
import Splash from '@/components/globals/Splash'
import Header from '@/components/headers/Header'

export default {
  components: {
    Splash,
    Header
  },
  middleware: ['authenticated'],
  head() {
    return {
      title: this.$t('register_success.title')
    }
  }
}
</script>
