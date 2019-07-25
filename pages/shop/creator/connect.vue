<template>
  <main>

    <!-- Page contents -->
    <AppContentSection>

      <!-- Title -->
      <AppTitle
        semantic="h1"
        visual="main">
        {{ $t("shop_creator.steps.connect.title") }}
      </AppTitle>

      <p
        v-if="!shopStripeUserId || !shopStripePublishableKey"
        class="paragraph__medium paragraph--center paragraph--narrow paragraph--spaced">
        {{ $t("shop_creator.steps.connect.paragraph") }}
      </p>

      <AppShopFeatureContainer>
        <template v-if="!shopStripeUserId || !shopStripePublishableKey">
          <a
            :href="stripeConnectOAuthUrl"
            :class="btnTheme"
            class="button button--large">
            <font-awesome-icon
              :icon="['fab', 'cc-stripe']"
              class="button__icon button__icon--larger"/>
            {{ $t("buttons.connect_with_stripe") }}
          </a>
        </template>

        <template v-if="tried && shopStripeUserId && shopStripePublishableKey">
          <AppSplash
            type="success"
            title="Félicitations!"
            subtitle="Votre compte Stripe a bien été associé à votre boutique!"/>
        </template>
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
          :disabled="!shopStripeUserId || !shopStripePublishableKey"
          :class="!shopStripeUserId || !shopStripePublishableKey ? 'button__disabled' : btnTheme"
          class="button button__next"
          @click.prevent="next">
          <font-awesome-icon
            :icon="['far', 'chevron-circle-right']"
            class="button__icon button__icon--small"/>
          {{ $t("buttons.finalize_shop_creation") }}
        </button>
      </div>
    </AppContentSection>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import AppTitle from '@/components/AppTitle'
import AppSplash from '@/components/AppSplash'
import AppContentSection from '@/components/AppContentSection'
import AppShopFeatureContainer from '@/components/shops/AppShopFeatureContainer'

export default {
  middleware: ['authenticated', 'hasShop'],
  head() {
    return {
      title: `${this.$t('shop_creator.steps.connect.title')} | ${this.title}`,
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
    AppSplash,
    AppContentSection,
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
    }
  },
  asyncData({ app }) {
    return {
      title: app.head.title
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
      this.$router.push(
        this.localePath({ name: 'shop-creator-customization' })
      )
    },
    next() {
      this.$router.push(this.localePath({ name: 'shop-creator-done' }))
    }
  }
}
</script>
