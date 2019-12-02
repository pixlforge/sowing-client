<template>
  <div>

    <!-- Step -->
    <AppProductCreatorStep>
      3/5
    </AppProductCreatorStep>

    <!-- Header -->
    <header class="flex flex-wrap items-center my-30">

      <!-- Back -->
      <AppBackButton
        :route="{
          name: 'shop-management-products-create-product-slug-category',
          params: {
            slug: product.slug
          }
        }"
        class="mr-20"
      />

      <!-- Page title -->
      <h1 class="text-20 sm:text-24 md:text-30 font-extrabold leading-relaxed text-center md:text-left">
        {{ $t('products.management.create.price_for') }}
        <span :class="`text-${shopTheme}-500`">
          {{ product.name[locale] || $t('products.management.create.unnamed') }}
        </span>
      </h1>
    </header>

    <!-- Infotip -->
    <AppInfoTip icon="info">
      {{ $t('products.management.create.tips.price') }}
    </AppInfoTip>

    <!-- Form -->
    <form
      @submit.prevent="update"
      class="flex flex-wrap -mx-10"
    >
      <AppFormSection class="lg:w-full">
        <AppFormSectionTitle>
          {{ $t('forms.labels.price') }}
        </AppFormSectionTitle>
        <AppFormFieldset>
          <AppFormGroup>
            <AppFormLabel name="price">
              {{ $t('forms.labels.price') }}
            </AppFormLabel>
            <AppFormLabelDescription>
              Fixez le prix de votre produit en francs suisses (CHF) en tenant compte des frais d'envoi ainsi que des frais perçus par la plateforme.
            </AppFormLabelDescription>
            <AppFormInput
              ref="priceInput"
              v-model="displayPrice"
              :errors="errors"
              name="price"
            />
            <AppFormValidation
              :errors="errors"
              name="price"
            />
          </AppFormGroup>
        </AppFormFieldset>
      </AppFormSection>

      <!-- Controls -->
      <AppFormSection class="lg:w-full">
        <div class="flex justify-center items-center">

          <!-- Submit -->
          <AppButtonPrimary
            :color="shopTheme"
            icon="check-circle"
            size="large"
            type="submit"
            class="mr-10"
          >
            {{ $t('buttons.next') }}
          </AppButtonPrimary>

          <!-- Cancel -->
          <AppButtonLinkTertiary
            :route="{
              name: 'shop-management-products-create-product-slug-category',
              params: {
                slug: product.slug
              }
            }"
            icon="arrow-left"
          >
            {{ $t('buttons.back') }}
          </AppButtonLinkTertiary>
        </div>
      </AppFormSection>
    </form>
  </div>
</template>

<script>
import AutoNumeric from 'autonumeric'
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import AppInfoTip from '@/components/globals/AppInfoTip'
import AppFormGroup from '@/components/forms/AppFormGroup'
import AppFormInput from '@/components/forms/AppFormInput'
import AppFormLabel from '@/components/forms/AppFormLabel'
import AppBackButton from '@/components/buttons/AppBackButton'
import AppFormSection from '@/components/forms/AppFormSection'
import AppFormFieldset from '@/components/forms/AppFormFieldset'
import AppFormValidation from '@/components/forms/AppFormValidation'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'
import AppFormSectionTitle from '@/components/forms/AppFormSectionTitle'
import AppButtonLinkTertiary from '@/components/buttons/AppButtonLinkTertiary'
import AppFormLabelDescription from '@/components/forms/AppFormLabelDescription'
import AppProductCreatorStep from '@/components/products/creator/AppProductCreatorStep'

export default {
  head() {
    return {
      title: `${this.$t('products.management.create.add_category')} | ${this.product.name[this.locale]}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex'
        }
      ]
    }
  },
  layout: 'create-product',
  middleware: [
    'authenticated',
    'hasShop'
  ],
  components: {
    AppInfoTip,
    AppFormGroup,
    AppFormInput,
    AppFormLabel,
    AppBackButton,
    AppFormSection,
    AppFormFieldset,
    AppFormValidation,
    AppButtonPrimary,
    AppFormSectionTitle,
    AppButtonLinkTertiary,
    AppFormLabelDescription,
    AppProductCreatorStep
  },
  mixins: [theming],
  data() {
    return {
      form: {
        price: null
      },
      product: {},
      displayPrice: null,
      autoNumeric: {},
      errors: {}
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale'
    })
  },
  watch: {
    displayPrice() {
      this.autoNumeric.reformat()
      this.form.price = this.autoNumeric.rawValue * 100
    }
  },
  async asyncData({ app, params }) {
    const shop = await app.$axios.$get('/user/shop')
    const product = await app.$axios.$get(`/products/${params.slug}`)

    return {
      shop: shop.data,
      product: product.data
    }
  },
  mounted() {
    this.setShop(this.shop)
    this.initAutoNumeric()
  },
  methods: {
    ...mapActions({
      setShop: 'shop/setShop'
    }),
    update() {
      console.log('Update')
    },
    initAutoNumeric() {
      this.autoNumeric = new AutoNumeric(this.$refs.priceInput.$el, {
        digitGroupSeparator: "'",
        decimalCharacter: '.',
        decimalCharacterAlternative: ',',
        currencySymbol: 'CHF ',
        currencySymbolPlacement: AutoNumeric.options.currencySymbolPlacement.prefix,
        roundingMethod: AutoNumeric.options.roundingMethod.toNearest05Alt,
        minimumValue: '1',
        selectNumberOnly: true,
        modifyValueOnWheel: false
      })
    }
  }
}
</script>
