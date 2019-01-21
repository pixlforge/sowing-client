<template>
  <main>
    <section class="container section">
      <div class="flex flex-col items-center">
        <h2 class="title-large text-center mt-100">{{ $t("shop_creator.steps.connect.title") }}</h2>

        <section
          v-if="!shopStripeUserId || !shopStripePublishableKey"
          class="max-w-1000 px-20">
          <p class="paragraph-body text-center mt-60">{{ $t("shop_creator.steps.connect.paragraph") }}</p>
        </section>

        <section
          v-if="!shopStripeUserId || !shopStripePublishableKey"
          class="w-full max-w-400 md:max-w-600 mt-60 mb-100">
          <a
            :href="stripeConnectOAuthUrl"
            :class="btnTheme"
            class="btn flex justify-center items-center text-14 py-15">
            <font-awesome-icon
              :icon="['fab', 'cc-stripe']"
              class="text-24 mr-10"/>
            Connecter ma boutique avec Stripe
          </a>
        </section>

        <section
          v-if="shopStripeUserId && shopStripePublishableKey"
          class="w-full sm:w-2/3 xl:w-1/2 flex flex-col lg:flex-row px-20 md:px-0 mx-auto my-150">
          <div class="w-full lg:w-auto flex justify-center">
            <font-awesome-icon
              :icon="['far', 'check-circle']"
              class="text-72 text-green"/>
          </div>
          <div class="mx-auto mt-40 lg:mt-0">
            <h1 class="text-48 text-green text-center lg:text-left">Félicitations</h1>
            <p class="text-24 font-semibold text-green-darkest text-center lg:text-left">
              Votre compte Stripe a bien été associé à votre boutique!
            </p>
          </div>
        </section>

        <div class="flex flex-col md:flex-row">

          <!-- Previous -->
          <button
            class="btn order-1 md:order-0 md:mr-20 mt-20 md:mt-0"
            @click.prevent="prev">
            <font-awesome-icon
              :icon="['far', 'chevron-circle-left']"
              class="mr-5"/>
            {{ $t("buttons.back") }}
          </button>

          <!-- Next -->
          <button
            :disabled="!shopStripeUserId || !shopStripePublishableKey"
            :class="!shopStripeUserId || !shopStripePublishableKey ? 'btn-disabled' : btnTheme"
            class="btn order-0 md:order-1"
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
import { mapGetters, mapActions } from "vuex";

export default {
  middleware: ["authenticated"],
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
  async asyncData({ app }) {
    return {
      title: app.head.title
    };
  },
  computed: {
    ...mapGetters({
      shopTheme: "shop/shopTheme",
      shopStripeUserId: "shop/shopStripeUserId",
      shopStripePublishableKey: "shop/shopStripePublishableKey"
    }),
    btnTheme() {
      return `btn-${this.shopTheme}`;
    },
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
