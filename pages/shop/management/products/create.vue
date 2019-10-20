<template>
  <div>
    <header class="flex items-center">

      <!-- Back -->
      <AppBackButton
        :route="{ name: 'shop-management-products' }"
        class="mr-20"
      />

      <!-- Page title -->
      <AppTitle
        semantic="h1"
        visual="h2"
      >
        {{ $t("products.management.create.title") }}
      </AppTitle>
    </header>

    <AppCard>
      <form @submit.prevent="store">

        <!-- Name FR -->
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

        <!-- Description FR -->
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

        <!-- Name EN -->
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

        <!-- Description EN -->
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

        <!-- Name DE -->
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

        <!-- Description DE -->
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

        <!-- Name IT -->
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

        <!-- Description IT -->
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

        <!-- Controls -->
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
      </form>
    </AppCard>

  </div>
</template>

<script>
import theming from '@/mixins/theming'
import shopManagement from '@/mixins/shop-management'

import AppCard from '@/components/AppCard'
import AppTitle from '@/components/AppTitle'
import AppFormGroup from '@/components/forms/AppFormGroup'
import AppFormLabel from '@/components/forms/AppFormLabel'
import AppFormInput from '@/components/forms/AppFormInput'
import AppBackButton from '@/components/buttons/AppBackButton'
import AppFormTextarea from '@/components/forms/AppFormTextarea'
import AppFormValidation from '@/components/forms/AppFormValidation'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'
import AppButtonLinkTertiary from '@/components/buttons/AppButtonLinkTertiary'
import AppFormLabelDescription from '@/components/forms/AppFormLabelDescription'

export default {
  layout: 'shop-management',
  middleware: ['authenticated', 'hasShop'],
  components: {
    AppCard,
    AppTitle,
    AppFormGroup,
    AppFormLabel,
    AppFormInput,
    AppBackButton,
    AppFormTextarea,
    AppFormValidation,
    AppButtonPrimary,
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
      errors: {}
    }
  },
  methods: {
    async store() {
      try {
        // eslint-disable-next-line
        const res = await this.$axios.$post('/products', this.form)
        this.$toasted.success('Success') // TODO: Translate
      } catch (e) {
        this.errors = e.response.data.errors
        this.$toasted.error('Error') // TODO: Translate
      }
    }
  }
}
</script>
