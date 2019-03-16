<template>
  <main>
    
    <!-- Header -->
    <Header>
      <template slot="icon">
        <font-awesome-icon :icon="['far', 'user-plus']"/>
      </template>
      <template slot="title">
        <h1 class="header__title">{{ $t("pages.register.title") }}</h1>
      </template>
    </Header>

    <!-- Content -->
    <section class="section__container container">
      <div class="section__centered">
        
        <!-- Icon -->
        <div class="icon__group">
          <font-awesome-icon
            :icon="['far', 'check-circle']"
            class="icon__icon icon__icon--success"/>
        </div>

        <h2 class="title__main title--center">
          {{ $t("pages.register_success.congratulations") }}
        </h2>

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
    </section>
  </main>
</template>

<script>
import Header from "@/components/Header";

export default {
  head() {
    return {
      title: `${this.title} | ${this.$t("pages.register_success.title")}`
    };
  },
  components: {
    Header
  },
  async asyncData({ app }) {
    return {
      title: app.head.title
    };
  }
};
</script>
