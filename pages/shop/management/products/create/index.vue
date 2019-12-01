<template>
  <div>

    <!-- Form -->
    <form @submit.prevent="store">

      <div class="flex flex-wrap -mx-10">

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

        <!-- Price -->
        <AppFormSection>
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

        <!-- Category -->
        <AppFormSection>
          <AppFormSectionTitle>
            {{ $t('forms.labels.category') }}
          </AppFormSectionTitle>
          <AppFormFieldset>
            <AppFormGroup>
              <AppFormLabel name="category_id">
                {{ $t('forms.labels.category') }}
              </AppFormLabel>
              <AppFormLabelDescription>
                Associez votre produit à une catégorie afin que nous puissions le répertorier dans le catalogue.
              </AppFormLabelDescription>
              <AppFormSelect
                v-model.number="form.category_id"
                :errors="errors"
                name="category_id"
              >
                <optgroup
                  v-for="category in filteredCategories"
                  :key="category.id"
                  :label="category.name[locale]"
                >
                  <option
                    v-for="subcategory in category.children"
                    :key="subcategory.id"
                    :value="subcategory.id"
                  >
                    {{ subcategory.name[locale] }}
                    <template v-if="subcategory.parent">
                      &mdash; {{ subcategory.parent.name[locale] }}
                    </template>
                  </option>
                </optgroup>
              </AppFormSelect>
              <AppFormValidation
                :errors="errors"
                name="category_id"
              />
            </AppFormGroup>
          </AppFormFieldset>
        </AppFormSection>

      </div>

      <!-- Controls -->
      <AppFormSection class="lg:w-full">
        <AppFormFieldset>
          <div class="flex">

            <!-- Submit -->
            <AppButtonPrimary
              :color="shopTheme"
              icon="check-circle"
              type="submit"
              class="mr-10"
            >
              {{ $t('buttons.add') }}
            </AppButtonPrimary>

            <!-- Cancel -->
            <AppButtonLinkTertiary
              :route="{ name: 'shop-management-products' }"
              icon="times"
            >
              {{ $t('buttons.cancel') }}
            </AppButtonLinkTertiary>
          </div>
        </AppFormFieldset>
      </AppFormSection>
    </form>

  </div>
</template>

<script>
import AutoNumeric from 'autonumeric'
import { mapGetters } from 'vuex'
import theming from '@/mixins/theming'
import shopManagement from '@/mixins/shop-management'

import AppFormGroup from '@/components/forms/AppFormGroup'
import AppFormLabel from '@/components/forms/AppFormLabel'
import AppFormInput from '@/components/forms/AppFormInput'
import AppFormSelect from '@/components/forms/AppFormSelect'
import AppFormSection from '@/components/forms/AppFormSection'
import AppFormFieldset from '@/components/forms/AppFormFieldset'
import AppFormTextarea from '@/components/forms/AppFormTextarea'
import AppFormValidation from '@/components/forms/AppFormValidation'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'
import AppFormSectionTitle from '@/components/forms/AppFormSectionTitle'
import AppButtonLinkTertiary from '@/components/buttons/AppButtonLinkTertiary'
import AppFormLabelDescription from '@/components/forms/AppFormLabelDescription'

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
    AppFormGroup,
    AppFormLabel,
    AppFormInput,
    AppFormSelect,
    AppFormSection,
    AppFormFieldset,
    AppFormTextarea,
    AppFormValidation,
    AppButtonPrimary,
    AppFormSectionTitle,
    AppButtonLinkTertiary,
    AppFormLabelDescription
  },
  mixins: [
    theming,
    shopManagement
  ],
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
        price: null,
        category_id: null
      },
      displayPrice: null,
      autoNumeric: {},
      errors: {}
    }
  },
  computed: {
    ...mapGetters({
      categories: 'categories',
      locale: 'locale'
    }),
    filteredCategories() {
      return this.categories.map((category) => {
        const parentCategory = {
          ...category,
          children: category.children.map((subcategory) => {
            if (subcategory.is_section) {
              return subcategory.children
            }
            return subcategory
          }).reduce((a, b) => a.concat(b), [])
        }
        return parentCategory
      })
    }
  },
  watch: {
    displayPrice() {
      this.autoNumeric.reformat()
      this.form.price = this.autoNumeric.rawValue * 100
    }
  },
  mounted() {
    this.initAutoNumeric()
  },
  methods: {
    async store() {
      try {
        await this.$axios.$post('/products', this.form)
        this.$toasted.success(this.$t('toasts.products.created'))
        this.$router.push({ name: 'shop-management-products' })
      } catch (e) {
        this.errors = e.response.data.errors
        this.$toasted.error(this.$t('toasts.validation'))
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
    }
  }
}
</script>
