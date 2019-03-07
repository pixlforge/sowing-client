<template>
  <main>

    <!-- Header -->
    <Header>
      <template slot="icon">
        <font-awesome-icon :icon="['far', 'shield-check']"/>
      </template>
      <template slot="title">
        <h1 class="header-title">{{ $t("pages.verify.title") }}</h1>
      </template>
    </Header>

    <section class="container section mt-150">
      Verify your account
    </section>

  </main>
</template>

<script>
import Header from "@/components/Header";

export default {
  middleware: ["authenticated"],
  head() {
    return {
      title: `${this.title} | ${this.$t("pages.verify.title")}`
    };
  },
  components: {
    Header
  },
  async asyncData({ app }) {
    return {
      title: app.head.title
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
        this.$toast.success(this.$t("toasts.account_confirmed"));
      } catch (e) {
        this.$toast.error(e.response.data.errors.token);
      }
    }
  }
}
</script>

