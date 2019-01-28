<template>
  <section class="w-full">

    <!-- Postal code -->
    <div class="w-full flex flex-col lg:flex-row mt-100">
      <div class="w-full lg:w-1/2 lg:pr-10">
        <h5 class="text-24 leading-normal">{{ $t("forms.labels.postal_code") }}</h5>
      </div>
      <div class="w-full lg:w-1/2 lg:pl-10">
        <input
          v-model="localPostalCode"
          :disabled="shopExists"
          :class="{ 'input-disabled': shopExists, 'border-red': errors.postal_code }"
          type="text"
          class="input-base border border-green-lightest mt-20 lg:mt-0">
        <template v-if="errors.postal_code">
          <p class="input-error">{{ errors.postal_code[0] }}</p>
        </template>
      </div>
    </div>

    <!-- City -->
    <div class="w-full flex flex-col lg:flex-row mt-50">
      <div class="w-full lg:w-1/2 lg:pr-10">
        <h5 class="text-24 leading-normal">{{ $t("forms.labels.city") }}</h5>
      </div>
      <div class="w-full lg:w-1/2 lg:pl-10">
        <input
          v-model="localCity"
          :disabled="shopExists"
          :class="{ 'input-disabled': shopExists, 'border-red': errors.city }"
          type="text"
          class="input-base border border-green-lightest mt-20 lg:mt-0">
        <template v-if="errors.city">
          <p class="input-error">{{ errors.city[0] }}</p>
        </template>
      </div>
    </div>

    <!-- Country -->
    <div class="w-full flex flex-col lg:flex-row mt-50">
      <div class="w-full lg:w-1/2 lg:pr-10">
        <h5 class="text-24 leading-normal">{{ $t("forms.labels.country") }}</h5>
      </div>
      <div class="w-full lg:w-1/2 lg:pl-10">
        <div class="relative w-full">
          <select
            v-model="localCountry"
            :disabled="shopExists"
            :class="{ 'select-disabled': shopExists, 'border-red': errors.country_id }"
            class="select border border-green-lightest mt-20 lg:mt-0">
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
          class="input-base mt-20 lg:mt-0">
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
          class="textarea-base mt-20 lg:mt-0"/>
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
          class="input-base mt-20 lg:mt-0">
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
          class="textarea-base mt-20 lg:mt-0"/>
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
          class="input-base mt-20 lg:mt-0">
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
          class="textarea-base mt-20 lg:mt-0"/>
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
          class="input-base mt-20 lg:mt-0">
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
          class="textarea-base mt-20 lg:mt-0"/>
      </div>
    </div>

  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    countries: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      errors: {}
    };
  },
  computed: {
    ...mapGetters({
      locale: "locale",
      shopCity: "shop/shopCity",
      shopExists: "shop/shopExists",
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
    }
  },
  methods: {
    ...mapActions({
      setShopCity: "shop/setShopCity",
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
    })
  }
};
</script>
