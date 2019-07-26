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

      <!-- Infos -->
      <AppParagraph
        class="max-w-800"
        center>
        {{ $t("shop_creator.steps.customization.paragraph") }}
      </AppParagraph>

      <!-- Shop customization -->
      <AppShopFeatureContainer
        v-if="shop.id"
        class="max-w-800">
        <AppShopCustomization/>
      </AppShopFeatureContainer>

      <!-- Controls -->
      <AppShopCreatorControls>

        <!-- Previous -->
        <AppButtonTertiary
          icon="chevron-circle-left"
          class="order-1 md:order-none mx-5"
          @click.native="prev">
          {{ $t("buttons.back") }}
        </AppButtonTertiary>

        <!-- Next -->
        <AppButtonPrimary
          :color="shopTheme"
          icon="chevron-circle-right"
          class="order-none md_order-1 mx-5"
          @click.native="next">
          {{ $t("buttons.next") }}
        </AppButtonPrimary>
      </AppShopCreatorControls>
    </AppContentSection>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import AppTitle from '@/components/AppTitle'
import AppContentSection from '@/components/AppContentSection'
import AppParagraph from '@/components/paragraphs/AppParagraph'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'
import AppButtonTertiary from '@/components/buttons/AppButtonTertiary'
import AppShopCustomization from '@/components/shops/AppShopCustomization'
import AppShopCreatorControls from '@/components/shops/AppShopCreatorControls'
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
    AppParagraph,
    AppButtonPrimary,
    AppButtonTertiary,
    AppShopCustomization,
    AppShopCreatorControls,
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
