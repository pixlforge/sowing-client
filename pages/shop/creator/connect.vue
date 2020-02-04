<template>
  <main>

    <!-- Page contents -->
    <AppContentSection>

      <!-- Title -->
      <Heading
        tag="h1"
        visual="main"
      >
        {{ $t("shop_creator.steps.connect.title") }}
      </Heading>

      <!-- Infos -->
      <AppParagraph
        v-if="!shopStripeUserId || !shopStripePublishableKey"
        class="max-w-800"
        center
      >
        {{ $t("shop_creator.steps.connect.paragraph") }}
      </AppParagraph>

      <!-- Connect process -->
      <AppShopFeatureContainer class="max-w-800">
        <template v-if="!stripeInfos">
          <div class="text-center">
            <a
              :href="stripeConnectOAuthUrl"
              :class="btnTheme"
              class="inline-block outline-none focus:shadow-outline rounded-lg text-white font-bold text-center uppercase transition-color transition-faster no-underline whitespace-no-wrap text-16 font-black px-48 py-20"
            >
              <font-awesome-icon
                :icon="['fab', 'cc-stripe']"
              />
              {{ $t("buttons.connect_with_stripe") }}
            </a>
          </div>
        </template>

        <template v-if="stripeInfosReceived">
          <AppSplash
            type="success"
            title="Félicitations!"
            subtitle="Votre compte Stripe a bien été associé à votre boutique!"
          />
        </template>
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
          :disabled="!stripeInfos"
          :color="stripeInfos ? shopTheme : ''"
          @click.native="next"
          icon="chevron-circle-right"
          class="order-none md_order-1 mx-5"
        >
          {{ $t("buttons.finalize_shop_creation") }}
        </AppButtonPrimary>
      </AppShopCreatorControls>
    </AppContentSection>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import Heading from '@/components/Heading'
import AppSplash from '@/components/AppSplash'
import AppContentSection from '@/components/AppContentSection'
import AppParagraph from '@/components/paragraphs/AppParagraph'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'
import AppButtonTertiary from '@/components/buttons/AppButtonTertiary'
import AppShopCreatorControls from '@/components/shops/AppShopCreatorControls'
import AppShopFeatureContainer from '@/components/shops/AppShopFeatureContainer'

export default {
  middleware: [
    'authenticated',
    'hasShop'
  ],
  head() {
    return {
      title: this.$t('shop_creator.steps.connect.title'),
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
    AppSplash,
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
      tried: false
    }
  },
  computed: {
    ...mapGetters({
      shopStripeUserId: 'shop/shopStripeUserId',
      shopStripePublishableKey: 'shop/shopStripePublishableKey'
    }),
    stripeConnectOAuthUrl() {
      return `https://dashboard.stripe.com/oauth/authorize?response_type=code&client_id=${
        process.env.STRIPE_CONNECT
      }&scope=read_write`
    },
    stripeInfos() {
      return this.shopStripeUserId && this.shopStripePublishableKey
    },
    stripeInfosReceived() {
      return this.tried && this.shopStripeUserId && this.shopStripePublishableKey
    }
  },
  async mounted() {
    if (!this.shopExists && this.$auth.user.has_shop) {
      await this.getUserShop()

      if (this.$route.query.code && !this.shopStripeUserId) {
        this.requestTokens(this.$route.query.code)
      }
    }

    this.setStepName(true)
    this.setStepDetails(true)
    this.setStepCustomization(true)
  },
  methods: {
    ...mapActions({
      getUserShop: 'shop/getUserShop',
      setStepName: 'shop/setStepName',
      setStepDetails: 'shop/setStepDetails',
      setStepCustomization: 'shop/setStepCustomization'
    }),
    async requestTokens(code) {
      try {
        await this.$axios.$post('/shops/connect', {
          code: code
        })
        await this.getUserShop()
      } catch (e) {}

      this.tried = true
    },
    prev() {
      this.$router.push({ name: 'shop-creator-customization' })
    },
    next() {
      this.$router.push({ name: 'shop-creator-done' })
    }
  }
}
</script>
