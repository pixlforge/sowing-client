<template>
  <main>

    <!-- Header -->
    <Header>
      <template slot="icon">
        <font-awesome-icon :icon="['far', 'key']"/>
      </template>
      <template slot="title">
        <h1 class="header__title">{{ $t("pages.login.title") }}</h1>
      </template>
    </Header>
    
    <!-- Form -->
    <section class="section__container container">
      <form
        class="form__container form__container--narrow"
        @submit.prevent="login">

        <!-- Email -->
        <div class="form__group form__group--first">
          <label
            for="email"
            class="form__label">
            {{ $t("forms.labels.email") }}
          </label>
          <input
            id="email"
            ref="autofocus"
            v-model="form.email"
            :class="{ 'border-red': errors.email }"
            type="email"
            name="email"
            class="form__input"
            required
            autofocus>
          <template v-if="errors.email">
            <p class="form__feedback">{{ errors.email }}</p>
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
            <p class="form__feedback">{{ errors.password }}</p>
          </template>
        </div>

        <div class="form__links">
          
          <!-- Password forgotten -->
          <nuxt-link
            :to="localePath({ name: 'password-forgot' })"
            class="form__link form__link--first">
            {{ $t("pages.login.links.password") }}
          </nuxt-link>

          <!-- Register an account -->
          <nuxt-link
            :to="localePath({ name: 'register' })"
            class="form__link">
            {{ $t("pages.login.links.register") }}
          </nuxt-link>
        </div>
          
        <!-- Submit -->
        <button
          type="submit"
          class="button button__primary button--centered button--spaced">
          <font-awesome-icon
            :icon="['far', 'key']"
            class="button__icon button__icon--small"/>
          {{ $t("buttons.connection") }}
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
      title: `${this.title} | ${this.$t("pages.login.title")}`
    };
  },
  components: {
    Header
  },
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
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
    async login() {
      this.errors = {};

      try {
        await this.$auth.loginWith("local", {
          data: this.form
        });

        if (this.$route.query.redirect) {
          this.$router.push(this.$route.query.redirect);
        } else {
          this.$router.push(this.localePath({ name: "index" }));
        }

        this.$toast.success(
          `${this.$t("toasts.welcome")}, ${this.$auth.user.name}!`
        );

        await this.getCart();
      } catch (e) {
        this.errors = e.response.data.errors;
        this.$toast.error(this.$t("toasts.validation"));
      }
    }
  }
};
</script>
