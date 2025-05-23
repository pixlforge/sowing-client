<template>
  <main>
    <!-- Header -->
    <Header :title="$t('verify.title')" icon="shield-check" />

    <!-- Verification successful -->
    <template v-if="verificationSuccessful">
      <Splash
        :title="$t('verify.success')"
        :subtitle="$t('toasts.account_confirmed')"
        type="success"
        class="max-w-800"
      >
        <template slot="illustration">
          <img :alt="$t('verify.success')" src="~assets/img/success2.svg" />
        </template>
      </Splash>
    </template>

    <!-- Verification failed -->
    <template v-if="verificationFailed">
      <Splash
        :title="$t('verify.fail')"
        :subtitle="error"
        type="error"
        class="max-w-800"
      >
        <template slot="illustration">
          <img :alt="$t('verify.fail')" src="~assets/img/warning.svg" />
        </template>
      </Splash>
    </template>
  </main>
</template>

<script>
import Header from '@/components/headers/Header'
import Splash from '@/components/globals/Splash'

export default {
  components: {
    Header,
    Splash,
  },
  middleware: ['authenticated'],
  data() {
    return {
      tried: false,
      verified: false,
      error: null,
    }
  },
  head() {
    return {
      title: this.$t('verify.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex',
        },
      ],
    }
  },
  computed: {
    verificationSuccessful() {
      return this.verified
    },
    verificationFailed() {
      return this.tried && !this.verified
    },
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
    },
  },
}
</script>
