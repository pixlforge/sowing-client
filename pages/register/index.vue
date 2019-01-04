<template>
  <main>

    <!-- Header -->
    <Header>
      <template slot="icon">
        <font-awesome-icon :icon="['far', 'user-plus']"/>
      </template>
      <template slot="title">
        <h1 class="header-title">{{ $t("pages.register.title") }}</h1>
      </template>
    </Header>

    <!-- Form -->
    <section class="container py-100">
      <form
        class="card-form"
        @submit.prevent="register">

        <!-- Name -->
        <div>
          <label
            for="name"
            class="label">
            {{ $t("forms.labels.name") }}
          </label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            name="name"
            class="input-base">
        </div>

        <!-- Email -->
        <div class="mt-40">
          <label
            for="email"
            class="label">
            {{ $t("forms.labels.email") }}
          </label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            name="email"
            class="input-base">
        </div>

        <!-- Password -->
        <div class="mt-40">
          <label
            for="password"
            class="label">
            {{ $t("forms.labels.password") }}
          </label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            name="password"
            class="input-base">
        </div>

        <!-- Password -->
        <div class="mt-40">
          <label
            for="password_confirmation"
            class="label">
            {{ $t("forms.labels.password_confirmation") }}
          </label>
          <input
            id="password_confirmation"
            v-model="form.password_confirmation"
            type="password"
            name="password_confirmation"
            class="input-base">
        </div>

        <div class="mt-40">
          <label for="terms">
            <input
              id="terms"
              v-model="terms"
              type="checkbox"
              name="terms"
              class="text-20 mr-10">
            <span class="text-14 text-grey-lighter select-none cursor-pointer">{{ $t("pages.register.terms") }}</span>
            <nuxt-link
              :to="localePath({ name: 'index' })"
              class="text-14 text-green no-underline hover:underline select-none">{{ $t("pages.register.links.terms") }}</nuxt-link>.
          </label>
        </div>

          
        <!-- Submit -->
        <button
          type="submit"
          class="btn btn-primary mx-auto mt-40">
          <font-awesome-icon
            :icon="['far', 'user']"
            class="mr-10"/>
          {{ $t("buttons.create_account") }}
        </button>
        
      </form>
    </section>

  </main>
</template>

<script>
import Header from "@/components/Header";

export default {
  head() {
    return {
      title: `${this.title} | ${this.$t("pages.register.title")}`
    };
  },
  components: {
    Header
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      terms: false
    };
  },
  async asyncData({ app }) {
    return {
      title: app.head.title
    };
  },
  methods: {
    async register() {
      if (!this.terms) {
        this.$toast.error(this.$t("toasts.terms"));
        return;
      }
      try {
        let res = await this.$axios.$post("/auth/register", { ...this.form });
        this.$toast.success(`${this.$t("toasts.welcome")} ${res.data.name}!`);
        this.$router.push(this.localePath({ name: "register-success" }));
      } catch (e) {
        this.$toast.error(this.$t("toasts.validation"));
      }
    }
  }
};
</script>
