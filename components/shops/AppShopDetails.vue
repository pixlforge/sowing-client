<template>
  <section class="shop-creator__section">

    <!-- Postal code -->
    <div class="form__inline-group form__inline-group--first">
      <div class="form__inline-group-left-side">
        <h5 class="form__inline-group-label">
          {{ $t("forms.labels.postal_code") }}
        </h5>
      </div>
      <div class="form__inline-group-right-side">
        <input
          v-model="localPostalCode"
          :disabled="shopExistsAndNotEditable"
          :class="{ 'form__input--disabled': shopExistsAndNotEditable, 'border-red': errors.postal_code }"
          type="text"
          class="form__input form__input--inline">
        <template v-if="errors.postal_code">
          <p class="form__feedback">
            {{ errors.postal_code[0] }}
          </p>
        </template>
      </div>
    </div>

    <!-- City -->
    <div class="form__inline-group">
      <div class="form__inline-group-left-side">
        <h5 class="form__inline-group-label">
          {{ $t("forms.labels.city") }}
        </h5>
      </div>
      <div class="form__inline-group-right-side">
        <input
          v-model="localCity"
          :disabled="shopExistsAndNotEditable"
          :class="{ 'form__input--disabled': shopExistsAndNotEditable, 'border-red': errors.city }"
          type="text"
          class="form__input form__input--inline">
        <template v-if="errors.city">
          <p class="form__feedback">
            {{ errors.city[0] }}
          </p>
        </template>
      </div>
    </div>

    <!-- Country -->
    <div class="form__inline-group">
      <div class="form__inline-group-left-side">
        <h5 class="form__inline-group-label">
          {{ $t("forms.labels.country") }}
        </h5>
      </div>
      <div class="form__inline-group-right-side">
        <div class="form__select-group">
          <select
            v-model="localCountry"
            :disabled="shopExistsAndNotEditable"
            :class="{ 'form__select--disabled': shopExistsAndNotEditable, 'border-red': errors.country_id }"
            class="form__select form__select--inline">
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
            v-show="!shopExists || editable"
            :icon="['fas', 'caret-down']"
            class="form__select-caret"/>
          <template v-if="errors.country_id">
            <p class="form__feedback">
              {{ errors.country_id[0] }}
            </p>
          </template>
        </div>
      </div>
    </div>

    <hr class="border border-green-200 my-50 lg:my-100">

    <!-- Short description FR -->
    <div class="form__inline-group">
      <div class="form__inline-group-left-side">
        <h5 class="form__inline-group-label">
          {{ $t("forms.labels.description_short") }}
        </h5>
        <p class="form__inline-group-info">
          {{ $t("languages.french") }}
        </p>
        <p class="form__inline-group-description">
          {{ $t("shop_creator.steps.details.description_short_description") }}
        </p>
      </div>
      <div class="form__inline-group-right-side">
        <input
          v-model="localShortDescriptionFr"
          :disabled="shopExistsAndNotEditable"
          :class="{ 'form__input--disabled': shopExistsAndNotEditable }"
          type="text"
          class="form__input form__input--inline">
      </div>
    </div>

    <!-- Long description FR -->
    <div class="form__inline-group">
      <div class="form__inline-group-left-side">
        <h5 class="form__inline-group-label">
          {{ $t("forms.labels.description_long") }}
        </h5>
        <p class="form__inline-group-info">
          {{ $t("languages.french") }}
        </p>
        <p class="form__inline-group-description">
          {{ $t("shop_creator.steps.details.description_long_description") }}
        </p>
      </div>
      <div class="form__inline-group-right-side">
        <textarea
          v-model="localLongDescriptionFr"
          :disabled="shopExistsAndNotEditable"
          :class="{ 'form__textarea--disabled': shopExistsAndNotEditable }"
          rows="10"
          class="form__textarea form__textarea--inline"/>
      </div>
    </div>

    <hr class="border border-green-200 my-50 lg:my-100">

    <!-- Short description EN -->
    <div class="form__inline-group">
      <div class="form__inline-group-left-side">
        <h5 class="form__inline-group-label">
          {{ $t("forms.labels.description_short") }}
        </h5>
        <p class="form__inline-group-info">
          {{ $t("languages.english") }}
        </p>
        <p class="form__inline-group-description">
          {{ $t("shop_creator.steps.details.description_short_description") }}
        </p>
      </div>
      <div class="form__inline-group-right-side">
        <input
          v-model="localShortDescriptionEn"
          :disabled="shopExistsAndNotEditable"
          :class="{ 'form__input--disabled': shopExistsAndNotEditable }"
          type="text"
          class="form__input form__input--inline">
      </div>
    </div>

    <!-- Long description EN -->
    <div class="form__inline-group">
      <div class="form__inline-group-left-side">
        <h5 class="form__inline-group-label">
          {{ $t("forms.labels.description_long") }}
        </h5>
        <p class="form__inline-group-info">
          {{ $t("languages.english") }}
        </p>
        <p class="form__inline-group-description">
          {{ $t("shop_creator.steps.details.description_long_description") }}
        </p>
      </div>
      <div class="form__inline-group-right-side">
        <textarea
          v-model="localLongDescriptionEn"
          :disabled="shopExistsAndNotEditable"
          :class="{ 'form__textarea--disabled': shopExistsAndNotEditable }"
          rows="10"
          class="form__textarea form__textarea--inline"/>
      </div>
    </div>

    <hr class="border border-green-200 my-50 lg:my-100">

    <!-- Short description DE -->
    <div class="form__inline-group">
      <div class="form__inline-group-left-side">
        <h5 class="form__inline-group-label">
          {{ $t("forms.labels.description_short") }}
        </h5>
        <p class="form__inline-group-info">
          {{ $t("languages.german") }}
        </p>
        <p class="form__inline-group-description">
          {{ $t("shop_creator.steps.details.description_short_description") }}
        </p>
      </div>
      <div class="form__inline-group-right-side">
        <input
          v-model="localShortDescriptionDe"
          :disabled="shopExistsAndNotEditable"
          :class="{ 'form__input--disabled': shopExistsAndNotEditable }"
          type="text"
          class="form__input form__input--inline">
      </div>
    </div>

    <!-- Long description DE -->
    <div class="form__inline-group">
      <div class="form__inline-group-left-side">
        <h5 class="form__inline-group-label">
          {{ $t("forms.labels.description_long") }}
        </h5>
        <p class="form__inline-group-info">
          {{ $t("languages.german") }}
        </p>
        <p class="form__inline-group-description">
          {{ $t("shop_creator.steps.details.description_long_description") }}
        </p>
      </div>
      <div class="form__inline-group-right-side">
        <textarea
          v-model="localLongDescriptionDe"
          :disabled="shopExistsAndNotEditable"
          :class="{ 'form__textarea--disabled': shopExistsAndNotEditable }"
          rows="10"
          class="form__textarea form__textarea--inline"/>
      </div>
    </div>

    <hr class="border border-green-200 my-50 lg:my-100">

    <!-- Short description IT -->
    <div class="form__inline-group">
      <div class="form__inline-group-left-side">
        <h5 class="form__inline-group-label">
          {{ $t("forms.labels.description_short") }}
        </h5>
        <p class="form__inline-group-info">
          {{ $t("languages.italian") }}
        </p>
        <p class="form__inline-group-description">
          {{ $t("shop_creator.steps.details.description_short_description") }}
        </p>
      </div>
      <div class="form__inline-group-right-side">
        <input
          v-model="localShortDescriptionIt"
          :disabled="shopExistsAndNotEditable"
          :class="{ 'form__input--disabled': shopExistsAndNotEditable }"
          type="text"
          class="form__input form__input--inline">
      </div>
    </div>

    <!-- Long description IT -->
    <div class="form__inline-group">
      <div class="form__inline-group-left-side">
        <h5 class="form__inline-group-label">
          {{ $t("forms.labels.description_long") }}
        </h5>
        <p class="form__inline-group-info">
          {{ $t("languages.italian") }}
        </p>
        <p class="form__inline-group-description">
          {{ $t("shop_creator.steps.details.description_long_description") }}
        </p>
      </div>
      <div class="form__inline-group-right-side">
        <textarea
          v-model="localLongDescriptionIt"
          :disabled="shopExistsAndNotEditable"
          :class="{ 'form__textarea--disabled': shopExistsAndNotEditable }"
          rows="10"
          class="form__textarea form__textarea--inline"/>
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
    },
    errors: {
      type: Object,
      required: true
    },
    editable: {
      type: Boolean,
      required: false,
      default: false
    }
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
    },
    shopExistsAndNotEditable() {
      return this.shopExists && !this.editable;
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
