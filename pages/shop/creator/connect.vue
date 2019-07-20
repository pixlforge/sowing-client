<template>
  <main>
    <section class="section__container container">
      <div class="section__centered">
        <h2 class="title__main title--center">
          {{ $t("shop_creator.steps.connect.title") }}
        </h2>

        <p
          v-if="!shopStripeUserId || !shopStripePublishableKey"
          class="paragraph__medium paragraph--center paragraph--narrow paragraph--spaced">
          {{ $t("shop_creator.steps.connect.paragraph") }}
        </p>

        <section
          v-if="!shopStripeUserId || !shopStripePublishableKey"
          class="shop-creator__stripe-button-container">
          <a
            :href="stripeConnectOAuthUrl"
            :class="btnTheme"
            class="button button--large">
            <font-awesome-icon
              :icon="['fab', 'cc-stripe']"
              class="button__icon button__icon--larger"/>
            {{ $t("buttons.connect_with_stripe") }}
          </a>
        </section>

        <section
          v-if="shopStripeUserId && shopStripePublishableKey"
          class="mt-196">

          <!-- Icon -->
          <div class="icon__group">
            <font-awesome-icon
              :icon="['far', 'check-circle']"
              class="icon__icon icon__icon--success"/>
          </div>

          <!-- Title -->
          <h2 class="title__main title--center">
            Félicitations!
          </h2>

          <!-- Paragraph -->
          <p class="paragraph__large paragraph--center">
            Votre compte Stripe a bien été associé à votre boutique!
          </p>
        </section>

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
      </div>
    </section>
  </main>
</template>

<script>
import theming from "@/mixins/theming";
import { mapGetters, mapActions } from "vuex";

export default {
  middleware: ["authenticated", "hasShop"],
  head() {
    return {
      title: `${this.$t("shop_creator.steps.connect.title")} | ${this.title}`
    };
  },
  layout: "shop-creator",
  transition: {
    name: "slide",
    mode: "out-in"
  },
  mixins: [theming],
  async asyncData({ app }) {
    return {
      title: app.head.title
    };
  },
  computed: {
    ...mapGetters({
      shopStripeUserId: "shop/shopStripeUserId",
      shopStripePublishableKey: "shop/shopStripePublishableKey"
    }),
    stripeConnectOAuthUrl() {
      return `https://dashboard.stripe.com/oauth/authorize?response_type=code&client_id=${
        process.env.STRIPE_CONNECT
      }&scope=read_write`;
    }
  },
  async mounted() {
    if (!this.shopExists && this.$auth.user.has_shop) {
      await this.getShop();

      if (this.$route.query.code && !this.shopStripeUserId) {
        this.requestTokens(this.$route.query.code);
      }
    }

    this.setStepName(true);
    this.setStepDetails(true);
    this.setStepCustomization(true);
  },
  methods: {
    ...mapActions({
      getShop: "shop/getShop",
      setStepName: "shop/setStepName",
      setStepDetails: "shop/setStepDetails",
      setStepCustomization: "shop/setStepCustomization"
    }),
    async requestTokens(code) {
      try {
        await this.$axios.$post("/shops/connect", {
          code: code
        });
        await this.getShop();
      } catch (e) {}
    },
    prev() {
      this.$router.push(
        this.localePath({ name: "shop-creator-customization" })
      );
    },
    next() {
      this.$router.push(this.localePath({ name: "shop-creator-done" }));
    }
  }
};
</script>
