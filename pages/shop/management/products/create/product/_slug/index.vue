<template>
  <div>

    <!-- Step -->
    <ProductCreatorStep>
      1/5
    </ProductCreatorStep>

    <!-- Header -->
    <header class="flex flex-wrap items-center my-30">

      <!-- Back -->
      <ButtonBack
        :route="{ name: 'shop-management-products' }"
        class="mr-20"
      />

      <!-- Page title -->
      <Heading
        tag="h1"
        visual="h4"
        utilities="text-center"
      >
        {{ $t('products.management.create.name_and_description_for') }}
        <span :class="`text-${shopTheme}-500`">
          {{ form.name[locale] || $t('products.management.create.unnamed') }}
        </span>
      </Heading>
    </header>

    <!-- Infotip -->
    <InfoTip icon="info">
      {{ $t('products.management.create.tips.name_and_description') }}
    </InfoTip>

    <!-- Form -->
    <form
      @submit.prevent="update"
      class="flex flex-wrap -mx-10"
    >

      <!-- French -->
      <FormSection>
        <FormSectionTitle>
          {{ $t('languages.french') }}
        </FormSectionTitle>
        <FormFieldset>

          <!-- Name -->
          <FormGroup>
            <FormLabel name="name.fr">
              {{ $t('form.name.label') }}
            </FormLabel>
            <FormLabelDescription>
              Le nom de votre produit. Entrez, en français, un nom descriptif identifiant votre produit.
            </FormLabelDescription>
            <FormInput
              v-model="form.name.fr"
              :errors="errors"
              name="name.fr"
            />
            <FormValidation
              :errors="errors"
              name="name.fr"
            />
          </FormGroup>

          <!-- Description -->
          <FormGroup>
            <FormLabel name="description.fr">
              {{ $t('form.description.label') }}
            </FormLabel>
            <FormLabelDescription>
              Décrivez, en français, votre produit de la manière dont vous le voulez.
            </FormLabelDescription>
            <FormTextarea
              v-model="form.description.fr"
              :errors="errors"
              name="description.fr"
            />
            <FormValidation
              :errors="errors"
              name="description.fr"
            />
          </FormGroup>
        </FormFieldset>
      </FormSection>

      <!-- English -->
      <FormSection>
        <FormSectionTitle>
          {{ $t('languages.english') }}
        </FormSectionTitle>
        <FormFieldset>

          <!-- Name -->
          <FormGroup>
            <FormLabel name="name.en">
              {{ $t('form.name.label') }}
            </FormLabel>
            <FormLabelDescription>
              Le nom de votre produit. Entrez, en anglais, un nom descriptif identifiant votre produit.
            </FormLabelDescription>
            <FormInput
              v-model="form.name.en"
              :errors="errors"
              name="name.en"
            />
            <FormValidation
              :errors="errors"
              name="name.en"
            />
          </FormGroup>

          <!-- Description -->
          <FormGroup>
            <FormLabel name="description.en">
              {{ $t('form.description.label') }}
            </FormLabel>
            <FormLabelDescription>
              Décrivez, en anglais, votre produit de la manière dont vous le voulez.
            </FormLabelDescription>
            <FormTextarea
              v-model="form.description.en"
              :errors="errors"
              name="description.en"
            />
            <FormValidation
              :errors="errors"
              name="description.en"
            />
          </FormGroup>
        </FormFieldset>
      </FormSection>

      <!-- German -->
      <FormSection>
        <FormSectionTitle>
          {{ $t('languages.german') }}
        </FormSectionTitle>
        <FormFieldset>

          <!-- Name -->
          <FormGroup>
            <FormLabel name="name.de">
              {{ $t('form.name.label') }}
            </FormLabel>
            <FormLabelDescription>
              Le nom de votre produit. Entrez, en allemand, un nom descriptif identifiant votre produit.
            </FormLabelDescription>
            <FormInput
              v-model="form.name.de"
              :errors="errors"
              name="name.de"
            />
            <FormValidation
              :errors="errors"
              name="name.de"
            />
          </FormGroup>

          <!-- Description -->
          <FormGroup>
            <FormLabel name="description.de">
              {{ $t('form.description.label') }}
            </FormLabel>
            <FormLabelDescription>
              Décrivez, en allemand, votre produit de la manière dont vous le voulez.
            </FormLabelDescription>
            <FormTextarea
              v-model="form.description.de"
              :errors="errors"
              name="description.de"
            />
            <FormValidation
              :errors="errors"
              name="description.de"
            />
          </FormGroup>
        </FormFieldset>
      </FormSection>

      <!-- Italian -->
      <FormSection>
        <FormSectionTitle>
          {{ $t('languages.italian') }}
        </FormSectionTitle>
        <FormFieldset>

          <!-- Name -->
          <FormGroup>
            <FormLabel name="name.it">
              {{ $t('form.name.label') }}
            </FormLabel>
            <FormLabelDescription>
              Le nom de votre produit. Entrez, en italien, un nom descriptif identifiant votre produit.
            </FormLabelDescription>
            <FormInput
              v-model="form.name.it"
              :errors="errors"
              name="name.it"
            />
            <FormValidation
              :errors="errors"
              name="name.it"
            />
          </FormGroup>

          <!-- Description -->
          <FormGroup>
            <FormLabel name="description.it">
              {{ $t('form.description.label') }}
            </FormLabel>
            <FormLabelDescription>
              Décrivez, en italien, votre produit de la manière dont vous le voulez.
            </FormLabelDescription>
            <FormTextarea
              v-model="form.description.it"
              :errors="errors"
              name="description.it"
            />
            <FormValidation
              :errors="errors"
              name="description.it"
            />
          </FormGroup>
        </FormFieldset>
      </FormSection>

      <!-- Controls -->
      <FormSection class="lg:w-full">
        <div class="flex justify-center items-center">

          <!-- Cancel -->
          <ButtonLinkTertiary
            :route="{ name: 'shop-management-products' }"
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
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import ButtonBack from '@/components/buttons/ButtonBack'
import ButtonLinkTertiary from '@/components/buttons/ButtonLinkTertiary'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import FormFieldset from '@/components/forms/FormFieldset'
import FormGroup from '@/components/forms/FormGroup'
import FormLabel from '@/components/forms/FormLabel'
import FormLabelDescription from '@/components/forms/FormLabelDescription'
import FormInput from '@/components/forms/FormInput'
import FormSection from '@/components/forms/FormSection'
import FormSectionTitle from '@/components/forms/FormSectionTitle'
import FormTextarea from '@/components/forms/FormTextarea'
import FormValidation from '@/components/forms/FormValidation'
import Heading from '@/components/globals/Heading'
import InfoTip from '@/components/globals/InfoTip'
import ProductCreatorStep from '@/components/products/creator/ProductCreatorStep'

export default {
  components: {
    ButtonBack,
    ButtonLinkTertiary,
    ButtonPrimary,
    FormFieldset,
    FormGroup,
    FormLabel,
    FormLabelDescription,
    FormInput,
    FormSection,
    FormSectionTitle,
    FormTextarea,
    FormValidation,
    Heading,
    InfoTip,
    ProductCreatorStep
  },
  mixins: [theming],
  middleware: [
    'authenticated',
    'hasShop'
  ],
  layout: 'create-product',
  head() {
    return {
      title: `${this.$t('products.management.create.name_and_description')} | ${this.form.name[this.locale]} | ${this.$t('products.management.create.title')} | ${this.shop.name}`,
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
        name: {
          en: '',
          fr: '',
          de: '',
          it: ''
        },
        description: {
          en: '',
          fr: '',
          de: '',
          it: ''
        },
        slug: null
      },
      errors: {}
    }
  },
  computed: {
    ...mapGetters({
      categories: 'categories',
      locale: 'locale'
    })
  },
  async asyncData({ app, params }) {
    const shop = await app.$axios.$get('/user/shop')
    const product = await app.$axios.$get(`/products/${params.slug}`)

    return {
      shop: shop.data,
      form: {
        name: product.data.name,
        description: product.data.description,
        slug: product.data.slug
      }
    }
  },
  mounted() {
    this.setShop(this.shop)
  },
  methods: {
    ...mapActions({
      setShop: 'shop/setShop'
    }),
    update() {
      try {
        this.errors = {}
        this.$router.push({
          name: 'shop-management-products-create-product-slug-category',
          params: {
            slug: this.form.slug
          }
        })
      } catch (e) {
        this.errors = e.response.data.errors
      }
    }
  }
}
</script>
