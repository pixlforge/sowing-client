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

    <!-- Content -->
    <AppContentSection>
      <div class="section__centered">

        <!-- Icon -->
        <div class="icon__group">
          <font-awesome-icon
            :icon="['far', 'check-circle']"
            class="icon__icon icon__icon--success"/>
        </div>

        <AppTitle
          semantic="h2"
          visual="main">
          {{ $t("pages.register_success.congratulations") }}
        </AppTitle>

        <p class="paragraph__medium paragraph--center paragraph--narrow paragraph--spaced">
          {{ $t("pages.register_success.account_created") }}
        </p>

        <!-- Illustration -->
        <div class="illustration__container">
          <img
            src="~assets/img/success_smiley.svg"
            alt=""
            class="illustration__image">
        </div>
      </div>
    </AppContentSection>
  </main>
</template>

<script>
import AppTitle from '@/components/AppTitle';
import AppHeader from '@/components/AppHeader';
import AppContentSection from '@/components/AppContentSection';

export default {
  head() {
    return {
      title: `${this.$t('pages.register_success.title')} | ${this.title}`
    };
  },
  components: {
    AppTitle,
    AppHeader,
    AppContentSection
  },
  asyncData({ app }) {
    return {
      title: app.head.title
    };
  }
};
</script>
