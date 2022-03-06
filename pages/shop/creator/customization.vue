<template>
  <main>
    <!-- Page contents -->
    <ContentSection>
      <!-- Title -->
      <Heading tag="h1" visual="main">
        {{ $t('shop_creator.steps.customization.title') }}
      </Heading>

      <!-- Infos -->
      <Paragraph class="max-w-800" center>
        {{ $t('shop_creator.steps.customization.paragraph') }}
      </Paragraph>

      <!-- Shop customization -->
      <ShopFeatureContainer v-if="shop.id" class="max-w-800">
        <ShopCustomization />
      </ShopFeatureContainer>

      <!-- Controls -->
      <ShopCreatorControls>
        <!-- Previous -->
        <ButtonTertiary
          icon="chevron-circle-left"
          class="order-1 md:order-none mx-5"
          @click.native="prev"
        >
          {{ $t('button.back') }}
        </ButtonTertiary>

        <!-- Next -->
        <ButtonPrimary
          :color="shopTheme"
          icon="chevron-circle-right"
          class="order-none md_order-1 mx-5"
          @click.native="next"
        >
          {{ $t('button.next') }}
        </ButtonPrimary>
      </ShopCreatorControls>
    </ContentSection>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import ButtonTertiary from '@/components/buttons/ButtonTertiary'
import ContentSection from '@/components/globals/ContentSection'
import Heading from '@/components/globals/Heading'
import Paragraph from '@/components/paragraphs/Paragraph'
import ShopCreatorControls from '@/components/shops/ShopCreatorControls'
import ShopCustomization from '@/components/shops/ShopCustomization'
import ShopFeatureContainer from '@/components/shops/ShopFeatureContainer'

export default {
  components: {
    ButtonPrimary,
    ButtonTertiary,
    ContentSection,
    Heading,
    Paragraph,
    ShopCreatorControls,
    ShopCustomization,
    ShopFeatureContainer,
  },
  mixins: [theming],
  layout: 'shop-creator',
  middleware: ['authenticated', 'hasShop'],
  transition: {
    name: 'slide',
    mode: 'out-in',
  },
  head() {
    return {
      title: this.$t('shop_creator.steps.customization.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex',
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      shop: 'shop/shop',
      stepName: 'shop/stepName',
      shopExists: 'shop/shopExists',
      stepDetails: 'shop/stepDetails',
    }),
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
      setStepDetails: 'shop/setStepDetails',
    }),
    prev() {
      this.$router.push({ name: 'shop-creator-details' })
    },
    next() {
      if (this.stepName && this.stepDetails) {
        this.$router.push({ name: 'shop-creator-connect' })
      }
    },
  },
}
</script>
