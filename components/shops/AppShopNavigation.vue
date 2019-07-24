<template>
  <div class="shop-navigation__background">
    <div class="shop-navigation__container container">

      <!-- Name -->
      <div class="shop-navigation__group">
        <div
          :class="bgTheme"
          class="shop-navigation__oval shop-navigation__oval--first"
          @click.prevent="toShopCreatorName">
          1
        </div>
        <div
          :class="stepName ? bgTheme : 'bg-white'"
          class="shop-navigation__line"/>
        <div
          :class="textTheme"
          class="shop-navigation__label"
          @click.prevent="toShopCreatorName">
          {{ $t("shop_creator.navigation.name") }}
        </div>
      </div>

      <!-- Details -->
      <div class="shop-navigation__group">
        <div
          :class="stepName ? `${bgTheme} text-white` : 'bg-white text-gray-200'"
          class="shop-navigation__oval"
          @click.prevent="toShopCreatorDetails">
          2
        </div>
        <div
          :class="stepDetails ? bgTheme : 'bg-white'"
          class="shop-navigation__line"/>
        <div
          :class="stepName ? textTheme : 'text-gray-200'"
          class="shop-navigation__label"
          @click.prevent="toShopCreatorDetails">
          {{ $t("shop_creator.navigation.details") }}
        </div>
      </div>

      <!-- Customize -->
      <div class="shop-navigation__group">
        <div
          :class="stepDetails ? `${bgTheme} text-white` : 'bg-white text-gray-200'"
          class="shop-navigation__oval"
          @click.prevent="toShopCreatorCustomization">
          3
        </div>
        <div
          :class="stepCustomization ? bgTheme : 'bg-white'"
          class="shop-navigation__line"/>
        <div
          :class="stepDetails ? textTheme : 'text-gray-200'"
          class="shop-navigation__label"
          @click.prevent="toShopCreatorCustomization">
          {{ $t("shop_creator.navigation.customize") }}
        </div>
      </div>

      <!-- Connect -->
      <div class="shop-navigation__group">
        <div
          :class="stepCustomization ? `${bgTheme} text-white` : 'bg-white text-gray-200'"
          class="shop-navigation__oval"
          @click.prevent="toShopCreatorConnect">
          4
        </div>
        <div
          :class="stepConnect ? bgTheme : 'bg-white'"
          class="shop-navigation__line"/>
        <div
          :class="stepCustomization ? textTheme : 'text-gray-200'"
          class="shop-navigation__label"
          @click.prevent="toShopCreatorConnect">
          {{ $t("shop_creator.navigation.connect") }}
        </div>
      </div>

      <!-- Done -->
      <div class="shop-navigation__group shop-navigation__group--last">
        <div
          :class="stepConnect ? `${bgTheme} text-white` : 'bg-white text-gray-200'"
          class="shop-navigation__oval"
          @click.prevent="toShopCreatorDone">
          5
        </div>
        <div
          :class="stepConnect ? textTheme : 'text-gray-200'"
          class="shop-navigation__label"
          @click.prevent="toShopCreatorDone">
          {{ $t("shop_creator.navigation.done") }}
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import theming from '@/mixins/theming';

export default {
  mixins: [theming],
  computed: {
    ...mapGetters({
      stepName: 'shop/stepName',
      stepDetails: 'shop/stepDetails',
      stepCustomization: 'shop/stepCustomization',
      stepConnect: 'shop/stepConnect'
    })
  },
  methods: {
    ...mapActions({
      close: 'alert/close'
    }),
    toShopCreatorName() {
      this.close();
      this.$router.push(this.localePath({ name: 'shop-creator-name' }));
    },
    toShopCreatorDetails() {
      if (this.stepName) {
        this.close();
        this.$router.push(this.localePath({ name: 'shop-creator-details' }));
      }
    },
    toShopCreatorCustomization() {
      if (this.stepName && this.stepDetails) {
        this.close();
        this.$router.push(
          this.localePath({ name: 'shop-creator-customization' })
        );
      }
    },
    toShopCreatorConnect() {
      if (this.stepName && this.stepDetails && this.stepCustomization) {
        this.close();
        this.$router.push(this.localePath({ name: 'shop-creator-connect' }));
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
        this.$router.push(this.localePath({ name: 'shop-creator-done' }));
      }
    }
  }
};
</script>
