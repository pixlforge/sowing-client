<template>
  <div class="streak__background--green">
    <div class="streak__container container">
        
      <div class="streak__illustration-container">
        <img
          src="~assets/img/rocket.svg"
          alt="Illustration representing a rocket"
          class="streak__illustration streak__illustration--register">
      </div>
        
      <div class="streak__content">
        <h3 class="title__large title--white">
          {{ $t("streaks.register.title") }}
        </h3>
          
        <p class="streak__body">
          {{ $t("streaks.register.body") }}
        </p>

        <div class="streak__controls">
          <nuxt-link
            :to="localePath({ name: 'index' })"
            class="button button__secondary">
            <font-awesome-icon
              :icon="['far', 'store']"
              class="mr-10"/>
            {{ $t("buttons.create_my_shop") }}
          </nuxt-link>
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
