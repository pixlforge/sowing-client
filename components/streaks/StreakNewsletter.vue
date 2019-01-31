<template>
  <div class="bg-pink-dark">
    <div class="container">
      <div class="flex items-center">
        
        <div class="hidden lg:block lg:w-1/2 xl:w-1/3">
          <img
            src="~assets/img/newsletter.svg"
            alt=""
            class="block w-4/5">
        </div>
        
        <div class="w-full lg:w-1/2 xl:w-2/3 py-110">
          <h3 class="title-large text-white">
            {{ $t("streaks.newsletter.title") }}
          </h3>
          
          <p class="text-20 xl:text-26 font-semibold text-white text-center lg:text-left mt-30">
            {{ $t("streaks.newsletter.body") }}
          </p>

          <form
            class="relative mt-40"
            @submit.prevent="subscribe">
            
            <div class="flex justify-center lg:justify-start">
              <input
                id="email"
                v-model="email"
                :placeholder="placeholder"
                type="email"
                name="email"
                class="w-350 text-16 rounded-l-lg outline-none focus:shadow-outline pl-15"
                required>

              <button
                type="submit"
                role="button"
                class="btn btn-primary rounded-l-none">
                <font-awesome-icon
                  :icon="['far', 'paper-plane']"
                  class="mr-10"/>
                {{ $t("buttons.subscribe") }}
              </button>
            </div>

            <p
              v-if="errors.email"
              class="absolute w-full text-center lg:text-left text-14 text-white mt-5">
              {{ errors.email[0] }}
            </p>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      errors: {}
    };
  },
  computed: {
    placeholder() {
      return this.$t("streaks.newsletter.placeholder");
    }
  },
  methods: {
    async subscribe() {
      this.errors = {};

      try {
        await this.$axios.$post("/newsletter/subscribe", {
          email: this.email
        });
        this.$toast.success(this.$t("toasts.subscribed"));
        this.email = "";
      } catch (e) {
        this.errors = e.response.data.errors;
        this.$toast.error(this.$t("toasts.validation"));
      }
    }
  }
};
</script>
