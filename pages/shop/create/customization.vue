<template>
  <main>

    <section class="container section">
      <div class="flex flex-col items-center">
        <h2 class="title-large text-center mt-100">Personnalisez votre boutique</h2>

        <button
          class="btn btn-primary mt-100"
          @click.prevent="next">
          <font-awesome-icon
            :icon="['far', 'chevron-circle-right']"
            class="mr-5"/>
          Terminer la création de ma boutique
        </button>
      </div>
    </section>

  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  layout: "shop-creation",
  transition: {
    name: "slide",
    mode: "out-in"
  },
  computed: {
    ...mapGetters({
      stepName: "shop/stepName",
      stepDetails: "shop/stepDetails"
    })
  },
  methods: {
    ...mapActions({
      setStepCustomization: "shop/setStepCustomization"
    }),
    next() {
      if (this.stepName && this.stepDetails) {
        this.setStepCustomization(true);
        this.$router.push(this.localePath({ name: "shop-create-done" }));
      }
    }
  }
};
</script>

