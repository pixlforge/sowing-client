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

    <!-- Form -->
    <section class="section__container container">
      <form
        class="form__container form__container--narrow"
        @submit.prevent="register">

        <!-- Name -->
        <div class="form__group form__group--first">
          <label
            for="name"
            class="form__label">
            {{ $t("forms.labels.name") }}
          </label>
          <input
            id="name"
            ref="autofocus"
            v-model="form.name"
            :class="{ 'border-red': errors.name }"
            type="text"
            name="name"
            class="form__input"
            required
            autofocus>
          <template v-if="errors.name">
            <p class="form__feedback">{{ errors.name[0] }}</p>
          </template>
        </div>

        <!-- Email -->
        <div class="form__group">
          <label
            for="email"
            class="form__label">
            {{ $t("forms.labels.email") }}
          </label>
          <input
            id="email"
            v-model="form.email"
            :class="{ 'border-red': errors.email }"
            type="email"
            name="email"
            class="form__input"
            required>
          <template v-if="errors.email">
            <p class="form__feedback">{{ errors.email[0] }}</p>
          </template>
        </div>

        <!-- Password -->
        <div class="form__group">
          <label
            for="password"
            class="form__label">
            {{ $t("forms.labels.password") }}
          </label>
          <input
            id="password"
            v-model="form.password"
            :class="{ 'border-red': errors.password }"
            type="password"
            name="password"
            class="form__input"
            required>
          <template v-if="errors.password">
            <p class="form__feedback">{{ errors.password[0] }}</p>
          </template>
        </div>

        <!-- Password confirmation -->
        <div class="form__group">
          <label
            for="password_confirmation"
            class="form__label">
            {{ $t("forms.labels.password_confirmation") }}
          </label>
          <input
            id="password_confirmation"
            v-model="form.password_confirmation"
            type="password"
            name="password_confirmation"
            class="form__input"
            required>
        </div>

        <!-- Terms -->
        <div class="form__checkbox-group">
          <label for="terms">
            <input
              id="terms"
              v-model="terms"
              type="checkbox"
              name="terms"
              class="form__checkbox-input">
            <span class="form__checkbox-label">{{ $t("pages.register.terms") }}</span>
            <nuxt-link
              :to="localePath({ name: 'index' })"
              class="form__checkbox-link">{{ $t("pages.register.links.terms") }}</nuxt-link>.
          </label>
        </div>
          
        <!-- Submit -->
        <button
          :disabled="missingCredentials"
          :class="{ 'button__disabled': missingCredentials }"
          type="submit"
          class="button button__primary button--centered button--spaced">
          <font-awesome-icon
            :icon="['far', 'user']"
            class="button__icon button__icon--small"/>
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
      title: `${this.$t("pages.register.title")} | ${this.title}`
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
  computed: {
    missingCredentials() {
      return !this.form.name ||
        !this.form.email ||
        this.form.password.length < 8 ||
        this.form.password_confirmation.length < 8 ||
        !this.terms;
    }
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
