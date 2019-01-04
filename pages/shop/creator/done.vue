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

        <Success class="block w-1/2 mt-100"/>

        <div class="flex mt-100">

          <!-- Previous -->
          <button
            class="btn btn-default mr-20"
            @click.prevent="prev">
            <font-awesome-icon
              :icon="['far', 'chevron-circle-left']"
              class="mr-5"/>
            {{ $t("buttons.back") }}
          </button>

          <!-- Next -->
          <button
            :class="btnTheme"
            class="btn"
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
  layout: "shop-creator",
  transition: {
    name: "slide",
    mode: "out-in"
  },
  components: {
    Success
  },
  computed: {
    ...mapGetters({
      stepName: "shop/stepName",
      shopTheme: "shop/shopTheme",
      shopExists: "shop/shopExists",
      stepDetails: "shop/stepDetails",
      stepCustomization: "shop/stepCustomization"
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
      if (this.stepName && this.stepDetails && this.stepCustomization) {
        this.$router.push(this.localePath({ name: "shop-creator-terms" }));
      }
    }
  }
};
</script>
