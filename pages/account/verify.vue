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

    <!-- Content -->
    <section class="container section mt-150">
      <div class="text-center">
        <font-awesome-icon
          v-if="verificationSuccessful"
          :icon="['far', 'check-circle']"
          class="text-72 text-green"/>
        <font-awesome-icon
          v-if="verificationFailed"
          :icon="['far', 'exclamation-triangle']"
          class="text-72 text-red"/>
      </div>
      <h2 class="title-large text-center mt-40">
        <template v-if="verificationSuccessful">
          {{ $t("pages.verify.success") }}
        </template>
        <template v-if="verificationFailed">
          {{ $t("pages.verify.fail") }}
        </template>
      </h2>
      <p class="max-w-600 text-20 text-center leading-normal mx-auto mt-40">
        <template v-if="verificationSuccessful">
          {{ $t("toasts.account_confirmed") }}
        </template>
        <template v-if="verificationFailed">
          {{ error }}
        </template>
      </p>

      <!-- Illustration -->
      <div class="w-full sm:w-2/3 xl:w-1/2 px-20 md:px-0 mx-auto mt-100">
        <img
          v-if="verificationSuccessful"
          src="~assets/img/success2.svg"
          alt="Illustration of a successful action"
          class="select-none">
        <img
          v-if="verificationFailed"
          src="~assets/img/warning.svg"
          alt="Illustration of an unsuccessful action"
          class="select-none">
      </div>
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
  data() {
    return {
      tried: false,
      verified: false,
      error: null
    };
  },
  async asyncData({ app }) {
    return {
      title: app.head.title
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
        this.$toast.success(this.$t("toasts.account_confirmed"));
      } catch (e) {
        this.error = e.response.data.errors.token;
        this.$toast.error(this.error);
      }

      this.tried = true;
    }
  }
}
</script>

