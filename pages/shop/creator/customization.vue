<template>
  <main>

    <!-- Page contents -->
    <AppContentSection>

      <!-- Title -->
      <AppTitle
        semantic="h1"
        visual="main">
        {{ $t("shop_creator.steps.customization.title") }}
      </AppTitle>

      <p class="paragraph__medium paragraph--center paragraph--narrow paragraph--spaced">
        {{ $t("shop_creator.steps.customization.paragraph") }}
      </p>

      <!-- Shop customization -->
      <AppShopFeatureContainer v-if="shop.id">
        <AppShopCustomization/>
      </AppShopFeatureContainer>

      <div class="shop-creator__controls">

        <!-- Previous -->
        <button
          class="button button__previous"
          @click.prevent="prev">
          <font-awesome-icon
            :icon="['far', 'chevron-circle-left']"
            class="button__icon button__icon--small"/>
          {{ $t("buttons.back") }}
        </button>

        <!-- Next -->
        <button
          :class="btnTheme"
          class="button button__next"
          @click.prevent="next">
          <font-awesome-icon
            :icon="['far', 'chevron-circle-right']"
            class="button__icon button__icon--small"/>
          {{ $t("buttons.next") }}
        </button>
      </div>
    </AppContentSection>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import AppTitle from '@/components/AppTitle'
import AppContentSection from '@/components/AppContentSection'
import AppShopCustomization from '@/components/shops/AppShopCustomization'
import AppShopFeatureContainer from '@/components/shops/AppShopFeatureContainer'

export default {
  middleware: ['authenticated', 'hasShop'],
  head() {
    return {
      title: `${this.$t('shop_creator.steps.customization.title')} | ${this.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex'
        }
      ]
    }
  },
  layout: 'shop-creator',
  transition: {
    name: 'slide',
    mode: 'out-in'
  },
  components: {
    AppTitle,
    AppContentSection,
    AppShopCustomization,
    AppShopFeatureContainer
  },
  mixins: [theming],
  computed: {
    ...mapGetters({
      shop: 'shop/shop',
      stepName: 'shop/stepName',
      shopExists: 'shop/shopExists',
      stepDetails: 'shop/stepDetails'
    })
  },
  asyncData({ app }) {
    return {
      title: app.head.title
    }
  },
  mounted() {
    if (!this.shopExists && this.$auth.user.has_shop) {
      this.getUserShop()
    }

    this.setStepName(true)
    this.setStepDetails(true)
  },
  methods: {
    ...mapActions({
      getUserShop: 'shop/getUserShop',
      setStepName: 'shop/setStepName',
      setStepDetails: 'shop/setStepDetails'
    }),
    prev() {
      this.$router.push(this.localePath({ name: 'shop-creator-details' }))
    },
    next() {
      if (this.stepName && this.stepDetails) {
        this.$router.push(this.localePath({ name: 'shop-creator-connect' }))
      }
    }
  }
}
</script>
