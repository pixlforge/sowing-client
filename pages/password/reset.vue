<template>
  <main>
    <Header>
      <template slot="icon">
        <font-awesome-icon :icon="['far', 'redo-alt']"/>
      </template>
      <template slot="title">
        <h1 class="header-title">{{ $t("pages.password_reset.title") }}</h1>
      </template>
    </Header>
    <div class="container py-100">
      <Card class="w-full md:w-3/4 lg:w-2/3 xxl:w-1/2 mx-auto">
        <form @submit.prevent="reset">

          <!-- Email -->
          <div>
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

          <!-- Password confirmation -->
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

          <div class="flex justify-center mt-40">
            
            <!-- Submit -->
            <button
              type="submit"
              class="btn btn-primary">
              <font-awesome-icon
                :icon="['far', 'redo-alt']"
                class="mr-10"/>
              {{ $t("components.forms.buttons.password_reset") }}
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
      title: `${this.title} | ${this.$t("pages.password_reset.title")}`
    };
  },
  components: {
    Card,
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

