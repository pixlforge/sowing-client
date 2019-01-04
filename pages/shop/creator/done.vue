<template>
  <main>
    <section class="container section">
      <div class="flex flex-col items-center">
        <h2 class="title-large text-center mt-100">Terminé!</h2>

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
      stepDetails: "shop/stepDetails",
      stepCustomization: "shop/stepCustomization",
      shopTheme: "shop/shopTheme"
    }),
    btnTheme() {
      return `btn-${this.shopTheme}`;
    }
  },
  mounted() {
    this.setStepCustomization(true);
  },
  methods: {
    ...mapActions({
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
