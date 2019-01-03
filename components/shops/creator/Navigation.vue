<template>
  <div class="bg-green-lightest">
    <div class="container pt-60 pb-100">
      <div class="flex">

        <!-- Name -->
        <div class="relative flex flex-grow items-center">
          <div
            :style="`background-color: ${shopTheme}`"
            class="w-50 h-50 rounded-full text-24 font-bold text-white flex justify-center items-center cursor-pointer"
            @click.prevent="toShopCreatorName">
            1
          </div>
          <template v-if="stepName">
            <div
              :style="`background-color: ${shopTheme}`"
              class="h-3 flex-grow"/>
          </template>
          <template v-else>
            <div class="h-3 bg-white flex-grow"/>
          </template>
          <div
            :style="`color: ${shopTheme}`"
            class="absolute pin-b step-1 text-16 font-semibold cursor-pointer"
            @click.prevent="toShopCreatorName">
            {{ $t("shop_creator.navigation.name") }}
          </div>
        </div>

        <!-- Details -->
        <div class="relative flex flex-grow items-center">
          <template v-if="stepName">
            <div
              :style="`background-color: ${shopTheme};`"
              class="w-50 h-50 text-white rounded-full text-24 font-bold flex justify-center items-center cursor-pointer"
              @click.prevent="toShopCreatorDetails">
              2
            </div>
          </template>
          <template v-else>
            <div class="w-50 h-50 bg-white text-grey-lightest rounded-full text-24 font-bold flex justify-center items-center cursor-pointer">
              2
            </div>
          </template>
          <template v-if="stepDetails">
            <div
              :style="`background-color: ${shopTheme}`"
              class="h-3 flex-grow"/>
          </template>
          <template v-else>
            <div class="h-3 bg-white flex-grow"/>
          </template>
          <template v-if="stepName">
            <div
              :style="`color: ${shopTheme};`"
              class="absolute pin-b step-2 text-16 font-semibold cursor-pointer"
              @click.prevent="toShopCreatorDetails">
              {{ $t("shop_creator.navigation.details") }}
            </div>
          </template>
          <template v-else>
            <div class="absolute pin-b step-2 text-16 font-semibold text-grey-lightest text-grey-lightest cursor-pointer">
              {{ $t("shop_creator.navigation.details") }}
            </div>
          </template>
        </div>

        <!-- Customize -->
        <div class="relative flex flex-grow items-center">
          <template v-if="stepDetails">
            <div
              :style="`background-color: ${shopTheme}`"
              class="w-50 h-50 text-white rounded-full text-24 font-bold flex justify-center items-center cursor-pointer"
              @click.prevent="toShopCreatorCustomization">
              3
            </div>
          </template>
          <template v-else>
            <div class="w-50 h-50 bg-white text-grey-lightest rounded-full text-24 font-bold flex justify-center items-center cursor-pointer">
              3
            </div>
          </template>
          <template v-if="stepCustomization">
            <div
              :style="`background-color: ${shopTheme}`"
              class="h-3 flex-grow"/>
          </template>
          <template v-else>
            <div class="h-3 bg-white flex-grow"/>
          </template>
          <template v-if="stepDetails">
            <div
              :style="`color: ${shopTheme};`"
              class="absolute pin-b step-2 text-16 font-semibold cursor-pointer"
              @click.prevent="toShopCreatorCustomization">
              {{ $t("shop_creator.navigation.customize") }}
            </div>
          </template>
          <template v-else>
            <div class="absolute pin-b step-3 text-16 font-semibold text-grey-lightest text-grey-lightest cursor-pointer">
              {{ $t("shop_creator.navigation.customize") }}
            </div>
          </template>
        </div>

        <!-- Done -->
        <div class="relative flex items-center">
          <template v-if="stepCustomization">
            <div
              :style="`background-color: ${shopTheme}`"
              class="w-50 h-50 text-white rounded-full text-24 font-bold flex justify-center items-center cursor-pointer"
              @click.prevent="toShopCreatorDone">
              4
            </div>
          </template>
          <template v-else>
            <div class="w-50 h-50 bg-white text-grey-lightest rounded-full text-24 font-bold flex justify-center items-center cursor-pointer">
              4
            </div>
          </template>

          <template v-if="stepCustomization">
            <div
              :style="`color: ${shopTheme};`"
              class="absolute pin-b step-4 text-16 font-semibold nowrap cursor-pointer"
              @click.prevent="toShopCreatorDone">
              {{ $t("shop_creator.navigation.done") }}
            </div>
          </template>
          <template v-else>
            <div class="absolute pin-b step-4 text-16 font-semibold text-grey-lightest text-grey-lightest cursor-pointer">
              {{ $t("shop_creator.navigation.done") }}
            </div>
          </template>
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
      stepCustomization: "shop/stepCustomization",
      shopTheme: "shop/shopTheme"
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

