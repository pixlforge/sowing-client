<template>
  <div class="streak__background--pink">
    <div class="streak__container container">
        
      <div class="streak__illustration-container">
        <img
          src="~assets/img/newsletter.svg"
          alt="Illustration representing a newsletter"
          class="streak__illustration streak__illustration--newsletter">
      </div>
        
      <div class="streak__content">
        <h3 class="title__main title--white">
          {{ $t("streaks.newsletter.title") }}
        </h3>
          
        <p class="streak__body">
          {{ $t("streaks.newsletter.body") }}
        </p>

        <form
          class="relative"
          @submit.prevent="subscribe">
            
          <div class="streak__controls">
            <input
              id="email"
              v-model="email"
              :placeholder="placeholder"
              type="email"
              name="email"
              class="form__input form__input--grouped"
              required>

            <button
              type="submit"
              role="button"
              class="button button__primary button--grouped">
              <font-awesome-icon
                :icon="['far', 'paper-plane']"
                class="mr-10"/>
              {{ $t("buttons.subscribe") }}
            </button>
          </div>

          <p
            v-if="errors.email"
            class="form__feedback form__feedback--white form__feedback--centered">
            {{ errors.email[0] }}
          </p>
        </form>
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
