<template>
  <main>
    <Header>
      <template slot="icon">
        <font-awesome-icon :icon="['far', 'lock-alt']"/>
      </template>
      <template slot="title">
        <h1 class="header-title">{{ $t("pages.login.title") }}</h1>
      </template>
    </Header>
    <div class="container py-100">
      <Card class="w-1/2 mx-auto">
        <form @submit.prevent="login">

          <!-- Email -->
          <div>
            <label
              for="email"
              class="label">
              {{ $t("components.forms.labels.email") }}
            </label>
            <input
              id="email"
              type="email"
              name="email"
              class="input-base"
              required>
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
              type="password"
              name="password"
              class="input-base"
              required>
          </div>

          <div class="flex justify-center mt-40">
            
            <!-- Password forgotten -->
            <nuxt-link
              :to="localePath({ name: 'index' })"
              class="link-small mr-20">
              {{ $t("pages.login.links.password") }}
            </nuxt-link>

            <!-- Register an account -->
            <nuxt-link
              :to="localePath({ name: 'register' })"
              class="link-small">
              {{ $t("pages.login.links.register") }}
            </nuxt-link>
          </div>

          <div class="flex justify-center mt-20">
            
            <!-- Submit -->
            <button
              type="submit"
              class="btn btn-primary">
              <font-awesome-icon
                :icon="['far', 'rocket']"
                class="mr-10"/>
              {{ $t("components.forms.buttons.connection") }}
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
      title: `${this.title} | ${this.$t("pages.login.title")}`
    };
  },
  components: {
    Card,
    Header
  },
  async asyncData({ app }) {
    return {
      title: app.head.title
    };
  },
  methods: {
    async login() {
      console.log("login");
    }
  }
};
</script>

