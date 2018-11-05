<template>
  <main>
    <Header>
      <template slot="icon">
        <font-awesome-icon :icon="['far', 'redo-alt']"/>
      </template>
      <template slot="title">
        <h1 class="header-title">{{ $t("pages.password_email.title") }}</h1>
      </template>
    </Header>
    <div class="container py-100">

      <p class="w-full md:w-3/4 lg:w-2/3 xxl:w-1/2 text-base text-center leading-normal mx-auto">
        {{ $t("pages.password_email.paragraphs.first") }}
      </p>

      <p class="w-full md:w-3/4 lg:w-2/3 xxl:w-1/2 text-base text-center leading-normal mx-auto mt-10">
        {{ $t("pages.password_email.paragraphs.second") }}
      </p>

      <Card class="w-full md:w-3/4 lg:w-2/3 xxl:w-1/2 mx-auto mt-40">
        <form @submit.prevent="send">

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
              {{ $t("components.forms.buttons.password_email") }}
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
      title: `${this.title} | ${this.$t("pages.password_email.title")}`
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
    async send() {
      this.$router.push(this.localePath({ name: "password-reset" }));
    }
  }
};
</script>

