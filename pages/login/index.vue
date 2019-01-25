<template>
  <main>

    <!-- Header -->
    <Header>
      <template slot="icon">
        <font-awesome-icon :icon="['far', 'key']"/>
      </template>
      <template slot="title">
        <h1 class="header-title">{{ $t("pages.login.title") }}</h1>
      </template>
    </Header>
    
    <!-- Form -->
    <section class="container py-100">
      <form
        class="card-form max-w-500"
        @submit.prevent="login">

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
            class="input-base"
            required>
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
            class="input-base"
            required>
        </div>

        <div class="flex justify-center mt-40">
          
          <!-- Password forgotten -->
          <nuxt-link
            :to="localePath({ name: 'password-email' })"
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
          
        <!-- Submit -->
        <button
          type="submit"
          class="btn btn-primary mx-auto mt-40">
          <font-awesome-icon
            :icon="['far', 'key']"
            class="mr-10"/>
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
      }
    };
  },
  async asyncData({ app }) {
    return {
      title: app.head.title
    };
  },
  methods: {
    ...mapActions({
      getCart: "cart/getCart"
    }),
    async login() {
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
    }
  }
};
</script>
