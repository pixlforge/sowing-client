<template>
  <main>

    <!-- Page contents -->
    <ContentSection>

      <!-- Title -->
      <Heading
        tag="h1"
        visual="main"
      >
        {{ $t("shop_creator.steps.connect.title") }}
      </Heading>

      <!-- Infos -->
      <Paragraph
        v-if="!shopStripeUserId || !shopStripePublishableKey"
        class="max-w-800"
        center
      >
        {{ $t("shop_creator.steps.connect.paragraph") }}
      </Paragraph>

      <!-- Connect process -->
      <ShopFeatureContainer class="max-w-800">
        <template v-if="!stripeInfos">
          <div class="text-center">
            <a
              :href="stripeConnectOAuthUrl"
              :class="btnTheme"
              class="inline-block outline-none focus:shadow-outline rounded-lg text-16 font-black text-white text-center uppercase no-underline whitespace-no-wrap transition-colors duration-200 ease-out px-48 py-20"
            >
              <font-awesome-icon
                :icon="['fab', 'cc-stripe']"
              />
              {{ $t("button.connect_with_stripe") }}
            </a>
          </div>
        </template>

        <template v-if="stripeInfosReceived">
          <Splash
            type="success"
            title="Félicitations!"
            subtitle="Votre compte Stripe a bien été associé à votre boutique!"
          />
        </template>
      </ShopFeatureContainer>

      <!-- Controls -->
      <ShopCreatorControls>

        <!-- Previous -->
        <ButtonTertiary
          @click.native="prev"
          icon="chevron-circle-left"
          class="order-1 md:order-none mx-5"
        >
          {{ $t("button.back") }}
        </ButtonTertiary>

        <!-- Next -->
        <ButtonPrimary
          :disabled="!stripeInfos"
          :color="stripeInfos ? shopTheme : ''"
          @click.native="next"
          icon="chevron-circle-right"
          class="order-none md_order-1 mx-5"
        >
          {{ $t("button.finalize_shop_creation") }}
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
import ShopFeatureContainer from '@/components/shops/ShopFeatureContainer'
import Splash from '@/components/globals/Splash'

export default {
  components: {
    ButtonPrimary,
    ButtonTertiary,
    ContentSection,
    Heading,
    Paragraph,
    ShopCreatorControls,
    ShopFeatureContainer,
    Splash
  },
  mixins: [theming],
  middleware: [
    'authenticated',
    'hasShop'
  ],
  layout: 'shop-creator',
  transition: {
    name: 'slide',
    mode: 'out-in'
  },
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
