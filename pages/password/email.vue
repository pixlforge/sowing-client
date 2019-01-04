<template>
  <main>

    <!-- Header -->
    <Header>
      <template slot="icon">
        <font-awesome-icon :icon="['far', 'redo-alt']"/>
      </template>
      <template slot="title">
        <h1 class="header-title">{{ $t("pages.password_email.title") }}</h1>
      </template>
    </Header>
    
    <section class="container py-100">

      <p class="w-full md:w-3/4 lg:w-2/3 xxl:w-1/2 text-16 text-center leading-normal mx-auto">
        {{ $t("pages.password_email.paragraphs.first") }}
      </p>

      <p class="w-full md:w-3/4 lg:w-2/3 xxl:w-1/2 text-16 text-center leading-normal mx-auto mt-10">
        {{ $t("pages.password_email.paragraphs.second") }}
      </p>

      <!-- Form -->
      <form
        class="card-form mt-40"
        @submit.prevent="send">

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
          
        <!-- Submit -->
        <button
          type="submit"
          class="btn btn-primary mx-auto mt-40">
          <font-awesome-icon
            :icon="['far', 'redo-alt']"
            class="mr-10"/>
          {{ $t("components.forms.buttons.password_email") }}
        </button>

      </form>
    </section>

  </main>
</template>

<script>
import Header from "@/components/Header";

export default {
  head() {
    return {
      title: `${this.title} | ${this.$t("pages.password_email.title")}`
    };
  },
  components: {
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
