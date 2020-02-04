<template>
  <main>

    <!-- Page contents -->
    <ContentSection>

      <!-- Title -->
      <Heading
        tag="h1"
        visual="main"
      >
        {{ $t("shop_creator.steps.customization.title") }}
      </Heading>

      <!-- Infos -->
      <Paragraph
        class="max-w-800"
        center
      >
        {{ $t("shop_creator.steps.customization.paragraph") }}
      </Paragraph>

      <!-- Shop customization -->
      <ShopFeatureContainer
        v-if="shop.id"
        class="max-w-800"
      >
        <ShopCustomization/>
      </ShopFeatureContainer>

      <!-- Controls -->
      <ShopCreatorControls>

        <!-- Previous -->
        <ButtonTertiary
          @click.native="prev"
          icon="chevron-circle-left"
          class="order-1 md:order-none mx-5"
        >
          {{ $t("buttons.back") }}
        </ButtonTertiary>

        <!-- Next -->
        <ButtonPrimary
          :color="shopTheme"
          @click.native="next"
          icon="chevron-circle-right"
          class="order-none md_order-1 mx-5"
        >
          {{ $t("buttons.next") }}
        </ButtonPrimary>
      </ShopCreatorControls>
    </ContentSection>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import Heading from '@/components/Heading'
import ContentSection from '@/components/ContentSection'
import Paragraph from '@/components/paragraphs/Paragraph'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import ButtonTertiary from '@/components/buttons/ButtonTertiary'
import ShopCustomization from '@/components/shops/ShopCustomization'
import ShopCreatorControls from '@/components/shops/ShopCreatorControls'
import ShopFeatureContainer from '@/components/shops/ShopFeatureContainer'

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
    ContentSection,
    Paragraph,
    ButtonPrimary,
    ButtonTertiary,
    ShopCustomization,
    ShopCreatorControls,
    ShopFeatureContainer
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
