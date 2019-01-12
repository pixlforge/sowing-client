<template>
  <main>
    <section class="container section">
      <div class="flex flex-col items-center">
        <h2 class="title-large text-center mt-100">{{ $t("shop_creator.steps.done.title") }}</h2>

        <section class="w-full max-w-1000">
          <p class="paragraph-body text-center mt-60">
            {{ $t("shop_creator.steps.done.paragraph") }}<br>
            {{ $t("shop_creator.steps.done.provision_shop") }}
          </p>
        </section>

        <Success class="block w-full md:w-1/2 mt-100"/>

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
            {{ $t("buttons.finish") }}
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Success from "@/components/illustrations/Success";
import { mapGetters, mapActions } from "vuex";

export default {
  middleware: ["authenticated"],
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
  async asyncData({ app }) {
    return {
      title: app.head.title
    };
  },
  computed: {
    ...mapGetters({
      stepName: "shop/stepName",
      shopTheme: "shop/shopTheme",
      shopExists: "shop/shopExists",
      stepDetails: "shop/stepDetails",
      stepCustomization: "shop/stepCustomization",
      stepConnect: "shop/setConnect"
    }),
    btnTheme() {
      return `btn-${this.shopTheme}`;
    }
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
