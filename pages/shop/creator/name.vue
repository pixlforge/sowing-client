<template>
  <main>
    <section class="container section">
      <div class="flex flex-col items-center">
        <h2 class="title-large text-center mt-100">Nommez votre boutique</h2>

        <section class="max-w-1000">
          <p class="paragraph-body text-center my-60">
            Donnez à votre boutique un nom unique, marquant et qui incite les visiteurs à s'intéresser à vos produits. Une identité forte est un bon moyen pour construire une boutique attirante et reconnue.
          </p>
        </section>

        <section class="w-full max-w-600">
          <div class="flex">
            <input
              id="name"
              v-model="localShopName"
              :disabled="shopExists"
              :class="{ 'input-disabled': shopExists }"
              name="name"
              type="text"
              placeholder="Nom de votre boutique"
              class="input-base rounded-r-none mt-0">
            <button
              :disabled="shopExists"
              :class="{ 'btn-disabled': shopExists }"
              class="btn btn-primary rounded-l-none nowrap">
              <font-awesome-icon
                :icon="['far', 'rocket']"
                class="mr-5"/>
              Vérifier la disponibilité
            </button>
          </div>
        </section>

        <div class="flex mt-100">

          <!-- Previous -->
          <button
            class="btn btn-default mr-20"
            @click.prevent="prev">
            <font-awesome-icon
              :icon="['far', 'chevron-circle-left']"
              class="mr-5"/>
            Retour
          </button>

          <!-- Next -->
          <button
            class="btn btn-primary"
            @click.prevent="next">
            <font-awesome-icon
              :icon="['far', 'chevron-circle-right']"
              class="mr-5"/>
            Vers les détails de ma boutique
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
      shopName: "shop/shopName",
      stepDetails: "shop/stepDetails",
      shopExists: "shop/shopExists"
    }),
    localShopName: {
      get() {
        return this.shopName;
      },
      set(name) {
        this.setShopName(name);
      }
    }
  },
  mounted() {
    if (!this.shopExists && this.$auth.user.has_shop) {
      this.getShop();
      this.setStepName(true);
      this.setStepDetails(true);
    }
  },
  methods: {
    ...mapActions({
      setShopName: "shop/setShopName",
      getShop: "shop/getShop",
      setStepName: "shop/setStepName",
      setStepDetails: "shop/setStepDetails"
    }),
    prev() {
      this.$router.push(this.localePath({ name: "shop-creator-terms" }));
    },
    next() {
      this.$router.push(this.localePath({ name: "shop-creator-details" }));
    }
  }
};
</script>

