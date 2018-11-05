<template>
  <main>
    <Header>
      <template slot="icon">
        <font-awesome-icon :icon="['far', 'user-plus']"/>
      </template>
      <template slot="title">
        <h1 class="header-title">{{ $t("pages.register.title") }}</h1>
      </template>
    </Header>
    <div class="container py-100">
      <Card class="w-full md:w-3/4 lg:w-2/3 xxl:w-1/2 mx-auto">
        <form @submit.prevent="register">

          <!-- Name -->
          <div>
            <label
              for="name"
              class="label">
              {{ $t("components.forms.labels.name") }}
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
              {{ $t("components.forms.labels.email") }}
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
              {{ $t("components.forms.labels.password") }}
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
              {{ $t("components.forms.labels.password_confirmation") }}
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
                v-model="form.terms"
                type="checkbox"
                name="terms"
                class="text-20 mr-10">
              <span class="text-14 text-grey-lighter select-none cursor-pointer">{{ $t("pages.register.terms") }}</span>
              <nuxt-link
                :to="localePath({ name: 'index' })"
                class="text-14 text-green no-underline hover:underline select-none">{{ $t("pages.register.links.terms") }}</nuxt-link>.
            </label>
          </div>

          <div class="flex justify-center mt-40">
            
            <!-- Submit -->
            <button
              type="submit"
              class="btn btn-primary">
              <font-awesome-icon
                :icon="['far', 'user']"
                class="mr-10"/>
              {{ $t("components.forms.buttons.register") }}
            </button>
          </div>
        </form>
      </Card>
    </div>
  </main>
</template>

<script>
import Card from "@/components/cards/Card";
import Header from "@/components/Header";

export default {
  head() {
    return {
      title: `${this.title} | ${this.$t("pages.register.title")}`
    };
  },
  components: {
    Card,
    Header
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        terms: false
      }
    };
  },
  async asyncData({ app }) {
    return {
      title: app.head.title
    };
  },
  methods: {
    async register() {
      this.$router.push(this.localePath({ name: "register-success" }));
    }
  }
};
</script>

