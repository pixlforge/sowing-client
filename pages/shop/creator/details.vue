<template>
  <main>

    <!-- Page contents -->
    <ContentSection>

      <!-- Title -->
      <Heading
        tag="h1"
        visual="main"
      >
        {{ $t("shop_creator.steps.details.title") }}
      </Heading>

      <!-- Infos -->
      <AppParagraph
        class="max-w-800"
        center
      >
        {{ $t("shop_creator.steps.details.paragraph") }}
      </AppParagraph>

      <!-- Shop details -->
      <AppShopFeatureContainer class="max-w-800">
        <AppShopDetails
          :countries="countries"
          :errors="errors"
        />
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
          :disabled="!basicInfosProvided"
          :color="basicInfosProvided ? shopTheme : ''"
          @click.native="store"
          icon="chevron-circle-right"
          class="order-none md_order-1 mx-5"
        >
          {{ $t("buttons.next") }}
        </AppButtonPrimary>
      </AppShopCreatorControls>
    </ContentSection>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import Heading from '@/components/Heading'
import AppShopDetails from '@/components/shops/AppShopDetails'
import ContentSection from '@/components/ContentSection'
import AppParagraph from '@/components/paragraphs/AppParagraph'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'
import AppButtonTertiary from '@/components/buttons/AppButtonTertiary'
import AppShopCreatorControls from '@/components/shops/AppShopCreatorControls'
import AppShopFeatureContainer from '@/components/shops/AppShopFeatureContainer'

export default {
  middleware: ['authenticated'],
  head() {
    return {
      title: this.$t('shop_creator.steps.details.title'),
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
    AppShopDetails,
    ContentSection,
    AppParagraph,
    AppButtonPrimary,
    AppButtonTertiary,
    AppShopCreatorControls,
    AppShopFeatureContainer
  },
  mixins: [theming],
  data() {
    return {
      countries: [],
      errors: {}
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale',
      shop: 'shop/shop',
      terms: 'shop/terms',
      stepName: 'shop/stepName',
      shopCity: 'shop/shopCity',
      shopExists: 'shop/shopExists',
      stepDetails: 'shop/stepDetails',
      shopCountryId: 'shop/shopCountryId',
      shopPostalCode: 'shop/shopPostalCode'
    }),
    basicInfosProvided() {
      return this.shopPostalCode && this.shopCity && this.shopCountryId
    }
  },
  async asyncData({ app }) {
    const countries = await app.$axios.$get('/countries')

    return {
      countries: countries.data
    }
  },
  mounted() {
    if (!this.terms) {
      return this.$router.push('shop-creator-terms')
    }

    if (!this.shopExists && this.$auth.user.has_shop) {
      this.getUserShop()
      this.setStepDetails(true)
    }

    this.setStepName(true)
  },
  methods: {
    ...mapActions({
      setShop: 'shop/setShop',
      getUserShop: 'shop/getUserShop',
      setStepName: 'shop/setStepName',
      setStepDetails: 'shop/setStepDetails',
      setUserHasShop: 'setUserHasShop'
    }),
    async store() {
      if (this.stepDetails) {
        this.next()
      } else {
        try {
          if (this.terms) {
            const res = await this.$axios.$post('/shops', this.shop)
            this.setShop(res.data)
            this.setUserHasShop(true)
            this.$toast.success(
              'Votre nouvelle boutique a été créée avec succès!'
            )
            this.next()
          } else {
            this.$toast.error(this.$t('toasts.terms'))
          }
        } catch (e) {
          this.errors = e.response.data.errors
          this.$toast.error(this.$t('toasts.validation'))
        }
      }
    },
    prev() {
      this.$router.push({ name: 'shop-creator-name' })
    },
    next() {
      this.$router.push({ name: 'shop-creator-customization' })
    }
  }
}
</script>
