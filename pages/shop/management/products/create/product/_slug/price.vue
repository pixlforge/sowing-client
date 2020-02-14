<template>
  <div>

    <!-- Step -->
    <ProductCreatorStep>
      3/5
    </ProductCreatorStep>

    <!-- Header -->
    <header class="flex flex-wrap items-center my-30">

      <!-- Back -->
      <BackButton
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
    <InfoTip icon="info">
      {{ $t('products.management.create.tips.price') }}
    </InfoTip>

    <!-- Form -->
    <form
      @submit.prevent="update"
      class="flex flex-wrap -mx-10"
    >
      <FormSection class="lg:w-full">
        <FormSectionTitle>
          {{ $t('form.price.label') }}
        </FormSectionTitle>
        <FormFieldset>
          <FormGroup>
            <FormLabel name="price">
              {{ $t('form.price.label') }}
            </FormLabel>
            <FormLabelDescription>
              Fixez le prix de votre produit en francs suisses (CHF) en tenant compte des frais d'envoi ainsi que des frais perçus par la plateforme.
            </FormLabelDescription>
            <FormInput
              ref="priceInput"
              v-model="displayPrice"
              :errors="errors"
              name="price"
            />
            <FormValidation
              :errors="errors"
              name="price"
            />
          </FormGroup>
        </FormFieldset>
      </FormSection>

      <!-- Controls -->
      <FormSection class="lg:w-full">
        <div class="flex justify-center items-center">

          <!-- Cancel -->
          <ButtonLinkTertiary
            :route="{
              name: 'shop-management-products-create-product-slug-category',
              params: {
                slug: product.slug
              }
            }"
            icon="arrow-left"
          >
            {{ $t('buttons.back') }}
          </ButtonLinkTertiary>

          <!-- Submit -->
          <ButtonPrimary
            :color="shopTheme"
            icon="check-circle"
            size="large"
            type="submit"
            class="ml-10"
          >
            {{ $t('buttons.next') }}
          </ButtonPrimary>
        </div>
      </FormSection>
    </form>
  </div>
</template>

<script>
import AutoNumeric from 'autonumeric'
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import InfoTip from '@/components/globals/InfoTip'
import FormGroup from '@/components/forms/FormGroup'
import FormInput from '@/components/forms/FormInput'
import FormLabel from '@/components/forms/FormLabel'
import BackButton from '@/components/buttons/BackButton'
import FormSection from '@/components/forms/FormSection'
import FormFieldset from '@/components/forms/FormFieldset'
import FormValidation from '@/components/forms/FormValidation'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import FormSectionTitle from '@/components/forms/FormSectionTitle'
import ButtonLinkTertiary from '@/components/buttons/ButtonLinkTertiary'
import FormLabelDescription from '@/components/forms/FormLabelDescription'
import ProductCreatorStep from '@/components/products/creator/ProductCreatorStep'

export default {
  components: {
    InfoTip,
    FormGroup,
    FormInput,
    FormLabel,
    BackButton,
    FormSection,
    FormFieldset,
    FormValidation,
    ButtonPrimary,
    FormSectionTitle,
    ButtonLinkTertiary,
    FormLabelDescription,
    ProductCreatorStep
  },
  mixins: [theming],
  layout: 'create-product',
  middleware: [
    'authenticated',
    'hasShop'
  ],
  head() {
    return {
      title: `${this.$t('products.management.create.price')} | ${this.product.name[this.locale]} | ${this.$t('products.management.create.title')} | ${this.shop.name}`,
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
    async update() {
      try {
        await this.$axios.$patch(`/products/${this.product.slug}`, this.form)
        this.$router.push({
          name: 'shop-management-products-create-product-slug-variations',
          params: {
            slug: this.product.slug
          }
        })
      } catch (e) {
        this.errors = e.response.data.errors
      }
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
      if (this.product.price.detailed.amount > 0) {
        this.autoNumeric.set(this.product.price.detailed.amount)
        this.form.price = this.autoNumeric.rawValue * 100
      }
    }
  }
}
</script>
