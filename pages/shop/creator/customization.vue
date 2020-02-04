<template>
  <main>

    <!-- Page contents -->
    <AppContentSection>

      <!-- Title -->
      <Heading
        tag="h1"
        visual="main"
      >
        {{ $t("shop_creator.steps.customization.title") }}
      </Heading>

      <!-- Infos -->
      <AppParagraph
        class="max-w-800"
        center
      >
        {{ $t("shop_creator.steps.customization.paragraph") }}
      </AppParagraph>

      <!-- Shop customization -->
      <AppShopFeatureContainer
        v-if="shop.id"
        class="max-w-800"
      >
        <AppShopCustomization/>
      </AppShopFeatureContainer>

      <!-- Controls -->
      <AppShopCreatorControls>

        <!-- Previous -->
        <AppButtonTertiary
          @click.native="prev"
          icon="chevron-circle-left"
          class="order-1 md:order-none mx-5"
        >
          {{ $t("buttons.back") }}
        </AppButtonTertiary>

        <!-- Next -->
        <AppButtonPrimary
          :color="shopTheme"
          @click.native="next"
          icon="chevron-circle-right"
          class="order-none md_order-1 mx-5"
        >
          {{ $t("buttons.next") }}
        </AppButtonPrimary>
      </AppShopCreatorControls>
    </AppContentSection>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import Heading from '@/components/Heading'
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
      title: this.$t('shop_creator.steps.customization.title'),
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
    Heading,
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
      this.$router.push({ name: 'shop-creator-details' })
    },
    next() {
      if (this.stepName && this.stepDetails) {
        this.$router.push({ name: 'shop-creator-connect' })
      }
    }
  }
}
</script>
