<template>
  <div>
    <div class="flex justify-between">
      <div class="flex items-center">

        <!-- Back -->
        <AppBackButton
          :url="localePath({ name: 'account-addresses' })"
          class="mr-20"
        />

        <!-- Page title -->
        <AppTitle
          semantic="h1"
          visual="h2"
        >
          {{ $t('pages.account.addresses.my_address') }}
        </AppTitle>
      </div>

      <!-- Delete -->
      <AppDeleteButton @click.native="confirmDelete"/>
    </div>

    <!-- Card -->
    <AppAddressCard :address="form"/>

    <!-- Edition -->
    <section>
      <AppFormDivider large/>

      <form
        class="mt-36"
        @submit.prevent
      >

        <!-- First row -->
        <AppFormRow>

          <!-- First name -->
          <AppFormRowGroup>
            <AppFormLabel name="first_name">
              {{ $t('forms.labels.first_name') }}
            </AppFormLabel>
            <AppFormInput
              v-model="form.first_name"
              :errors="errors"
              name="first_name"
            />
            <AppFormValidation
              :errors="errors"
              name="first_name"
            />
          </AppFormRowGroup>

          <!-- Last name -->
          <AppFormRowGroup>
            <AppFormLabel name="last_name">
              {{ $t('forms.labels.last_name') }}
            </AppFormLabel>
            <AppFormInput
              v-model="form.last_name"
              :errors="errors"
              name="last_name"
            />
            <AppFormValidation
              :errors="errors"
              name="last_name"
            />
          </AppFormRowGroup>
        </AppFormRow>

        <!-- Company name -->
        <AppFormGroup>
          <AppFormLabel name="company_name">
            {{ $t('forms.labels.company_name') }}
          </AppFormLabel>
          <AppFormInput
            v-model="form.company_name"
            :errors="errors"
            name="company_name"
          />
          <AppFormValidation
            :errors="errors"
            name="company_name"
          />
        </AppFormGroup>

        <AppFormRow>

          <!-- Address line 1 -->
          <AppFormRowGroup>
            <AppFormLabel name="address_line_1">
              {{ $t('forms.labels.address_line_1') }}
            </AppFormLabel>
            <AppFormInput
              v-model="form.address_line_1"
              :errors="errors"
              name="address_line_1"
            />
            <AppFormValidation
              :errors="errors"
              name="address_line_1"
            />
          </AppFormRowGroup>

          <!-- Address line 2 -->
          <AppFormRowGroup>
            <AppFormLabel name="address_line_2">
              {{ $t('forms.labels.address_line_2') }}
            </AppFormLabel>
            <AppFormInput
              v-model="form.address_line_2"
              :errors="errors"
              name="address_line_2"
            />
            <AppFormValidation
              :errors="errors"
              name="address_line_2"
            />
          </AppFormRowGroup>
        </AppFormRow>

        <!-- Third row -->
        <AppFormRow>

          <!-- Postal code -->
          <AppFormRowGroup>
            <AppFormLabel name="postal_code">
              {{ $t('forms.labels.postal_code') }}
            </AppFormLabel>
            <AppFormInput
              v-model="form.postal_code"
              :errors="errors"
              name="postal_code"
            />
            <AppFormValidation
              :errors="errors"
              name="postal_code"
            />
          </AppFormRowGroup>

          <!-- City -->
          <AppFormRowGroup>
            <AppFormLabel name="city">
              {{ $t('forms.labels.city') }}
            </AppFormLabel>
            <AppFormInput
              v-model="form.city"
              :errors="errors"
              name="city"
            />
            <AppFormValidation
              :errors="errors"
              name="city"
            />
          </AppFormRowGroup>
        </AppFormRow>

        <!-- Country -->
        <AppFormGroup>
          <AppCountryDropdown
            v-model="form.country_id"
            :errors="errors"
          />
        </AppFormGroup>

        <!-- Default -->
        <AppFormGroup>
          <AppFormCheckbox
            v-model="form.is_default"
            name="is_default"
          >
            <AppFormCheckboxLabel name="is_default">
              {{ $t('forms.labels.default_address') }}
            </AppFormCheckboxLabel>
          </AppFormCheckbox>
        </AppFormGroup>

        <!-- Controls -->
        <div class="flex">

          <!-- Submit -->
          <AppButtonPrimary
            icon="check-circle"
            type="submit"
            class="mr-10"
          >
            {{ $t('buttons.update') }}
          </AppButtonPrimary>

          <!-- Cancel -->
          <AppButtonTertiary
            icon="times"
            @click.native="cancelEdit"
          >
            {{ $t('buttons.cancel') }}
          </AppButtonTertiary>
        </div>
      </form>
    </section>

    <ModalTransition>
      <div
        v-if="showDeleteConfirmation"
        class="fixed inset-x-0 inset-y-0 bg-backdrop flex justify-center items-center"
      >
        <div class="w-full max-w-600 bg-white rounded-lg shadow-xl border-t-8 border-red-500 flex px-24 py-48">
          <div class="w-1/4 flex justify-center">
            <div class="w-60 h-60 bg-red-100 rounded-full flex justify-center items-center">
              <div class="w-40 h-40 bg-red-200 rounded-full flex justify-center items-center">
                <div>
                  <font-awesome-icon
                    :icon="['far', 'exclamation-circle']"
                    class="text-30 text-red-600"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="w-3/4">
            <h1 class="text-20 font-bold mb-12">
              Supprimer une adresse
            </h1>
            <div class="text-14 mb-30">
              Êtes-vous certain de vouloir supprimer cette adresse?
            </div>
            <div class="flex items-center">
              <AppButtonPrimary
                color="red"
                icon="trash-alt"
                class="mr-10"
              >
                {{ $t('buttons.delete') }}
              </AppButtonPrimary>
              <AppButtonTertiary
                icon="times"
                @click.native="cancelDelete"
              >
                {{ $t('buttons.cancel') }}
              </AppButtonTertiary>
            </div>
          </div>
        </div>
      </div>
    </ModalTransition>

  </div>
</template>

<script>
import AppTitle from '@/components/AppTitle'
import AppFormRow from '@/components/forms/AppFormRow'
import AppFormGroup from '@/components/forms/AppFormGroup'
import AppFormLabel from '@/components/forms/AppFormLabel'
import AppFormInput from '@/components/forms/AppFormInput'
import AppBackButton from '@/components/buttons/AppBackButton'
import AppFormDivider from '@/components/forms/AppFormDivider'
import AppFormRowGroup from '@/components/forms/AppFormRowGroup'
import AppFormCheckbox from '@/components/forms/AppFormCheckbox'
import AppDeleteButton from '@/components/buttons/AppDeleteButton'
import AppAddressCard from '@/components/addresses/AppAddressCard'
import AppFormValidation from '@/components/forms/AppFormValidation'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'
import AppCountryDropdown from '@/components/forms/AppCountryDropdown'
import ModalTransition from '@/components/transitions/ModalTransition'
import AppButtonTertiary from '@/components/buttons/AppButtonTertiary'
import AppFormCheckboxLabel from '@/components/forms/AppFormCheckboxLabel'

export default {
  components: {
    AppTitle,
    AppFormGroup,
    AppFormLabel,
    AppFormInput,
    AppBackButton,
    AppFormDivider,
    AppFormRowGroup,
    AppFormCheckbox,
    AppDeleteButton,
    AppAddressCard,
    AppFormRow,
    AppFormValidation,
    AppButtonPrimary,
    AppCountryDropdown,
    ModalTransition,
    AppButtonTertiary,
    AppFormCheckboxLabel
  },
  layout: 'account-management',
  data() {
    return {
      form: {},
      address: {},
      errors: {},
      showDeleteConfirmation: false
    }
  },
  async asyncData({ app, route }) {
    const address = await app.$axios.$get(`/addresses/${route.params.id}`)

    return {
      address: address.data
    }
  },
  created() {
    this.assignFormValues()
  },
  methods: {
    confirmDelete() {
      this.showDeleteConfirmation = true
    },
    cancelDelete() {
      this.showDeleteConfirmation = false
    },
    cancelEdit() {
      this.assignFormValues()
    },
    assignFormValues() {
      this.form = {
        country_id: this.address.country.id,
        ...this.address
      }
    }
  }
}
</script>
