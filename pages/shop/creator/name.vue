<template>
  <main>
    <section class="section__container container">
      <div class="section__centered">
        <h2 class="title__large">
          {{ $t("shop_creator.steps.name.title") }}
        </h2>

        <p class="paragraph__medium paragraph--center paragraph--narrow paragraph--spaced">
          {{ $t("shop_creator.steps.name.paragraph") }}
        </p>
        
        <!-- Shop name -->
        <AppShopName class="shop-creator__name-component"/>

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
            :disabled="!shopName"
            :class="shopName ? btnTheme : 'button__disabled'"
            class="button button__next"
            @click.prevent="next">
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
import AppShopName from "@/components/shops/AppShopName";
import theming from "@/mixins/theming";
import { mapGetters, mapActions } from "vuex";

export default {
  middleware: ["authenticated"],
  head() {
    return {
      title: `${this.title} | ${this.$t("shop_creator.steps.name.title")}`
    };
  },
  layout: "shop-creator",
  transition: {
    name: "slide",
    mode: "out-in"
  },
  components: {
    AppShopName
  },
  mixins: [theming],
  async asyncData({ app, store }) {
    let shop = await app.$axios.$get("/user/shop");

    if (shop.data) {
      store.dispatch("shop/setShop", shop.data);
    }

    return {
      title: app.head.title
    };
  },
  computed: {
    ...mapGetters({
      terms: "shop/terms",
      shopName: "shop/shopName",
      shopExists: "shop/shopExists",
      stepDetails: "shop/stepDetails"
    })
  },
  mounted() {
    if (!this.terms) {
      return this.$router.push(this.localePath("shop-creator-terms"));
    }

    if (this.$auth.user.has_shop) {
      this.setStepName(true);
      this.setStepDetails(true);
    }
  },
  methods: {
    ...mapActions({
      flash: "alert/flash",
      close: "alert/close",
      setShop: "shop/setShop",
      setStepName: "shop/setStepName",
      setStepDetails: "shop/setStepDetails"
    }),
    prev() {
      this.$router.push(this.localePath({ name: "shop-creator-terms" }));
    },
    async next() {
      if (this.shopExists) {
        this.$router.push(this.localePath({ name: "shop-creator-details" }));
        return;
      }

      try {
        await this.$axios.$post("/shops/checker", {
          name: this.shopName
        });
        this.close();
        this.$router.push(this.localePath({ name: "shop-creator-details" }));
      } catch (e) {
        this.setStepName(false);
        this.$toast.error(
          `"<em>${this.shopName}</em>" ${this.$t("toasts.is_already_in_use")}.`
        );
        this.flash({
          type: "danger",
          message: `"<em>${this.shopName}</em>" ${this.$t(
            "toasts.is_already_in_use"
          )}!`
        });
      }
    }
  }
};
</script>
