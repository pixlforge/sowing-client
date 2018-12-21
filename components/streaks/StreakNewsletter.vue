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
            {{ $t("components.streaks.newsletter.title") }}
          </h3>
          
          <p class="text-20 xl:text-26 font-semibold text-white text-center lg:text-left mt-30">
            {{ $t("components.streaks.newsletter.body") }}
          </p>

          <form
            class="flex justify-center lg:justify-start mt-40"
            @submit.prevent>
            <input
              id="email"
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
              {{ $t("components.streaks.newsletter.button") }}
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/buttons/Button";

export default {
  components: {
    Button
  },
  computed: {
    placeholder() {
      return this.$t("components.streaks.newsletter.placeholder");
    }
  }
};
</script>

