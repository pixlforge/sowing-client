<template>
  <div class="bg-green">
    <div class="container">
      <div class="flex items-center">
        
        <div class="hidden lg:block lg:w-1/2 xl:w-1/3">
          <img
            src="~assets/img/rocket.svg"
            alt=""
            class="block w-full">
        </div>
        
        <div class="w-full lg:w-1/2 xl:w-2/3 py-110">
          <h3 class="font-cafe text-36 xl:text-48 text-center lg:text-left font-bold text-white">
            {{ $t("components.streaks.register.title") }}
          </h3>
          
          <p class="text-22 xl:text-26 font-semibold text-white text-center lg:text-left mt-30">
            {{ $t("components.streaks.register.body") }}
          </p>

          <div class="flex justify-center lg:justify-start mt-40">
            <nuxt-link
              :to="localePath({ name: 'index' })"
              class="btn btn-secondary">
              <font-awesome-icon
                :icon="['far', 'store']"
                class="mr-10"/>
              {{ $t("components.streaks.register.button") }}
            </nuxt-link>
          </div>
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
  }
};
</script>

