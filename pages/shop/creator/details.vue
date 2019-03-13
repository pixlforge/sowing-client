<template>
  <main>
    <section class="section__container container">
      <div class="section__centered">
        <h2 class="title__large">
          {{ $t("shop_creator.steps.details.title") }}
        </h2>

        <p class="paragraph__medium paragraph--center paragraph--narrow paragraph--spaced">
          {{ $t("shop_creator.steps.details.paragraph") }}
        </p>

        <!-- Shop details -->
        <AppShopDetails
          :countries="countries"
          :errors="errors"
          class="shop-creator__details-component"/>

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
            :disabled="!shopPostalCode || !shopCity || !shopCountryId"
            :class="!shopPostalCode || !shopCity || !shopCountryId ? 'button__disabled' : btnTheme"
            class="button button__next"
            @click.prevent="store">
            <font-awesome-icon
              :icon="['far', 'chevron-circle-right']"
              class="mr-5"/>
            {{ $t("buttons.next") }}
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import AppShopDetails from "@/components/shops/AppShopDetails";
import theming from "@/mixins/theming";
import { mapGetters, mapActions } from "vuex";

export default {
  middleware: ["authenticated"],
  head() {
    return {
      title: `${this.title} | ${this.$t("shop_creator.steps.details.title")}`
    };
  },
  layout: "shop-creator",
  transition: {
    name: "slide",
    mode: "out-in"
  },
  components: {
    AppShopDetails
  },
  mixins: [theming],
  data() {
    return {
      countries: [],
      errors: {}
    };
  },
  async asyncData({ app }) {
    let countries = await app.$axios.$get("/countries");

    return {
      countries: countries.data,
      title: app.head.title
    };
  },
  computed: {
    ...mapGetters({
      locale: "locale",
      shop: "shop/shop",
      terms: "shop/terms",
      stepName: "shop/stepName",
      shopCity: "shop/shopCity",
      shopExists: "shop/shopExists",
      stepDetails: "shop/stepDetails",
      shopCountryId: "shop/shopCountryId",
      shopPostalCode: "shop/shopPostalCode"
    })
  },
  mounted() {
    if (!this.terms) {
      return this.$router.push(this.localePath("shop-creator-terms"));
    }

    if (!this.shopExists && this.$auth.user.has_shop) {
      this.getShop();
      this.setStepDetails(true);
    }

    this.setStepName(true);
  },
  methods: {
    ...mapActions({
      setShop: "shop/setShop",
      getShop: "shop/getShop",
      setStepName: "shop/setStepName",
      setStepDetails: "shop/setStepDetails",
      setUserHasShop: "setUserHasShop"
    }),
    async store() {
      if (this.stepDetails) {
        this.next();
      } else {
        try {
          if (this.terms) {
            let res = await this.$axios.$post("/shops", this.shop);
            this.setShop(res.data);
            this.setUserHasShop(true);
            this.$toast.success(
              "Votre nouvelle boutique a été créée avec succès!"
            );
            this.next();
          } else {
            this.$toast.error(this.$t("toasts.terms"));
          }
        } catch (e) {
          this.errors = e.response.data.errors;
          this.$toast.error(this.$t("toasts.validation"));
        }
      }
    },
    prev() {
      this.$router.push(this.localePath({ name: "shop-creator-name" }));
    },
    next() {
      this.$router.push(
        this.localePath({ name: "shop-creator-customization" })
      );
    }
  }
};
</script>
