<template>
  <main>
    <section class="container section">
      <div class="flex flex-col items-center">
        <h2 class="title-large text-center mt-100">{{ $t("shop_creator.steps.details.title") }}</h2>

        <section class="w-full max-w-1000">
          <p class="paragraph-body text-center my-60">{{ $t("shop_creator.steps.details.paragraph") }}</p>
        </section>

        <section class="w-full max-w-600 lg:max-w-1000">

          <!-- Postal code -->
          <div class="w-full flex flex-col lg:flex-row mt-100">
            <div class="w-full lg:w-1/2 flex items-start lg:pr-10">
              <h5 class="text-24 leading-normal">{{ $t("forms.labels.postal_code") }}</h5>
            </div>
            <div class="w-full lg:w-1/2 flex flex-col items-start lg:pl-10">
              <input
                v-model="localPostalCode"
                :disabled="shopExists"
                :class="{ 'input-disabled': shopExists, 'border-red': errors.postal_code }"
                type="text"
                class="input-base border border-green-lightest mt-0">
              <template v-if="errors.postal_code">
                <p class="input-error">{{ errors.postal_code[0] }}</p>
              </template>
            </div>
          </div>

          <!-- City -->
          <div class="w-full flex flex-col lg:flex-row mt-50">
            <div class="w-full lg:w-1/2 flex items-start lg:pr-10">
              <h5 class="text-24 leading-normal">{{ $t("forms.labels.city") }}</h5>
            </div>
            <div class="w-full lg:w-1/2 flex flex-col items-start lg:pl-10">
              <input
                v-model="localCity"
                :disabled="shopExists"
                :class="{ 'input-disabled': shopExists, 'border-red': errors.city }"
                type="text"
                class="input-base border border-green-lightest mt-0">
              <template v-if="errors.city">
                <p class="input-error">{{ errors.city[0] }}</p>
              </template>
            </div>
          </div>

          <!-- Country -->
          <div class="w-full flex flex-col lg:flex-row mt-50">
            <div class="w-full lg:w-1/2 flex items-center lg:pr-10">
              <h5 class="text-24 leading-normal">{{ $t("forms.labels.country") }}</h5>
            </div>
            <div class="w-full lg:w-1/2 flex flex-col items-start lg:pl-10">
              <div class="relative w-full">
                <select
                  v-model="localCountry"
                  :disabled="shopExists"
                  :class="{ 'select-disabled': shopExists, 'border-red': errors.country_id }"
                  class="select border border-green-lightest mt-0">
                  <option
                    value=""
                    selected
                    disabled>
                    {{ $t("forms.select") }}
                  </option>
                  <option
                    v-for="country in countries"
                    :key="country.id"
                    :value="country.id">
                    {{ country.name[locale] }}
                  </option>
                </select>
                <font-awesome-icon
                  v-show="!shopExists"
                  :icon="['fas', 'caret-down']"
                  class="select-caret"/>
                <template v-if="errors.country_id">
                  <p class="input-error">{{ errors.country_id[0] }}</p>
                </template>
              </div>
            </div>
          </div>

          <hr class="border border-green-lightest my-50 lg:my-100">

          <!-- Short description FR -->
          <div class="w-full flex flex-col lg:flex-row mt-50">
            <div class="w-full lg:w-1/2 lg:pr-10">
              <h5 class="text-24 leading-normal">{{ $t("forms.labels.description_short") }}</h5>
              <p class="text-16 leading-normal capitalize my-5">{{ $t("languages.french") }}</p>
              <p class="text-16 text-grey-lighter leading-normal my-5">{{ $t("shop_creator.steps.details.description_short_description") }}</p>
            </div>
            <div class="w-full lg:w-1/2 lg:pl-10">
              <input
                v-model="localShortDescriptionFr"
                :disabled="shopExists"
                :class="{ 'input-disabled': shopExists }"
                type="text"
                class="input-base mt-0">
            </div>
          </div>

          <!-- Long description FR -->
          <div class="w-full flex flex-col lg:flex-row mt-50">
            <div class="w-full lg:w-1/2 lg:pr-10">
              <h5 class="text-24 leading-normal">{{ $t("forms.labels.description_long") }}</h5>
              <p class="text-16 leading-normal capitalize my-5">{{ $t("languages.french") }}</p>
              <p class="text-16 text-grey-lighter leading-normal my-5">{{ $t("shop_creator.steps.details.description_long_description") }}</p>
            </div>
            <div class="w-full lg:w-1/2 lg:pl-10">
              <textarea
                v-model="localLongDescriptionFr"
                :disabled="shopExists"
                :class="{ 'textarea-disabled': shopExists }"
                rows="10"
                class="textarea-base mt-0"/>
            </div>
          </div>

          <hr class="border border-green-lightest my-50 lg:my-100">

          <!-- Short description EN -->
          <div class="w-full flex flex-col lg:flex-row mt-50">
            <div class="w-full lg:w-1/2 lg:pr-10">
              <h5 class="text-24 leading-normal">{{ $t("forms.labels.description_short") }}</h5>
              <p class="text-16 leading-normal capitalize my-5">{{ $t("languages.english") }}</p>
              <p class="text-16 text-grey-lighter leading-normal my-5">{{ $t("shop_creator.steps.details.description_short_description") }}</p>
            </div>
            <div class="w-full lg:w-1/2 lg:pl-10">
              <input
                v-model="localShortDescriptionEn"
                :disabled="shopExists"
                :class="{ 'input-disabled': shopExists }"
                type="text"
                class="input-base mt-0">
            </div>
          </div>

          <!-- Long description EN -->
          <div class="w-full flex flex-col lg:flex-row mt-50">
            <div class="w-full lg:w-1/2 lg:pr-10">
              <h5 class="text-24 leading-normal">{{ $t("forms.labels.description_long") }}</h5>
              <p class="text-16 leading-normal capitalize my-5">{{ $t("languages.english") }}</p>
              <p class="text-16 text-grey-lighter leading-normal my-5">{{ $t("shop_creator.steps.details.description_long_description") }}</p>
            </div>
            <div class="w-full lg:w-1/2 lg:pl-10">
              <textarea
                v-model="localLongDescriptionEn"
                :disabled="shopExists"
                :class="{ 'textarea-disabled': shopExists }"
                rows="10"
                class="textarea-base mt-0"/>
            </div>
          </div>

          <hr class="border border-green-lightest my-50 lg:my-100">

          <!-- Short description DE -->
          <div class="w-full flex flex-col lg:flex-row mt-50">
            <div class="w-full lg:w-1/2 lg:pr-10">
              <h5 class="text-24 leading-normal">{{ $t("forms.labels.description_short") }}</h5>
              <p class="text-16 leading-normal capitalize my-5">{{ $t("languages.german") }}</p>
              <p class="text-16 text-grey-lighter leading-normal my-5">{{ $t("shop_creator.steps.details.description_short_description") }}</p>
            </div>
            <div class="w-full lg:w-1/2 lg:pl-10">
              <input
                v-model="localShortDescriptionDe"
                :disabled="shopExists"
                :class="{ 'input-disabled': shopExists }"
                type="text"
                class="input-base">
            </div>
          </div>

          <!-- Long description DE -->
          <div class="w-full flex flex-col lg:flex-row mt-50">
            <div class="w-full lg:w-1/2 lg:pr-10">
              <h5 class="text-24 leading-normal">{{ $t("forms.labels.description_long") }}</h5>
              <p class="text-16 leading-normal capitalize my-5">{{ $t("languages.german") }}</p>
              <p class="text-16 text-grey-lighter leading-normal my-5">{{ $t("shop_creator.steps.details.description_long_description") }}</p>
            </div>
            <div class="w-full lg:w-1/2 lg:pl-10">
              <textarea
                v-model="localLongDescriptionDe"
                :disabled="shopExists"
                :class="{ 'textarea-disabled': shopExists }"
                rows="10"
                class="textarea-base mt-0"/>
            </div>
          </div>

          <hr class="border border-green-lightest my-50 lg:my-100">

          <!-- Short description IT -->
          <div class="w-full flex flex-col lg:flex-row mt-50">
            <div class="w-full lg:w-1/2 lg:pr-10">
              <h5 class="text-24 leading-normal">{{ $t("forms.labels.description_short") }}</h5>
              <p class="text-16 leading-normal capitalize my-5">{{ $t("languages.italian") }}</p>
              <p class="text-16 text-grey-lighter leading-normal my-5">{{ $t("shop_creator.steps.details.description_short_description") }}</p>
            </div>
            <div class="w-full lg:w-1/2 lg:pl-10">
              <input
                v-model="localShortDescriptionIt"
                :disabled="shopExists"
                :class="{ 'input-disabled': shopExists }"
                type="text"
                class="input-base">
            </div>
          </div>

          <!-- Long description IT -->
          <div class="w-full flex flex-col lg:flex-row mt-50">
            <div class="w-full lg:w-1/2 lg:pr-10">
              <h5 class="text-24 leading-normal">{{ $t("forms.labels.description_long") }}</h5>
              <p class="text-16 leading-normal capitalize my-5">{{ $t("languages.italian") }}</p>
              <p class="text-16 text-grey-lighter leading-normal my-5">{{ $t("shop_creator.steps.details.description_long_description") }}</p>
            </div>
            <div class="w-full lg:w-1/2 lg:pl-10">
              <textarea
                v-model="localLongDescriptionIt"
                :disabled="shopExists"
                :class="{ 'textarea-disabled': shopExists }"
                rows="10"
                class="textarea-base mt-0"/>
            </div>
          </div>

        </section>

        <div class="flex flex-col md:flex-row mt-100">

          <!-- Previous -->
          <button
            class="btn btn-default md:mr-20"
            @click.prevent="prev">
            <font-awesome-icon
              :icon="['far', 'chevron-circle-left']"
              class="mr-5"/>
            {{ $t("buttons.back") }}
          </button>

          <!-- Next -->
          <button
            :class="!shopPostalCode || !shopCity || !shopCountryId ? 'btn-disabled' : btnTheme"
            class="btn mt-20 md:mt-0"
            @click.prevent="store">
            <font-awesome-icon
              :icon="['far', 'chevron-circle-right']"
              class="mr-5"/>
            {{ $t("buttons.customize_my_shop") }}
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
  data() {
    return {
      countries: [],
      errors: {}
    };
  },
  computed: {
    ...mapGetters({
      locale: "locale",
      shop: "shop/shop",
      terms: "shop/terms",
      stepName: "shop/stepName",
      shopCity: "shop/shopCity",
      shopTheme: "shop/shopTheme",
      shopExists: "shop/shopExists",
      stepDetails: "shop/stepDetails",
      shopCountryId: "shop/shopCountryId",
      shopPostalCode: "shop/shopPostalCode",
      shopLongDescriptionFr: "shop/shopLongDescriptionFr",
      shopLongDescriptionEn: "shop/shopLongDescriptionEn",
      shopLongDescriptionDe: "shop/shopLongDescriptionDe",
      shopLongDescriptionIt: "shop/shopLongDescriptionIt",
      shopShortDescriptionFr: "shop/shopShortDescriptionFr",
      shopShortDescriptionEn: "shop/shopShortDescriptionEn",
      shopShortDescriptionDe: "shop/shopShortDescriptionDe",
      shopShortDescriptionIt: "shop/shopShortDescriptionIt"
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
    },
    btnTheme() {
      return `btn-${this.shopTheme}`;
    }
  },
  created() {
    this.getCountries();
  },
  mounted() {
    if (!this.shopExists && this.$auth.user.has_shop) {
      this.getShop();
      this.setStepDetails(true);
    }

    this.setStepName(true);
  },
  methods: {
    ...mapActions({
      setShop: "shop/setShop",
      getShop: "shop/getShop",
      setStepName: "shop/setStepName",
      setShopCity: "shop/setShopCity",
      setStepDetails: "shop/setStepDetails",
      setShopCountryId: "shop/setShopCountryId",
      setShopPostalCode: "shop/setShopPostalCode",
      setShopLongDescriptionFr: "shop/setShopLongDescriptionFr",
      setShopLongDescriptionEn: "shop/setShopLongDescriptionEn",
      setShopLongDescriptionDe: "shop/setShopLongDescriptionDe",
      setShopLongDescriptionIt: "shop/setShopLongDescriptionIt",
      setShopShortDescriptionFr: "shop/setShopShortDescriptionFr",
      setShopShortDescriptionEn: "shop/setShopShortDescriptionEn",
      setShopShortDescriptionDe: "shop/setShopShortDescriptionDe",
      setShopShortDescriptionIt: "shop/setShopShortDescriptionIt"
    }),
    async store() {
      if (this.stepDetails) {
        this.next();
      } else {
        try {
          if (this.terms) {
            let res = await this.$axios.$post("/shops", this.shop);
            this.setShop(res.data);
            this.$toast.success(
              "Votre nouvelle boutique a été créée avec succès!"
            );
            this.next();
          } else {
            this.$toast.error(this.$t("toasts.terms"));
          }
        } catch (e) {
          this.errors = e.response.data.errors;
          this.$toast.error(this.$t("toasts.validation"));
        }
      }
    },
    prev() {
      this.$router.push(this.localePath({ name: "shop-creator-name" }));
    },
    next() {
      this.$router.push(
        this.localePath({ name: "shop-creator-customization" })
      );
    },
    async getCountries() {
      let res = await this.$axios.$get("/countries");
      this.countries = res.data;
    }
  }
};
</script>
