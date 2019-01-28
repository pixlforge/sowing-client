<template>
  <main>
    <section class="container section">
      <div class="flex flex-col items-center">
        <h2 class="title-large text-center mt-150">{{ $t("shop_creator.steps.details.title") }}</h2>

        <section class="w-full max-w-1000">
          <p class="paragraph-body text-center my-60">{{ $t("shop_creator.steps.details.paragraph") }}</p>
        </section>

        <!-- Shop details -->
        <AppShopDetails
          :countries="countries"
          class="max-w-600 lg:max-w-1000"/>

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
            :class="!shopPostalCode || !shopCity || !shopCountryId ? 'btn-disabled' : btnTheme"
            class="btn order-0 md:order-1"
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
      countries: []
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
