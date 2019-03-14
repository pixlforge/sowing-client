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
          class="w-full max-w-400 md:max-w-600 mt-60 mb-100">
          <a
            :href="stripeConnectOAuthUrl"
            :class="btnTheme"
            class="button button--large">
            <font-awesome-icon
              :icon="['fab', 'cc-stripe']"
              class="text-24 mr-10"/>
            <!-- TODO: Translate -->
            Connecter ma boutique avec Stripe
          </a>
        </section>

        <!-- class="w-full sm:w-2/3 xl:w-1/2 flex flex-col lg:flex-row px-20 md:px-0 mx-auto my-150" -->
        <section
          v-if="shopStripeUserId && shopStripePublishableKey"
          class="mt-150">

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

          <!-- <div class="w-full lg:w-auto flex justify-center">
            <font-awesome-icon
              :icon="['far', 'check-circle']"
              class="text-72 text-green"/>
          </div>
          <div class="mx-auto mt-40 lg:mt-0">
            <h1 class="text-48 text-green text-center lg:text-left">Félicitations</h1>
            <p class="text-24 font-semibold text-green-darkest text-center lg:text-left">
              Votre compte Stripe a bien été associé à votre boutique!
            </p>
          </div> -->
        </section>

        <div class="shop-creator__controls">

          <!-- Previous -->
          <button
            class="button button__previous"
            @click.prevent="prev">
            <font-awesome-icon
              :icon="['far', 'chevron-circle-left']"
              class="mr-5"/>
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
              class="mr-5"/>
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
      title: `${this.title} | ${this.$t("shop_creator.steps.connect.title")}`
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
