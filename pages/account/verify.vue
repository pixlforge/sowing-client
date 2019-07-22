<template>
  <main>

    <!-- Header -->
    <AppHeader>
      <template slot="icon">
        <font-awesome-icon :icon="['far', 'shield-check']"/>
      </template>
      <template slot="title">
        <AppTitle
          semantic="h1"
          visual="header">
          {{ $t("pages.verify.title") }}
        </AppTitle>
      </template>
    </AppHeader>

    <!-- Verification successful -->
    <template v-if="verificationSuccessful">
      <AppSplash
        type="success"
        class="max-w-800">
        <template slot="title">
          {{ $t("pages.verify.success") }}
        </template>
        <template slot="subtitle">
          {{ $t("toasts.account_confirmed") }}
        </template>
        <template slot="illustration">
          <img
            src="~assets/img/success2.svg"
            :alt="$t('pages.verify.success')">
        </template>
      </AppSplash>
    </template>

    <!-- Verification failed -->
    <template v-if="verificationFailed">
      <AppSplash
        type="error"
        class="max-w-800">
        <template slot="title">
          {{ $t("pages.verify.fail") }}
        </template>
        <template slot="subtitle">
          {{ error }}
        </template>
        <template slot="illustration">
          <img
            src="~assets/img/warning.svg"
            :alt="$t('pages.verify.fail')">
        </template>
      </AppSplash>
    </template>

  </main>
</template>

<script>
import AppTitle from '@/components/AppTitle';
import AppHeader from '@/components/headers/AppHeader';
import AppSplash from '@/components/AppSplash';

export default {
  middleware: ['authenticated'],
  head() {
    return {
      title: `${this.$t('pages.verify.title')} | ${this.title}`,
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
    };
  },
  components: {
    AppTitle,
    AppHeader,
    AppSplash
  },
  data() {
    return {
      tried: false,
      verified: false,
      error: null
    };
  },
  computed: {
    verificationSuccessful() {
      return this.verified;
    },
    verificationFailed() {
      return this.tried && !this.verified
    }
  },
  asyncData({ app }) {
    return {
      title: app.head.title,
      description: app.head.description
    };
  },
  mounted() {
    this.verifyEmailAddress();
  },
  methods: {
    async verifyEmailAddress() {
      const token = this.$route.query.token;

      if (!token) {
        return;
      }

      try {
        await this.$axios.$post('/auth/verify', { token });
        this.verified = true;
        this.$toast.success(this.$t('toasts.account_confirmed'));
      } catch (e) {
        this.error = e.response.data.errors.token;
        this.$toast.error(this.error);
      }

      this.tried = true;
    }
  }
}
</script>
