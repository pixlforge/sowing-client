<template>
  <div>

    <!-- Step -->
    <AppProductCreatorStep>
      1/5
    </AppProductCreatorStep>

    <!-- Header -->
    <header class="flex flex-wrap items-center my-30">

      <!-- Back -->
      <AppBackButton
        :route="{ name: 'shop-management-products' }"
        class="mr-20"
      />

      <!-- Page title -->
      <h1 class="text-20 sm:text-24 md:text-30 font-extrabold leading-relaxed text-center md:text-left">
        {{ $t('products.management.create.name_and_description_for') }}
        <span :class="`text-${shopTheme}-500`">
          {{ form.name[locale] || $t('products.management.create.unnamed') }}
        </span>
      </h1>
    </header>

    <!-- Infotip -->
    <AppInfoTip icon="info">
      {{ $t('products.management.create.tips.name_and_description') }}
    </AppInfoTip>

    <!-- Form -->
    <form
      @submit.prevent="update"
      class="flex flex-wrap -mx-10"
    >

      <!-- French -->
      <AppFormSection>
        <AppFormSectionTitle>
          {{ $t('languages.french') }}
        </AppFormSectionTitle>
        <AppFormFieldset>

          <!-- Name -->
          <AppFormGroup>
            <AppFormLabel name="name.fr">
              {{ $t('forms.labels.name') }}
            </AppFormLabel>
            <AppFormLabelDescription>
              Le nom de votre produit. Entrez, en français, un nom descriptif identifiant votre produit.
            </AppFormLabelDescription>
            <AppFormInput
              v-model="form.name.fr"
              :errors="errors"
              name="name.fr"
            />
            <AppFormValidation
              :errors="errors"
              name="name.fr"
            />
          </AppFormGroup>

          <!-- Description -->
          <AppFormGroup>
            <AppFormLabel name="description.fr">
              {{ $t('forms.labels.description') }}
            </AppFormLabel>
            <AppFormLabelDescription>
              Décrivez, en français, votre produit de la manière dont vous le voulez.
            </AppFormLabelDescription>
            <AppFormTextarea
              v-model="form.description.fr"
              :errors="errors"
              name="description.fr"
            />
            <AppFormValidation
              :errors="errors"
              name="description.fr"
            />
          </AppFormGroup>
        </AppFormFieldset>
      </AppFormSection>

      <!-- English -->
      <AppFormSection>
        <AppFormSectionTitle>
          {{ $t('languages.english') }}
        </AppFormSectionTitle>
        <AppFormFieldset>

          <!-- Name -->
          <AppFormGroup>
            <AppFormLabel name="name.en">
              {{ $t('forms.labels.name') }}
            </AppFormLabel>
            <AppFormLabelDescription>
              Le nom de votre produit. Entrez, en anglais, un nom descriptif identifiant votre produit.
            </AppFormLabelDescription>
            <AppFormInput
              v-model="form.name.en"
              :errors="errors"
              name="name.en"
            />
            <AppFormValidation
              :errors="errors"
              name="name.en"
            />
          </AppFormGroup>

          <!-- Description -->
          <AppFormGroup>
            <AppFormLabel name="description.en">
              {{ $t('forms.labels.description') }}
            </AppFormLabel>
            <AppFormLabelDescription>
              Décrivez, en anglais, votre produit de la manière dont vous le voulez.
            </AppFormLabelDescription>
            <AppFormTextarea
              v-model="form.description.en"
              :errors="errors"
              name="description.en"
            />
            <AppFormValidation
              :errors="errors"
              name="description.en"
            />
          </AppFormGroup>
        </AppFormFieldset>
      </AppFormSection>

      <!-- German -->
      <AppFormSection>
        <AppFormSectionTitle>
          {{ $t('languages.german') }}
        </AppFormSectionTitle>
        <AppFormFieldset>

          <!-- Name -->
          <AppFormGroup>
            <AppFormLabel name="name.de">
              {{ $t('forms.labels.name') }}
            </AppFormLabel>
            <AppFormLabelDescription>
              Le nom de votre produit. Entrez, en allemand, un nom descriptif identifiant votre produit.
            </AppFormLabelDescription>
            <AppFormInput
              v-model="form.name.de"
              :errors="errors"
              name="name.de"
            />
            <AppFormValidation
              :errors="errors"
              name="name.de"
            />
          </AppFormGroup>

          <!-- Description -->
          <AppFormGroup>
            <AppFormLabel name="description.de">
              {{ $t('forms.labels.description') }}
            </AppFormLabel>
            <AppFormLabelDescription>
              Décrivez, en allemand, votre produit de la manière dont vous le voulez.
            </AppFormLabelDescription>
            <AppFormTextarea
              v-model="form.description.de"
              :errors="errors"
              name="description.de"
            />
            <AppFormValidation
              :errors="errors"
              name="description.de"
            />
          </AppFormGroup>
        </AppFormFieldset>
      </AppFormSection>

      <!-- Italian -->
      <AppFormSection>
        <AppFormSectionTitle>
          {{ $t('languages.italian') }}
        </AppFormSectionTitle>
        <AppFormFieldset>

          <!-- Name -->
          <AppFormGroup>
            <AppFormLabel name="name.it">
              {{ $t('forms.labels.name') }}
            </AppFormLabel>
            <AppFormLabelDescription>
              Le nom de votre produit. Entrez, en italien, un nom descriptif identifiant votre produit.
            </AppFormLabelDescription>
            <AppFormInput
              v-model="form.name.it"
              :errors="errors"
              name="name.it"
            />
            <AppFormValidation
              :errors="errors"
              name="name.it"
            />
          </AppFormGroup>

          <!-- Description -->
          <AppFormGroup>
            <AppFormLabel name="description.it">
              {{ $t('forms.labels.description') }}
            </AppFormLabel>
            <AppFormLabelDescription>
              Décrivez, en italien, votre produit de la manière dont vous le voulez.
            </AppFormLabelDescription>
            <AppFormTextarea
              v-model="form.description.it"
              :errors="errors"
              name="description.it"
            />
            <AppFormValidation
              :errors="errors"
              name="description.it"
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
            :route="{ name: 'shop-management-products' }"
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
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import AppInfoTip from '@/components/globals/AppInfoTip'
import AppFormGroup from '@/components/forms/AppFormGroup'
import AppFormLabel from '@/components/forms/AppFormLabel'
import AppFormInput from '@/components/forms/AppFormInput'
import AppBackButton from '@/components/buttons/AppBackButton'
import AppFormSection from '@/components/forms/AppFormSection'
import AppFormFieldset from '@/components/forms/AppFormFieldset'
import AppFormTextarea from '@/components/forms/AppFormTextarea'
import AppFormValidation from '@/components/forms/AppFormValidation'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'
import AppFormSectionTitle from '@/components/forms/AppFormSectionTitle'
import AppButtonLinkTertiary from '@/components/buttons/AppButtonLinkTertiary'
import AppFormLabelDescription from '@/components/forms/AppFormLabelDescription'
import AppProductCreatorStep from '@/components/products/creator/AppProductCreatorStep'

export default {
  head() {
    return {
      title: this.$t('products.management.create.title'),
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
    AppFormLabel,
    AppFormInput,
    AppBackButton,
    AppFormSection,
    AppFormFieldset,
    AppFormTextarea,
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
