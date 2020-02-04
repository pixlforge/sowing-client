<template>
  <div class="bg-gray-100">
    <div class="container flex py-60 lg:pb-72">

      <!-- Name -->
      <NavGroup>
        <NavOval
          :class="bgTheme"
          @click.native="toShopCreatorName"
          class="text-white"
          label="1"
        />
        <NavLine :class="stepName ? bgTheme : 'bg-white'"/>
        <NavLabel
          :label="$t('shop_creator.navigation.name')"
          :class="textTheme"
          @click.native="toShopCreatorName"
        />
      </NavGroup>

      <!-- Details -->
      <NavGroup>
        <NavOval
          :class="stepName ? `${bgTheme} text-white` : 'bg-white text-gray-200'"
          @click.native="toShopCreatorDetails"
          label="2"
        />
        <NavLine :class="stepDetails ? bgTheme : 'bg-white'"/>
        <NavLabel
          :label="$t('shop_creator.navigation.details')"
          :class="stepName ? textTheme : 'text-gray-200'"
          @click.native="toShopCreatorDetails"
        />
      </NavGroup>

      <!-- Customize -->
      <NavGroup>
        <NavOval
          :class="stepDetails ? `${bgTheme} text-white` : 'bg-white text-gray-200'"
          @click.native="toShopCreatorCustomization"
          label="3"
        />
        <NavLine :class="stepCustomization ? bgTheme : 'bg-white'"/>
        <NavLabel
          :label="$t('shop_creator.navigation.customize')"
          :class="stepDetails ? textTheme : 'text-gray-200'"
          @click.native="toShopCreatorCustomization"
        />
      </NavGroup>

      <!-- Connect -->
      <NavGroup>
        <NavOval
          :class="stepCustomization ? `${bgTheme} text-white` : 'bg-white text-gray-200'"
          @click.native="toShopCreatorConnect"
          label="4"
        />
        <NavLine :class="stepConnect ? bgTheme : 'bg-white'"/>
        <NavLabel
          :label="$t('shop_creator.navigation.connect')"
          :class="stepCustomization ? textTheme : 'text-gray-200'"
          @click.native="toShopCreatorConnect"
        />
      </NavGroup>

      <!-- Done -->
      <NavGroup last>
        <NavOval
          :class="stepConnect ? `${bgTheme} text-white` : 'bg-white text-gray-200'"
          @click.native="toShopCreatorDone"
          label="5"
        />
        <NavLabel
          :label="$t('shop_creator.navigation.done')"
          :class="stepConnect ? textTheme : 'text-gray-200'"
          @click.native="toShopCreatorDone"
        />
      </NavGroup>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import NavOval from '@/components/shops/navigation/ShopNavigationOval'
import NavLine from '@/components/shops/navigation/ShopNavigationLine'
import NavLabel from '@/components/shops/navigation/ShopNavigationLabel'
import NavGroup from '@/components/shops/navigation/ShopNavigationGroup'

export default {
  components: {
    NavOval,
    NavLine,
    NavLabel,
    NavGroup
  },
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
      this.close()
      this.$router.push({ name: 'shop-creator-name' })
    },
    toShopCreatorDetails() {
      if (this.stepName) {
        this.close()
        this.$router.push({ name: 'shop-creator-details' })
      }
    },
    toShopCreatorCustomization() {
      if (this.stepName && this.stepDetails) {
        this.close()
        this.$router.push({ name: 'shop-creator-customization' })
      }
    },
    toShopCreatorConnect() {
      if (this.stepName && this.stepDetails && this.stepCustomization) {
        this.close()
        this.$router.push({ name: 'shop-creator-connect' })
      }
    },
    toShopCreatorDone() {
      if (
        this.stepName &&
        this.stepDetails &&
        this.stepCustomization &&
        this.stepConnect
      ) {
        this.close()
        this.$router.push({ name: 'shop-creator-done' })
      }
    }
  }
}
</script>
