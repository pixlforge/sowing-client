<template>
  <div class="bg-green-lightest">
    <div class="container pt-60 pb-60 lg:pb-80">
      <div class="flex">

        <!-- Name -->
        <div class="relative flex flex-grow items-center">
          <div
            :class="bgTheme"
            class="w-50 h-50 rounded-full text-24 font-bold text-white flex justify-center items-center cursor-pointer"
            @click.prevent="toShopCreatorName">
            1
          </div>
          <div
            :class="stepName ? bgTheme : 'bg-white'"
            class="h-3 flex-grow"/>
          <div
            :class="textTheme"
            class="hidden lg:block w-110 absolute pin-b step-1 text-16 text-center font-semibold cursor-pointer"
            @click.prevent="toShopCreatorName">
            {{ $t("shop_creator.navigation.name") }}
          </div>
        </div>

        <!-- Details -->
        <div class="relative flex flex-grow items-center">
          <div
            :class="stepName ? `${bgTheme} text-white` : 'bg-white text-grey-lightest'"
            class="w-50 h-50 rounded-full text-24 font-bold flex justify-center items-center cursor-pointer"
            @click.prevent="toShopCreatorDetails">
            2
          </div>
          <div
            :class="stepDetails ? bgTheme : 'bg-white'"
            class="h-3 flex-grow"/>
          <div
            :class="stepName ? textTheme : 'text-grey-lightest'"
            class="hidden lg:block w-110 absolute pin-b step-2 text-16 text-center font-semibold cursor-pointer"
            @click.prevent="toShopCreatorDetails">
            {{ $t("shop_creator.navigation.details") }}
          </div>
        </div>

        <!-- Customize -->
        <div class="relative flex flex-grow items-center">
          <div
            :class="stepDetails ? `${bgTheme} text-white` : 'bg-white text-grey-lightest'"
            class="w-50 h-50 rounded-full text-24 font-bold flex justify-center items-center cursor-pointer"
            @click.prevent="toShopCreatorCustomization">
            3
          </div>
          <div
            :class="stepCustomization ? bgTheme : 'bg-white'"
            class="h-3 flex-grow"/>
          <div
            :class="stepDetails ? textTheme : 'text-grey-lightest'"
            class="hidden lg:block w-110 absolute pin-b step-3 text-16 text-center font-semibold cursor-pointer"
            @click.prevent="toShopCreatorCustomization">
            {{ $t("shop_creator.navigation.customize") }}
          </div>
        </div>

        <!-- Connect -->
        <div class="relative flex flex-grow items-center">
          <div
            :class="stepCustomization ? `${bgTheme} text-white` : 'bg-white text-grey-lightest'"
            class="w-50 h-50 rounded-full text-24 font-bold flex justify-center items-center cursor-pointer"
            @click.prevent="toShopCreatorConnect">
            4
          </div>
          <div
            :class="stepConnect ? bgTheme : 'bg-white'"
            class="h-3 flex-grow"/>
          <div
            :class="stepCustomization ? textTheme : 'text-grey-lightest'"
            class="hidden lg:block w-110 absolute pin-b step-3 text-16 text-center font-semibold cursor-pointer"
            @click.prevent="toShopCreatorConnect">
            {{ $t("shop_creator.navigation.connect") }}
          </div>
        </div>

        <!-- Done -->
        <div class="relative flex items-center">
          <div
            :class="stepConnect ? `${bgTheme} text-white` : 'bg-white text-grey-lightest'"
            class="w-50 h-50 rounded-full text-24 font-bold flex justify-center items-center cursor-pointer"
            @click.prevent="toShopCreatorDone">
            5
          </div>
          <div
            :class="stepConnect ? textTheme : 'text-grey-lightest'"
            class="hidden lg:block w-110 absolute pin-b step-5 text-16 text-center font-semibold cursor-pointer"
            @click.prevent="toShopCreatorDone">
            {{ $t("shop_creator.navigation.done") }}
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      stepName: "shop/stepName",
      stepDetails: "shop/stepDetails",
      stepCustomization: "shop/stepCustomization",
      stepConnect: "shop/stepConnect",
      shopTheme: "shop/shopTheme"
    }),
    bgTheme() {
      return `bg-${this.shopTheme}`;
    },
    textTheme() {
      return `text-${this.shopTheme}`;
    }
  },
  methods: {
    ...mapActions({
      close: "alert/close"
    }),
    toShopCreatorName() {
      this.close();
      this.$router.push(this.localePath({ name: "shop-creator-name" }));
    },
    toShopCreatorDetails() {
      if (this.stepName) {
        this.close();
        this.$router.push(this.localePath({ name: "shop-creator-details" }));
      }
    },
    toShopCreatorCustomization() {
      if (this.stepName && this.stepDetails) {
        this.close();
        this.$router.push(
          this.localePath({ name: "shop-creator-customization" })
        );
      }
    },
    toShopCreatorConnect() {
      if (this.stepName && this.stepDetails && this.stepCustomization) {
        this.close();
        this.$router.push(this.localePath({ name: "shop-creator-connect" }));
      }
    },
    toShopCreatorDone() {
      if (
        this.stepName &&
        this.stepDetails &&
        this.stepCustomization &&
        this.stepConnect
      ) {
        this.close();
        this.$router.push(this.localePath({ name: "shop-creator-done" }));
      }
    }
  }
};
</script>

<style scoped>
.step-1,
.step-2,
.step-3,
.step-4,
.step-5 {
  transform: translate(-25%, 3rem);
}
</style>
