<template>
  <main>

    <!-- Header -->
    <AppHeader
      :title="$t('pages.password_reset.title')"
      icon="redo-alt"/>

    <!-- Form -->
    <AppContentSection>
      <form
        class="form__container form__container--narrow"
        @submit.prevent="reset">

        <!-- Email -->
        <div class="form__group form__group--first">
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
            class="form__input">
          <template v-if="errors.email">
            <p class="form__feedback">
              {{ errors.email[0] }}
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
            type="password"
            name="password"
            class="form__input">
          <template v-if="errors.email">
            <p class="form__feedback">
              {{ errors.password[0] }}
            </p>
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
            class="form__input">
        </div>

        <!-- Submit -->
        <button
          type="submit"
          class="button button__primary button--centered button--spaced">
          <font-awesome-icon
            :icon="['far', 'redo-alt']"
            class="button__icon button__icon--small"/>
          {{ $t("buttons.password_reset") }}
        </button>
      </form>
    </AppContentSection>
  </main>
</template>

<script>
import { mapActions } from 'vuex';

import AppHeader from '@/components/headers/AppHeader';
import AppContentSection from '@/components/AppContentSection';

export default {
  middleware: ['guest'],
  head() {
    return {
      title: `${this.$t('pages.password_reset.title')} | ${this.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex'
        }
      ]
    };
  },
  components: {
    AppHeader,
    AppContentSection
  },
  data() {
    return {
      form: {
        token: null,
        email: '',
        password: '',
        password_confirmation: ''
      },
      errors: {}
    };
  },
  asyncData({ app }) {
    return {
      title: app.head.title
    };
  },
  mounted() {
    this.form.token = this.$route.query.token;
  },
  methods: {
    ...mapActions({
      flash: 'alert/flash'
    }),
    async reset() {
      if (!this.form.token) {
        return;
      }

      try {
        const res = await this.$axios.$post('/auth/reset', this.form);
        this.$toast.success(res.message);
        this.flash({ message: res.message, type: 'success' });
        this.$router.push(this.localePath({ name: 'login' }));
      } catch (e) {
        this.errors = e.response.data.errors;

        for (const error in this.errors) {
          this.$toast.error(this.errors[error]);
        }
      }
    }
  }
};
</script>
