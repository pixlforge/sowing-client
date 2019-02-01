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
    <section class="container section mt-150">
      <form
        class="max-w-500 mx-auto"
        @submit.prevent="login">

        <!-- Email -->
        <div class="form-group">
          <label
            for="email"
            class="label">
            {{ $t("forms.labels.email") }}
          </label>
          <input
            id="email"
            ref="autofocus"
            v-model="form.email"
            :class="{ 'border-red': errors.email, 'border-green-lightest': !errors.email }"
            type="email"
            name="email"
            class="input-base border"
            required
            autofocus>
          <template v-if="errors.email">
            <p class="input-error">{{ errors.email[0] }}</p>
          </template>
        </div>

        <!-- Password -->
        <div class="form-group mt-40">
          <label
            for="password"
            class="label">
            {{ $t("forms.labels.password") }}
          </label>
          <input
            id="password"
            v-model="form.password"
            :class="{ 'border-red': errors.password, 'border-green-lightest': !errors.password }"
            type="password"
            name="password"
            class="input-base border"
            required>
          <template v-if="errors.password">
            <p class="input-error">{{ errors.password[0] }}</p>
          </template>
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
