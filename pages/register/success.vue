<template>
  <main>

    <!-- Header -->
    <AppHeader>
      <template slot="icon">
        <font-awesome-icon :icon="['far', 'user-plus']"/>
      </template>
      <template slot="title">
        <AppTitle
          semantic="h1"
          visual="header">
          {{ $t("pages.register.title") }}
        </AppTitle>
      </template>
    </AppHeader>

    <!-- Splash -->
    <AppSplash
      type="success"
      class="max-w-800">
      <template slot="title">
        {{ $t("pages.register_success.congratulations") }}
      </template>
      <template slot="subtitle">
        {{ $t("pages.register_success.account_created") }}
      </template>
      <template slot="illustration">
        <img
          src="~assets/img/success_smiley.svg"
          :alt="$t('pages.register_success.congratulations')">
      </template>
    </AppSplash>
  </main>
</template>

<script>
import AppTitle from '@/components/AppTitle';
import AppHeader from '@/components/headers/AppHeader';
import AppSplash from '@/components/AppSplash';

export default {
  head() {
    return {
      title: `${this.$t('pages.register_success.title')} | ${this.title}`
    };
  },
  components: {
    AppTitle,
    AppHeader,
    AppSplash
  },
  asyncData({ app }) {
    return {
      title: app.head.title
    };
  }
};
</script>
