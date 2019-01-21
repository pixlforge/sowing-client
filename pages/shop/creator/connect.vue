<template>
  <main>
    <section class="container section">
      <div class="flex flex-col items-center">
        <h2 class="title-large text-center mt-100">{{ $t("shop_creator.steps.connect.title") }}</h2>

        <section class="max-w-1000 px-20">
          <p class="paragraph-body text-center my-60">{{ $t("shop_creator.steps.connect.paragraph") }}</p>
        </section>

        <section class="w-full max-w-400 md:max-w-600">
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

        <div class="flex flex-col md:flex-row mt-100">

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
      return `https://dashboard.stripe.com/oauth/authorize?response_type=code&state=abc&client_id=${
        process.env.STRIPE_CONNECT
      }&scope=read_write`;
    }
  },
  mounted() {
    if (!this.shopExists && this.$auth.user.has_shop) {
      this.getShop();
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
