<template>
  <main>

    <!-- Header -->
    <Header>
      <template slot="icon">
        <font-awesome-icon :icon="['far', 'redo-alt']"/>
      </template>
      <template slot="title">
        <h1 class="header__title">{{ $t("pages.password_reset.title") }}</h1>
      </template>
    </Header>
    
    <!-- Form -->
    <section class="section__container container">
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
            type="email"
            name="email"
            class="form__input">
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
            class="mr-10"/>
          {{ $t("buttons.password_reset") }}
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
      title: `${this.title} | ${this.$t("pages.password_reset.title")}`
    };
  },
  components: {
    Header
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
        password_confirmation: ""
      }
    };
  },
  async asyncData({ app }) {
    return {
      title: app.head.title
    };
  },
  methods: {
    async reset() {
      console.log("reset");
    }
  }
};
</script>
