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
              name="name"
              type="text"
              placeholder="Nom de votre boutique"
              class="input-base rounded-r-none mt-0">
            <button
              class="btn btn-primary rounded-l-none nowrap">
              <font-awesome-icon
                :icon="['far', 'rocket']"
                class="mr-5"/>
              Vérifier la disponibilité
            </button>
          </div>
        </section>

        <button
          class="btn btn-primary mt-100"
          @click.prevent="next">
          <font-awesome-icon
            :icon="['far', 'chevron-circle-right']"
            class="mr-5"/>
          Vers les détails de ma boutique
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
      shopName: "shop/shopName"
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
  methods: {
    ...mapActions({
      setStepName: "shop/setStepName",
      setShopName: "shop/setShopName"
    }),
    next() {
      this.setStepName(true);
      this.$router.push(this.localePath({ name: "shop-create-details" }));
    }
  }
};
</script>

