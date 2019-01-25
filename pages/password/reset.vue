<template>
  <main>

    <!-- Header -->
    <Header>
      <template slot="icon">
        <font-awesome-icon :icon="['far', 'redo-alt']"/>
      </template>
      <template slot="title">
        <h1 class="header-title">{{ $t("pages.password_reset.title") }}</h1>
      </template>
    </Header>
    
    <!-- Form -->
    <section class="container py-100">

      <form
        class="max-w-500 mx-auto"
        @submit.prevent="reset">

        <!-- Email -->
        <div>
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

        <!-- Password confirmation -->
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

        <!-- Submit -->
        <button
          type="submit"
          class="btn btn-primary mx-auto mt-40">
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
