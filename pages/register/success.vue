<template>
  <main>
    <section class="container py-100">

      <!-- Success message -->
      <div class="w-full sm:w-2/3 xl:w-1/2 flex flex-col lg:flex-row px-20 md:px-0 mx-auto">
        <div class="w-full lg:w-auto flex justify-center">
          <font-awesome-icon
            :icon="['far', 'check-circle']"
            class="text-72 text-green"/>
        </div>
        <div class="mx-auto mt-40 lg:mt-0">
          <h1 class="text-48 text-green text-center lg:text-left">Félicitations</h1>
          <p class="text-24 font-semibold text-green-darkest text-center lg:text-left">Votre compte a été créé avec succès!</p>
        </div>
      </div>
      
      <!-- Illustration -->
      <div class="w-full sm:w-2/3 xl:w-1/2 px-20 md:px-0 mx-auto mt-100">
        <img
          src="~assets/img/success_smiley.svg"
          alt=""
          class="select-none">
      </div>

    </section>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.title} | ${this.$t("pages.register_success.title")}`
    };
  },
  async asyncData({ app }) {
    return {
      title: app.head.title
    };
  }
};
</script>

