<template>
  <main>

    <!-- Page contents -->
    <AppContentSection>

      <!-- Title -->
      <AppTitle
        semantic="h1"
        visual="main">
        {{ $t("shop_creator.steps.details.title") }}
      </AppTitle>

      <!-- Infos -->
      <AppParagraph class="max-w-800 text-center mx-auto my-36 md:my-72">
        {{ $t("shop_creator.steps.details.paragraph") }}
      </AppParagraph>

      <!-- Shop details -->
      <AppShopFeatureContainer>
        <AppShopDetails
          :countries="countries"
          :errors="errors"/>
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
          :disabled="!basicInfosProvided"
          :color="basicInfosProvided ? shopTheme : ''"
          icon="chevron-circle-right"
          class="order-none md_order-1 mx-5"
          @click.native="store">
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
import AppShopDetails from '@/components/shops/AppShopDetails'
import AppContentSection from '@/components/AppContentSection'
import AppParagraph from '@/components/paragraphs/AppParagraph'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'
import AppButtonTertiary from '@/components/buttons/AppButtonTertiary'
import AppShopCreatorControls from '@/components/shops/AppShopCreatorControls'
import AppShopFeatureContainer from '@/components/shops/AppShopFeatureContainer'

export default {
  middleware: ['authenticated'],
  head() {
    return {
      title: `${this.$t('shop_creator.steps.details.title')} | ${this.title}`,
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
    AppShopDetails,
    AppContentSection,
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
      countries: countries.data,
      title: app.head.title
    }
  },
  mounted() {
    if (!this.terms) {
      return this.$router.push(this.localePath('shop-creator-terms'))
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
      this.$router.push(this.localePath({ name: 'shop-creator-name' }))
    },
    next() {
      this.$router.push(
        this.localePath({ name: 'shop-creator-customization' })
      )
    }
  }
}
</script>
