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
    <section class="container section mt-150">
      <form
        class="max-w-500 mx-auto"
        @submit.prevent="register">

        <!-- Name -->
        <div class="form-group">
          <label
            for="name"
            class="label">
            {{ $t("forms.labels.name") }}
          </label>
          <input
            id="name"
            ref="autofocus"
            v-model="form.name"
            :class="{ 'border-red': errors.name, 'border-green-lightest': !errors.name }"
            type="text"
            name="name"
            class="input-base border"
            required
            autofocus>
          <template v-if="errors.name">
            <p class="input-error">{{ errors.name[0] }}</p>
          </template>
        </div>

        <!-- Email -->
        <div class="form-group mt-40">
          <label
            for="email"
            class="label">
            {{ $t("forms.labels.email") }}
          </label>
          <input
            id="email"
            v-model="form.email"
            :class="{ 'border-red': errors.email, 'border-green-lightest': !errors.email }"
            type="email"
            name="email"
            class="input-base border"
            required>
          <template v-if="errors.email">
            <p class="input-error">{{ errors.email[0] }}</p>
          </template>
        </div>

        <!-- Password -->
        <div class="form-group mt-40">
          <label
            for="password"
            class="label">
            {{ $t("forms.labels.password") }}
          </label>
          <input
            id="password"
            v-model="form.password"
            :class="{ 'border-red': errors.password, 'border-green-lightest': !errors.password }"
            type="password"
            name="password"
            class="input-base border"
            required>
          <template v-if="errors.password">
            <p class="input-error">{{ errors.password[0] }}</p>
          </template>
        </div>

        <!-- Password confirmation -->
        <div class="form-group mt-40">
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
            class="input-base border border-green-lightest"
            required>
        </div>

        <!-- Terms -->
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
          :disabled="!terms"
          :class="{ 'btn-disabled': !terms }"
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
import { mapActions } from "vuex";

export default {
  middleware: ["guest"],
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
      terms: false,
      errors: {}
    };
  },
  async asyncData({ app }) {
    return {
      title: app.head.title
    };
  },
  mounted() {
    this.$refs.autofocus.focus();
  },
  methods: {
    ...mapActions({
      getCart: "cart/getCart"
    }),
    async register() {
      if (!this.terms) {
        this.$toast.error(this.$t("toasts.terms"));
        return;
      }

      this.errors = {};

      try {
        let res = await this.$axios.$post("/auth/register", { ...this.form });
        this.$toast.success(`${this.$t("toasts.welcome")} ${res.data.name}!`);
        await this.login();
        this.next();
      } catch (e) {
        this.errors = e.response.data.errors;
        this.$toast.error(this.$t("toasts.validation"));
      }
    },
    async login() {
      await this.$auth.loginWith("local", {
        data: this.form
      });
    },
    next() {
      this.$router.push(this.localePath({ name: "register-success" }));
    }
  }
};
</script>
