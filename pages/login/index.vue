<template>
  <main>

    <!-- Header -->
    <AppHeader>
      <template slot="icon">
        <font-awesome-icon :icon="['far', 'key']"/>
      </template>
      <template slot="title">
        <AppTitle
          semantic="h1"
          visual="header">
          {{ $t("pages.login.title") }}
        </AppTitle>
      </template>
    </AppHeader>

    <!-- Form -->
    <AppContentSection>
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
            <p class="form__feedback">
              {{ errors.email }}
            </p>
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
            <p class="form__feedback">
              {{ errors.password }}
            </p>
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
          :class="{ 'button__disabled': missingCredentials }"
          :disabled="missingCredentials"
          type="submit"
          class="button button__primary button--centered button--spaced">
          <font-awesome-icon
            :icon="['far', 'key']"
            class="button__icon button__icon--small"/>
          {{ $t("buttons.connection") }}
        </button>
      </form>
    </AppContentSection>
  </main>
</template>

<script>
import { mapActions } from 'vuex';

import AppTitle from '@/components/AppTitle';
import AppHeader from '@/components/headers/AppHeader';
import AppContentSection from '@/components/AppContentSection';

export default {
  middleware: ['guest'],
  head() {
    return {
      title: `${this.$t('pages.login.title')} | ${this.title}`
    };
  },
  components: {
    AppTitle,
    AppHeader,
    AppContentSection
  },
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      errors: {}
    };
  },
  computed: {
    missingCredentials() {
      return !this.form.email || this.form.password.length < 8;
    }
  },
  asyncData({ app }) {
    return {
      title: app.head.title
    };
  },
  mounted() {
    this.$refs.autofocus.focus();
  },
  methods: {
    ...mapActions({
      getCart: 'cart/getCart'
    }),
    async login() {
      this.errors = {};

      try {
        await this.$auth.loginWith('local', {
          data: this.form
        });

        if (this.$route.query.redirect) {
          this.$router.push(this.$route.query.redirect);
        } else {
          this.$router.push(this.localePath({ name: 'index' }));
        }

        this.$toast.success(
          `${this.$t('toasts.welcome')}, ${this.$auth.user.name}!`
        );

        await this.getCart();
      } catch (e) {
        this.errors = e.response.data.errors;
        this.$toast.error(this.errors.email);
      }
    }
  }
};
</script>
