<template>
  <main>

    <!-- Header -->
    <Header>
      <template slot="icon">
        <font-awesome-icon :icon="['far', 'redo-alt']"/>
      </template>
      <template slot="title">
        <h1 class="header__title">{{ $t("pages.password_email.title") }}</h1>
      </template>
    </Header>
    
    <!-- Content -->
    <section class="section__container container">
      <h2 class="title__main title--center">
        {{ $t("pages.password_email.paragraphs.first") }}
      </h2>

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
            <p class="form__feedback">{{ errors.email }}</p>
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
    </section>
  </main>
</template>

<script>
import Header from "@/components/Header";

export default {
  middleware: ["guest"],
  head() {
    return {
      title: `${this.title} | ${this.$t("pages.password_email.title")}`
    };
  },
  components: {
    Header
  },
  data() {
    return {
      email: "",
      errors: {}
    };
  },
  async asyncData({ app }) {
    return {
      title: app.head.title
    };
  },
  methods: {
    async send() {
      try {
        let res = await this.$axios.$post('/auth/forgot', { email: this.email });
        this.$toast.success(res.message);
        this.$router.push(this.localePath({ name: 'login' }));
      } catch (e) {
        this.errors = e.response.data.errors;
        this.$toast.error(this.errors.email);
      }
    }
  }
};
</script>
