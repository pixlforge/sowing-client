<template>
  <section class="w-full">

    <!-- Postal code -->
    <ShopDetailsGroupInline
      :title="$t('form.postal_code.label')"
    >
      <FormInput
        v-model="localPostalCode"
        :disabled="shopExistsAndNotEditable"
        :errors="errors"
        name="postal_code"
      />
      <FormValidation
        :errors="errors"
        name="postal_code"
      />
    </ShopDetailsGroupInline>

    <!-- City -->
    <ShopDetailsGroupInline
      :title="$t('form.city.label')"
    >
      <FormInput
        v-model="localCity"
        :disabled="shopExistsAndNotEditable"
        :errors="errors"
        name="city"
      />
      <FormValidation
        :errors="errors"
        name="city"
      />
    </ShopDetailsGroupInline>

    <!-- Country -->
    <ShopDetailsGroupInline
      :title="$t('form.country.label')"
    >
      <FormSelect
        v-model="localCountry"
        :disabled="shopExistsAndNotEditable"
        :errors="errors"
        name="country_id"
      >
        <option
          v-for="country in countries"
          :key="country.id"
          :value="country.id"
        >
          {{ country.name[locale] }}
        </option>
      </FormSelect>
      <FormValidation
        :errors="errors"
        name="country_id"
      />
    </ShopDetailsGroupInline>

    <FormDivider large/>

    <!-- Short description FR -->
    <ShopDetailsGroup
      :title="$t('form.description_short.label')"
      :language="$t('languages.french')"
      :description="$t('shop_creator.steps.details.description_short_description')"
      class="my-72"
    >
      <FormInput
        id="description_short_fr"
        v-model="localShortDescriptionFr"
        :disabled="shopExistsAndNotEditable"
        :errors="errors"
        name="description_short"
      />
    </ShopDetailsGroup>

    <!-- Long description FR -->
    <ShopDetailsGroup
      :title="$t('form.description_long.label')"
      :language="$t('languages.french')"
      :description="$t('shop_creator.steps.details.description_long_description')"
      class="my-72"
    >
      <FormTextarea
        v-model="localLongDescriptionFr"
        :disabled="shopExistsAndNotEditable"
        :errors="errors"
        name="description_long"
      />
    </ShopDetailsGroup>

    <FormDivider large/>

    <!-- Short description EN -->
    <ShopDetailsGroup
      :title="$t('form.description_short.label')"
      :language="$t('languages.english')"
      :description="$t('shop_creator.steps.details.description_short_description')"
      class="my-72"
    >
      <FormInput
        id="description_short_en"
        v-model="localShortDescriptionEn"
        :disabled="shopExistsAndNotEditable"
        :errors="errors"
        name="description_short"
      />
    </ShopDetailsGroup>

    <!-- Long description EN -->
    <ShopDetailsGroup
      :title="$t('form.description_long.label')"
      :language="$t('languages.english')"
      :description="$t('shop_creator.steps.details.description_long_description')"
      class="my-72"
    >
      <FormTextarea
        v-model="localLongDescriptionEn"
        :disabled="shopExistsAndNotEditable"
        :errors="errors"
        name="description_long"
      />
    </ShopDetailsGroup>

    <FormDivider large/>

    <!-- Short description DE -->
    <ShopDetailsGroup
      :title="$t('form.description_short.label')"
      :language="$t('languages.german')"
      :description="$t('shop_creator.steps.details.description_short_description')"
      class="my-72"
    >
      <FormInput
        id="description_short_de"
        v-model="localShortDescriptionDe"
        :disabled="shopExistsAndNotEditable"
        :errors="errors"
        name="description_short"
      />
    </ShopDetailsGroup>

    <!-- Long description DE -->
    <ShopDetailsGroup
      :title="$t('form.description_long.label')"
      :language="$t('languages.german')"
      :description="$t('shop_creator.steps.details.description_long_description')"
      class="my-72"
    >
      <FormTextarea
        v-model="localLongDescriptionDe"
        :disabled="shopExistsAndNotEditable"
        :errors="errors"
        name="description_long"
      />
    </ShopDetailsGroup>

    <FormDivider large/>

    <!-- Short description IT -->
    <ShopDetailsGroup
      :title="$t('form.description_short.label')"
      :language="$t('languages.italian')"
      :description="$t('shop_creator.steps.details.description_short_description')"
      class="my-72"
    >
      <FormInput
        id="description_short_it"
        v-model="localShortDescriptionIt"
        :disabled="shopExistsAndNotEditable"
        :errors="errors"
        name="description_short"
      />
    </ShopDetailsGroup>

    <!-- Long description IT -->
    <ShopDetailsGroup
      :title="$t('form.description_long.label')"
      :language="$t('languages.italian')"
      :description="$t('shop_creator.steps.details.description_long_description')"
      class="my-72"
    >
      <FormTextarea
        v-model="localLongDescriptionIt"
        :disabled="shopExistsAndNotEditable"
        :errors="errors"
        name="description_long"
      />
    </ShopDetailsGroup>

  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import FormInput from '@/components/forms/FormInput'
import FormSelect from '@/components/forms/FormSelect'
import FormDivider from '@/components/forms/FormDivider'
import FormTextarea from '@/components/forms/FormTextarea'
import FormValidation from '@/components/forms/FormValidation'
import ShopDetailsGroup from '@/components/shops/ShopDetailsGroup'
import ShopDetailsGroupInline from '@/components/shops/ShopDetailsGroupInline'

export default {
  components: {
    FormInput,
    FormSelect,
    FormDivider,
    FormTextarea,
    FormValidation,
    ShopDetailsGroup,
    ShopDetailsGroupInline
  },
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
      locale: 'locale',
      shopCity: 'shop/shopCity',
      shopExists: 'shop/shopExists',
      shopCountryId: 'shop/shopCountryId',
      shopPostalCode: 'shop/shopPostalCode',
      shopLongDescriptionFr: 'shop/shopLongDescriptionFr',
      shopLongDescriptionEn: 'shop/shopLongDescriptionEn',
      shopLongDescriptionDe: 'shop/shopLongDescriptionDe',
      shopLongDescriptionIt: 'shop/shopLongDescriptionIt',
      shopShortDescriptionFr: 'shop/shopShortDescriptionFr',
      shopShortDescriptionEn: 'shop/shopShortDescriptionEn',
      shopShortDescriptionDe: 'shop/shopShortDescriptionDe',
      shopShortDescriptionIt: 'shop/shopShortDescriptionIt'
    }),
    localPostalCode: {
      get() {
        return this.shopPostalCode
      },
      set(postalCode) {
        this.setShopPostalCode(postalCode)
      }
    },
    localCity: {
      get() {
        return this.shopCity
      },
      set(city) {
        this.setShopCity(city)
      }
    },
    localCountry: {
      get() {
        return this.shopCountryId
      },
      set(countryId) {
        this.setShopCountryId(countryId)
      }
    },
    localShortDescriptionFr: {
      get() {
        return this.shopShortDescriptionFr
      },
      set(description) {
        this.setShopShortDescriptionFr(description)
      }
    },
    localLongDescriptionFr: {
      get() {
        return this.shopLongDescriptionFr
      },
      set(description) {
        this.setShopLongDescriptionFr(description)
      }
    },
    localShortDescriptionEn: {
      get() {
        return this.shopShortDescriptionEn
      },
      set(description) {
        this.setShopShortDescriptionEn(description)
      }
    },
    localLongDescriptionEn: {
      get() {
        return this.shopLongDescriptionEn
      },
      set(description) {
        this.setShopLongDescriptionEn(description)
      }
    },
    localShortDescriptionDe: {
      get() {
        return this.shopShortDescriptionDe
      },
      set(description) {
        this.setShopShortDescriptionDe(description)
      }
    },
    localLongDescriptionDe: {
      get() {
        return this.shopLongDescriptionDe
      },
      set(description) {
        this.setShopLongDescriptionDe(description)
      }
    },
    localShortDescriptionIt: {
      get() {
        return this.shopShortDescriptionIt
      },
      set(description) {
        this.setShopShortDescriptionIt(description)
      }
    },
    localLongDescriptionIt: {
      get() {
        return this.shopLongDescriptionIt
      },
      set(description) {
        this.setShopLongDescriptionIt(description)
      }
    },
    shopExistsAndNotEditable() {
      return this.shopExists && !this.editable
    }
  },
  methods: {
    ...mapActions({
      setShopCity: 'shop/setShopCity',
      setShopCountryId: 'shop/setShopCountryId',
      setShopPostalCode: 'shop/setShopPostalCode',
      setShopLongDescriptionFr: 'shop/setShopLongDescriptionFr',
      setShopLongDescriptionEn: 'shop/setShopLongDescriptionEn',
      setShopLongDescriptionDe: 'shop/setShopLongDescriptionDe',
      setShopLongDescriptionIt: 'shop/setShopLongDescriptionIt',
      setShopShortDescriptionFr: 'shop/setShopShortDescriptionFr',
      setShopShortDescriptionEn: 'shop/setShopShortDescriptionEn',
      setShopShortDescriptionDe: 'shop/setShopShortDescriptionDe',
      setShopShortDescriptionIt: 'shop/setShopShortDescriptionIt'
    })
  }
}
</script>
