<template>
  <main>
    <section class="container section">
      <div class="flex flex-col items-center">
        <h2 class="title-large text-center mt-150">{{ $t("shop_creator.steps.name.title") }}</h2>

        <section class="max-w-1000 px-20">
          <p class="paragraph-body text-center my-60">{{ $t("shop_creator.steps.name.paragraph") }}</p>
        </section>
        
        <!-- Shop Creator Name -->
        <AppShopCreatorName/>

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
            :disabled="!shopName"
            :class="shopName ? btnTheme : 'btn-disabled'"
            class="btn order-0 md:order-1"
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
import AppShopCreatorName from "@/components/shops/creator/AppShopCreatorName";
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
    AppShopCreatorName
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
