<template>
  <main>

    <section class="container section">
      <div class="flex flex-col items-center">
        <h2 class="title-large text-center mt-100">Détails de votre boutique</h2>

        <section class="max-w-1000">
          <p class="paragraph-body text-center my-60">
            Parlez-nous de votre boutique. Où est-elle située? Que fait-elle? Décrivez la au mieux afin de lui donner une bonne image, en plus de renseigner efficacement vos visiteurs de vos activités et de vos méthodes.
          </p>
        </section>

        <section class="w-full max-w-1000">

          <!-- Postal code -->
          <div class="w-full flex mt-100">
            <div class="w-1/2 flex items-center">
              <h5 class="text-24">Code postal</h5>
            </div>
            <div class="w-1/2 flex items-center">
              <input
                v-model="localPostalCode"
                type="text"
                placeholder="e.g. 3000"
                class="input-base mt-0">
            </div>
          </div>

          <!-- City -->
          <div class="w-full flex mt-50">
            <div class="w-1/2 flex items-center">
              <h5 class="text-24">Ville</h5>
            </div>
            <div class="w-1/2 flex items-center">
              <input
                v-model="localCity"
                type="text"
                placeholder="e.g. Bern"
                class="input-base mt-0">
            </div>
          </div>

          <!-- Country -->
          <div class="w-full flex mt-50">
            <div class="w-1/2 flex items-center">
              <h5 class="text-24">Pays</h5>
            </div>
            <div class="w-1/2">
              <div class="relative w-full">
                <select
                  v-model="localCountry"
                  class="select mt-0">
                  <option
                    value=""
                    selected
                    disabled>
                    {{ $t("components.forms.select") }}
                  </option>
                  <option
                    v-for="country in countries"
                    :key="country.id"
                    :value="country.id">
                    {{ country.name[locale] }}
                  </option>
                </select>
                <font-awesome-icon
                  :icon="['fas', 'caret-down']"
                  class="select-caret"/>
              </div>
            </div>
          </div>

          <hr class="border border-green-lightest my-100">

          <!-- Short description FR -->
          <div class="w-full flex mt-50">
            <div class="w-1/2 flex items-center">
              <h5 class="text-24">Description courte (français)</h5>
            </div>
            <div class="w-1/2 flex items-center">
              <input
                v-model="localShortDescriptionFr"
                type="text"
                placeholder="e.g. Description courte en français"
                class="input-base mt-0">
            </div>
          </div>

          <!-- Long description FR -->
          <div class="w-full flex mt-50">
            <div class="w-1/2 flex items-start">
              <h5 class="text-24">Description longue (français)</h5>
            </div>
            <div class="w-1/2 flex items-center">
              <textarea
                v-model="localLongDescriptionFr"
                placeholder="e.g. Description longue en français"
                rows="10"
                class="textarea-base mt-0"/>
            </div>
          </div>

          <hr class="border border-green-lightest my-100">

          <!-- Short description EN -->
          <div class="w-full flex mt-50">
            <div class="w-1/2 flex items-center">
              <h5 class="text-24">Description courte (anglais)</h5>
            </div>
            <div class="w-1/2 flex items-center">
              <input
                v-model="localShortDescriptionEn"
                type="text"
                placeholder="e.g. Description courte en anglais"
                class="input-base mt-0">
            </div>
          </div>

          <!-- Long description EN -->
          <div class="w-full flex mt-50">
            <div class="w-1/2 flex items-start">
              <h5 class="text-24">Description longue (anglais)</h5>
            </div>
            <div class="w-1/2 flex items-center">
              <textarea
                v-model="localLongDescriptionEn"
                placeholder="e.g. Description longue en anglais"
                rows="10"
                class="textarea-base mt-0"/>
            </div>
          </div>

          <hr class="border border-green-lightest my-100">

          <!-- Short description DE -->
          <div class="w-full flex mt-50">
            <div class="w-1/2 flex items-center">
              <h5 class="text-24">Description courte (allemand)</h5>
            </div>
            <div class="w-1/2 flex items-center">
              <input
                v-model="localShortDescriptionDe"
                type="text"
                placeholder="e.g. Description courte en allemand"
                class="input-base">
            </div>
          </div>

          <!-- Long description DE -->
          <div class="w-full flex mt-50">
            <div class="w-1/2 flex items-start">
              <h5 class="text-24">Description longue (allemand)</h5>
            </div>
            <div class="w-1/2 flex items-center">
              <textarea
                v-model="localLongDescriptionDe"
                placeholder="e.g. Description longue en allemand"
                rows="10"
                class="textarea-base mt-0"/>
            </div>
          </div>

          <hr class="border border-green-lightest my-100">

          <!-- Short description IT -->
          <div class="w-full flex mt-50">
            <div class="w-1/2 flex items-center">
              <h5 class="text-24">Description courte (italien)</h5>
            </div>
            <div class="w-1/2 flex items-center">
              <input
                v-model="localShortDescriptionIt"
                type="text"
                placeholder="e.g. Description courte en italien"
                class="input-base">
            </div>
          </div>

          <!-- Long description IT -->
          <div class="w-full flex mt-50">
            <div class="w-1/2 flex items-start">
              <h5 class="text-24">Description longue (italien)</h5>
            </div>
            <div class="w-1/2 flex items-center">
              <textarea
                v-model="localLongDescriptionIt"
                placeholder="e.g. Description longue en italien"
                rows="10"
                class="textarea-base mt-0"/>
            </div>
          </div>

        </section>

        <button
          class="btn btn-primary mt-100"
          @click.prevent="next">
          <font-awesome-icon
            :icon="['far', 'chevron-circle-right']"
            class="mr-5"/>
          Personnaliser ma boutique
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
  data() {
    return {
      countries: []
    };
  },
  computed: {
    ...mapGetters({
      locale: "locale",
      stepName: "shop/stepName",
      shopPostalCode: "shop/shopPostalCode",
      shopCity: "shop/shopCity",
      shopCountryId: "shop/shopCountryId",
      shopShortDescriptionFr: "shop/shopShortDescriptionFr",
      shopShortDescriptionEn: "shop/shopShortDescriptionEn",
      shopShortDescriptionDe: "shop/shopShortDescriptionDe",
      shopShortDescriptionIt: "shop/shopShortDescriptionIt",
      shopLongDescriptionFr: "shop/shopLongDescriptionFr",
      shopLongDescriptionEn: "shop/shopLongDescriptionEn",
      shopLongDescriptionDe: "shop/shopLongDescriptionDe",
      shopLongDescriptionIt: "shop/shopLongDescriptionIt"
    }),
    localPostalCode: {
      get() {
        return this.shopPostalCode;
      },
      set(postalCode) {
        this.setShopPostalCode(postalCode);
      }
    },
    localCity: {
      get() {
        return this.shopCity;
      },
      set(city) {
        this.setShopCity(city);
      }
    },
    localCountry: {
      get() {
        return this.shopCountryId;
      },
      set(countryId) {
        this.setShopCountryId(countryId);
      }
    },
    localShortDescriptionFr: {
      get() {
        return this.shopShortDescriptionFr;
      },
      set(description) {
        this.setShopShortDescriptionFr(description);
      }
    },
    localLongDescriptionFr: {
      get() {
        return this.shopLongDescriptionFr;
      },
      set(description) {
        this.setShopLongDescriptionFr(description);
      }
    },
    localShortDescriptionEn: {
      get() {
        return this.shopShortDescriptionEn;
      },
      set(description) {
        this.setShopShortDescriptionEn(description);
      }
    },
    localLongDescriptionEn: {
      get() {
        return this.shopLongDescriptionEn;
      },
      set(description) {
        this.setShopLongDescriptionEn(description);
      }
    },
    localShortDescriptionDe: {
      get() {
        return this.shopShortDescriptionDe;
      },
      set(description) {
        this.setShopShortDescriptionDe(description);
      }
    },
    localLongDescriptionDe: {
      get() {
        return this.shopLongDescriptionDe;
      },
      set(description) {
        this.setShopLongDescriptionDe(description);
      }
    },
    localShortDescriptionIt: {
      get() {
        return this.shopShortDescriptionIt;
      },
      set(description) {
        this.setShopShortDescriptionIt(description);
      }
    },
    localLongDescriptionIt: {
      get() {
        return this.shopLongDescriptionIt;
      },
      set(description) {
        this.setShopLongDescriptionIt(description);
      }
    }
  },
  created() {
    this.getCountries();
  },
  methods: {
    ...mapActions({
      setStepDetails: "shop/setStepDetails",
      setShopPostalCode: "shop/setShopPostalCode",
      setShopCity: "shop/setShopCity",
      setShopCountryId: "shop/setShopCountryId",
      setShopShortDescriptionFr: "shop/setShopShortDescriptionFr",
      setShopShortDescriptionEn: "shop/setShopShortDescriptionEn",
      setShopShortDescriptionDe: "shop/setShopShortDescriptionDe",
      setShopShortDescriptionIt: "shop/setShopShortDescriptionIt",
      setShopLongDescriptionFr: "shop/setShopLongDescriptionFr",
      setShopLongDescriptionEn: "shop/setShopLongDescriptionEn",
      setShopLongDescriptionDe: "shop/setShopLongDescriptionDe",
      setShopLongDescriptionIt: "shop/setShopLongDescriptionIt"
    }),
    next() {
      if (this.stepName) {
        this.setStepDetails(true);
        this.$router.push(
          this.localePath({ name: "shop-create-customization" })
        );
      }
    },
    async getCountries() {
      let res = await this.$axios.$get("/countries");
      this.countries = res.data;
    }
  }
};
</script>

