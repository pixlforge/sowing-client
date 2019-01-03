<template>
  <main>
    <section class="container section">
      <div class="flex flex-col items-center">
        <h2 class="title-large text-center mt-100">Terminé!</h2>

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
            class="btn btn-primary"
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
import { mapGetters, mapActions } from "vuex";

export default {
  layout: "shop-creator",
  transition: {
    name: "slide",
    mode: "out-in"
  },
  computed: {
    ...mapGetters({
      stepName: "shop/stepName",
      stepDetails: "shop/stepDetails",
      stepCustomization: "shop/stepCustomization"
    })
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

