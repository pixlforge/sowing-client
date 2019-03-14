<template>
  <main>
    <section class="section__container container">
      <div class="section__centered">
        <h2 class="title__main title--center">
          {{ $t("shop_creator.steps.done.title") }}
        </h2>

        <p class="paragraph__medium paragraph--center paragraph--narrow paragraph--spaced">
          {{ $t("shop_creator.steps.done.paragraph") }}<br>
          {{ $t("shop_creator.steps.done.provision_shop") }}
        </p>

        <Success class="shop-creator__done-illustration"/>

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
            :class="btnTheme"
            class="button button__next"
            @click.prevent="next">
            <font-awesome-icon
              :icon="['far', 'chevron-circle-right']"
              class="mr-5"/>
            {{ $t("buttons.finish") }}
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Success from "@/components/illustrations/Success";
import theming from "@/mixins/theming";
import { mapGetters, mapActions } from "vuex";

export default {
  middleware: ["authenticated", "hasShop"],
  head() {
    return {
      title: `${this.title} | ${this.$t("shop_creator.steps.done.title")}`
    };
  },
  layout: "shop-creator",
  transition: {
    name: "slide",
    mode: "out-in"
  },
  components: {
    Success
  },
  mixins: [theming],
  async asyncData({ app }) {
    return {
      title: app.head.title
    };
  },
  computed: {
    ...mapGetters({
      stepName: "shop/stepName",
      shopExists: "shop/shopExists",
      stepDetails: "shop/stepDetails",
      stepCustomization: "shop/stepCustomization",
      stepConnect: "shop/stepConnect"
    })
  },
  mounted() {
    if (!this.shopExists && this.$auth.user.has_shop) {
      this.getShop();
    }

    this.setStepName(true);
    this.setStepDetails(true);
    this.setStepCustomization(true);
    this.setStepConnect(true);
  },
  methods: {
    ...mapActions({
      getShop: "shop/getShop",
      setStepName: "shop/setStepName",
      setStepDetails: "shop/setStepDetails",
      setStepCustomization: "shop/setStepCustomization",
      setStepConnect: "shop/setStepConnect"
    }),
    prev() {
      this.$router.push(this.localePath({ name: "shop-creator-connect" }));
    },
    next() {
      if (
        this.stepName &&
        this.stepDetails &&
        this.stepCustomization &&
        this.stepConnect
      ) {
        this.$router.push(this.localePath({ name: "shop" }));
      }
    }
  }
};
</script>
