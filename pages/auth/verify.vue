<template>
  <main>

    <!-- Header -->
    <AppHeader
      :title="$t('pages.verify.title')"
      icon="shield-check"
    />

    <!-- Verification successful -->
    <template v-if="verificationSuccessful">
      <AppSplash
        :title="$t('pages.verify.success')"
        :subtitle="$t('toasts.account_confirmed')"
        type="success"
        class="max-w-800"
      >
        <template slot="illustration">
          <img
            :alt="$t('pages.verify.success')"
            src="~assets/img/success2.svg"
          >
        </template>
      </AppSplash>
    </template>

    <!-- Verification failed -->
    <template v-if="verificationFailed">
      <AppSplash
        :title="$t('pages.verify.fail')"
        :subtitle="error"
        type="error"
        class="max-w-800"
      >
        <template slot="illustration">
          <img
            :alt="$t('pages.verify.fail')"
            src="~assets/img/warning.svg"
          >
        </template>
      </AppSplash>
    </template>

  </main>
</template>

<script>
import AppHeader from '@/components/headers/AppHeader'
import AppSplash from '@/components/AppSplash'

export default {
  middleware: ['authenticated'],
  head() {
    return {
      title: this.$t('pages.verify.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex'
        }
      ]
    }
  },
  components: {
    AppHeader,
    AppSplash
  },
  data() {
    return {
      tried: false,
      verified: false,
      error: null
    }
  },
  computed: {
    verificationSuccessful() {
      return this.verified
    },
    verificationFailed() {
      return this.tried && !this.verified
    }
  },
  mounted() {
    this.verifyEmailAddress()
  },
  methods: {
    async verifyEmailAddress() {
      const token = this.$route.query.token

      if (!token) {
        return
      }

      try {
        await this.$axios.$post('/auth/verify', { token })
        this.verified = true
        this.$toast.success(this.$t('toasts.account_confirmed'))
      } catch (e) {
        this.error = e.response.data.errors.token
        this.$toast.error(this.error)
      }

      this.tried = true
    }
  }
}
</script>
