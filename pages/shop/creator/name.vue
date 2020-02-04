<template>
  <main>

    <!-- Page contents -->
    <ContentSection>

      <!-- Title -->
      <Heading
        tag="h1"
        visual="main"
      >
        {{ $t("shop_creator.steps.name.title") }}
      </Heading>

      <!-- Infos -->
      <Paragraph
        class="max-w-800"
        center
      >
        {{ $t("shop_creator.steps.name.paragraph") }}
      </Paragraph>

      <!-- Shop name -->
      <ShopFeatureContainer class="max-w-600">
        <ShopName/>
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
          :disabled="!basicInfosProvided"
          :color="basicInfosProvided ? shopTheme : ''"
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
import ShopName from '@/components/shops/ShopName'
import ContentSection from '@/components/ContentSection'
import Paragraph from '@/components/paragraphs/Paragraph'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import ButtonTertiary from '@/components/buttons/ButtonTertiary'
import ShopCreatorControls from '@/components/shops/ShopCreatorControls'
import ShopFeatureContainer from '@/components/shops/ShopFeatureContainer'

export default {
  middleware: ['authenticated'],
  head() {
    return {
      title: this.$t('shop_creator.steps.name.title'),
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
    ShopName,
    ContentSection,
    Paragraph,
    ButtonPrimary,
    ButtonTertiary,
    ShopCreatorControls,
    ShopFeatureContainer
  },
  mixins: [theming],
  computed: {
    ...mapGetters({
      terms: 'shop/terms',
      shopName: 'shop/shopName',
      shopExists: 'shop/shopExists',
      stepDetails: 'shop/stepDetails'
    }),
    basicInfosProvided() {
      return this.shopName
    }
  },
  async asyncData({ app, store }) {
    const shop = await app.$axios.$get('/user/shop')

    if (shop.data) {
      store.dispatch('shop/setShop', shop.data)
    }
  },
  mounted() {
    if (!this.terms) {
      return this.$router.push('shop-creator-terms')
    }

    if (this.$auth.user.has_shop) {
      this.setStepName(true)
      this.setStepDetails(true)
    }
  },
  methods: {
    ...mapActions({
      flash: 'alert/flash',
      close: 'alert/close',
      setShop: 'shop/setShop',
      setStepName: 'shop/setStepName',
      setStepDetails: 'shop/setStepDetails'
    }),
    prev() {
      this.$router.push({ name: 'shop-creator-terms' })
    },
    async next() {
      if (this.shopExists) {
        this.$router.push({ name: 'shop-creator-details' })
        return
      }

      try {
        await this.$axios.$post('/shops/checker', {
          name: this.shopName
        })
        this.close()
        this.$router.push({ name: 'shop-creator-details' })
      } catch (e) {
        this.setStepName(false)
        this.$toast.error(
          `"<em>${this.shopName}</em>" ${this.$t('toasts.is_already_in_use')}.`
        )
        this.flash({
          type: 'danger',
          message: `"<em>${this.shopName}</em>" ${this.$t(
            'toasts.is_already_in_use'
          )}!`
        })
      }
    }
  }
}
</script>
