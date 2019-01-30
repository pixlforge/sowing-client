<template>
  <main>
    <section class="container section">
      <div class="flex flex-col items-center">
        <h2 class="title-large text-center mt-150">{{ $t("shop_creator.steps.customization.title") }}</h2>

        <section class="w-full max-w-1000">
          <p class="paragraph-body text-center mt-60">{{ $t("shop_creator.steps.customization.paragraph") }}</p>
        </section>

        <!-- Shop customization -->
        <AppShopCustomization
          v-if="shop.id"
          class="flex flex-col items-center mt-100"/>

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
            :class="btnTheme"
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
import AppShopCustomization from "@/components/shops/AppShopCustomization";
import theming from "@/mixins/theming";
import { mapGetters, mapActions } from "vuex";

export default {
  middleware: ["authenticated", "hasShop"],
  head() {
    return {
      title: `${this.title} | ${this.$t(
        "shop_creator.steps.customization.title"
      )}`
    };
  },
  layout: "shop-creator",
  transition: {
    name: "slide",
    mode: "out-in"
  },
  components: {
    AppShopCustomization
  },
  mixins: [theming],
  async asyncData({ app }) {
    return {
      title: app.head.title
    };
  },
  computed: {
    ...mapGetters({
      shop: "shop/shop",
      stepName: "shop/stepName",
      shopExists: "shop/shopExists",
      stepDetails: "shop/stepDetails"
    })
  },
  mounted() {
    if (!this.shopExists && this.$auth.user.has_shop) {
      this.getShop();
    }

    this.setStepName(true);
    this.setStepDetails(true);
  },
  methods: {
    ...mapActions({
      getShop: "shop/getShop",
      setStepName: "shop/setStepName",
      setStepDetails: "shop/setStepDetails"
    }),
    prev() {
      this.$router.push(this.localePath({ name: "shop-creator-details" }));
    },
    next() {
      if (this.stepName && this.stepDetails) {
        this.$router.push(this.localePath({ name: "shop-creator-connect" }));
      }
    }
  }
};
</script>
