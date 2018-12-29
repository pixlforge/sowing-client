<template>
  <div class="bg-green-lightest">
    <div class="container pt-60 pb-100">
      <div class="flex">

        <!-- Name -->
        <div class="relative flex flex-grow items-center">
          <div
            class="w-50 h-50 bg-green rounded-full text-24 font-bold text-white flex justify-center items-center cursor-pointer"
            @click.prevent="toShopCreatorName">
            1
          </div>
          <div
            :class="{ 'bg-green': stepName, 'bg-white': !stepName }"
            class="h-3 flex-grow"/>
          <div
            class="absolute pin-b step-1 text-16 font-semibold text-green cursor-pointer"
            @click.prevent="toShopCreatorName">
            Nommez votre boutique
          </div>
        </div>

        <!-- Details -->
        <div class="relative flex flex-grow items-center">
          <div
            :class="{ 'bg-green': stepName, 'bg-white': !stepName, 'text-white': stepName, 'text-grey-lightest': !stepName }"
            class="w-50 h-50 rounded-full text-24 font-bold flex justify-center items-center cursor-pointer"
            @click.prevent="toShopCreatorDetails">
            2
          </div>
          <div
            :class="{ 'bg-green': stepDetails, 'bg-white': !stepDetails }"
            class="h-3 flex-grow"/>
          <div
            :class="{ 'text-green': stepName, 'text-grey-lightest': !stepName }"
            class="absolute pin-b step-2 text-16 font-semibold cursor-pointer"
            @click.prevent="toShopCreatorDetails">
            Détails de votre boutique
          </div>
        </div>

        <!-- Customize -->
        <div class="relative flex flex-grow items-center">
          <div
            :class="{ 'bg-green': stepDetails, 'bg-white': !stepDetails, 'text-white': stepDetails, 'text-grey-lightest': !stepDetails }"
            class="w-50 h-50 rounded-full text-24 font-bold flex justify-center items-center cursor-pointer"
            @click.prevent="toShopCreatorCustomization">
            3
          </div>
          <div
            :class="{ 'bg-green': stepCustomization, 'bg-white': !stepCustomization }"
            class="h-3 flex-grow"/>
          <div
            :class="{ 'text-green': stepDetails, 'text-grey-lightest': !stepDetails }"
            class="absolute pin-b step-3 text-16 font-semibold cursor-pointer"
            @click.prevent="toShopCreatorCustomization">
            Personnalisez votre boutique
          </div>
        </div>

        <!-- Done -->
        <div class="relative flex items-center">
          <div
            :class="{ 'bg-green': stepCustomization, 'bg-white': !stepCustomization, 'text-white': stepCustomization, 'text-grey-lightest': !stepCustomization }"
            class="w-50 h-50 rounded-full text-24 font-bold flex justify-center items-center cursor-pointer"
            @click.prevent="toShopCreatorDone">
            4
          </div>
          <div
            :class="{ 'text-green': stepCustomization, 'text-grey-lightest': !stepCustomization }"
            class="absolute pin-b step-4 text-16 font-semibold nowrap cursor-pointer"
            @click.prevent="toShopCreatorDone">
            Terminé!
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      stepName: "shop/stepName",
      stepDetails: "shop/stepDetails",
      stepCustomization: "shop/stepCustomization"
    })
  },
  methods: {
    toShopCreatorName() {
      this.$router.push(this.localePath({ name: "shop-creator-name" }));
    },
    toShopCreatorDetails() {
      if (this.stepName) {
        this.$router.push(this.localePath({ name: "shop-creator-details" }));
      }
    },
    toShopCreatorCustomization() {
      if (this.stepName && this.stepDetails) {
        this.$router.push(
          this.localePath({ name: "shop-creator-customization" })
        );
      }
    },
    toShopCreatorDone() {
      if (this.stepName && this.stepDetails && this.stepCustomization)
        this.$router.push(this.localePath({ name: "shop-creator-done" }));
    }
  }
};
</script>

<style scoped>
.step-1,
.step-2,
.step-3 {
  transform: translate(-35%, 3rem);
}

.step-4 {
  transform: translate(-10%, 3rem);
}
</style>

