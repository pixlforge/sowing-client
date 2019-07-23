<template>
  <main>

    <!-- Header -->
    <AppHeader
      :title="$t('pages.password_email.title')"
      icon="redo-alt"/>

    <!-- Content -->
    <AppContentSection>
      <AppTitle
        semantic="h1"
        visual="main">
        {{ $t("pages.password_email.paragraphs.first") }}
      </AppTitle>

      <p class="paragraph__large  paragraph--center">
        {{ $t("pages.password_email.paragraphs.second") }}
      </p>

      <!-- Form -->
      <form
        class="form__container form__container--narrow"
        @submit.prevent="send">

        <!-- Email -->
        <div>
          <label
            for="email"
            class="form__label">
            {{ $t("forms.labels.email") }}
          </label>
          <input
            id="email"
            v-model="email"
            :class="{ 'border-red': errors.email }"
            type="email"
            name="email"
            class="form__input">
          <template v-if="errors.email">
            <p class="form__feedback">
              {{ errors.email }}
            </p>
          </template>
        </div>

        <!-- Submit -->
        <button
          type="submit"
          class="button button__primary button--centered button--spaced">
          <font-awesome-icon
            :icon="['far', 'redo-alt']"
            class="button__icon button__icon--small"/>
          {{ $t("buttons.password_email") }}
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
      title: `${this.$t('pages.password_email.title')} | ${this.title}`,
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
    AppTitle,
    AppHeader,
    AppContentSection
  },
  data() {
    return {
      email: '',
      errors: {}
    };
  },
  asyncData({ app }) {
    return {
      title: app.head.title
    };
  },
  methods: {
    ...mapActions({
      flash: 'alert/flash'
    }),
    async send() {
      try {
        const res = await this.$axios.$post('/auth/forgot', { email: this.email });
        this.$toast.success(res.message);
        this.flash({ message: res.message, type: 'success' });
        this.$router.push(this.localePath({ name: 'login' }));
      } catch (e) {
        this.errors = e.response.data.errors;
        this.$toast.error(this.errors.email);
      }
    }
  }
};
</script>
