<template>
  <div>
    <div class="flex justify-between">
      <div class="flex">

        <!-- Back -->
        <AppBackButton class="mr-20"/>

        <!-- Page title -->
        <AppTitle
          semantic="h1"
          visual="h2"
        >
          {{ $t('pages.account.addresses.my_address') }}
        </AppTitle>
      </div>

      <!-- Controls -->
      <div class="flex items-center">

        <!-- Edit -->
        <AppEditButton @click.native="openEdit"/>

        <!-- Delete -->
        <AppDeleteButton/>
      </div>
    </div>

    <!-- Card -->
    <AppAddressCard :address="form"/>

    <!-- Edition -->
    <transition
      enter-active-class="transition-all transition-medium ease-out"
      leave-active-class="transition-all transition-slow ease-in"
      enter-class="opacity-25 scale-75"
      enter-to-class="opacity-100 scale-100"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-25 scale-75"
    >
      <section
        v-if="editing"
        class="origin-top"
      >
        <AppFormDivider/>
        <AppTitle
          semantic="h1"
          visual="h2"
        >
          Édition
        </AppTitle>

        <form
          class="mt-36"
          @submit.prevent
        >

          <!-- First name -->
          <AppFormGroup>
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
          </AppFormGroup>

          <!-- Last name -->
          <AppFormGroup>
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
          </AppFormGroup>

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

          <!-- Address line 1 -->
          <AppFormGroup>
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
          </AppFormGroup>

          <!-- Address line 2 -->
          <AppFormGroup>
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
          </AppFormGroup>

          <!-- Postal code -->
          <AppFormGroup>
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
          </AppFormGroup>

          <!-- City -->
          <AppFormGroup>
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
          </AppFormGroup>

          <!-- Country -->
          <AppFormGroup>
            <AppCountryDropdown
              v-model="form.country_id"
              :errors="errors"
            />
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
    </transition>

  </div>
</template>

<script>
import AppTitle from '@/components/AppTitle'
import AppFormGroup from '@/components/forms/AppFormGroup'
import AppFormLabel from '@/components/forms/AppFormLabel'
import AppFormInput from '@/components/forms/AppFormInput'
import AppBackButton from '@/components/buttons/AppBackButton'
import AppEditButton from '@/components/buttons/AppEditButton'
import AppFormDivider from '@/components/forms/AppFormDivider'
import AppDeleteButton from '@/components/buttons/AppDeleteButton'
import AppAddressCard from '@/components/addresses/AppAddressCard'
import AppFormValidation from '@/components/forms/AppFormValidation'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'
import AppCountryDropdown from '@/components/forms/AppCountryDropdown'
import AppButtonTertiary from '@/components/buttons/AppButtonTertiary'

export default {
  components: {
    AppTitle,
    AppFormGroup,
    AppFormLabel,
    AppFormInput,
    AppBackButton,
    AppEditButton,
    AppFormDivider,
    AppDeleteButton,
    AppAddressCard,
    AppFormValidation,
    AppButtonPrimary,
    AppCountryDropdown,
    AppButtonTertiary
  },
  layout: 'account-management',
  data() {
    return {
      form: {},
      address: {},
      errors: {},
      editing: true // TODO: change to false
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
    openEdit() {
      this.editing = true
    },
    cancelEdit() {
      this.assignFormValues()
      this.editing = false
    },
    assignFormValues() {
      this.form = { ...this.address }
    }
  }
}
</script>
