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
      <AppDeleteButton @click.native="displayConfirmationModal(true)"/>
    </div>

    <!-- Card -->
    <AppAddressCard
      :address="form"
      class="my-72 md:my-96"
    />

    <!-- Edition -->
    <section>
      <AppFormDivider large/>

      <AppTitle
        semantic="h1"
        visual="h3"
      >
        {{ $t('pages.account.addresses.update_title') }}
      </AppTitle>

      <section class="my-72 md:my-96">
        <form @submit.prevent="update">

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
                required
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
                required
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
                required
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
                required
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
                required
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
              required
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
              type="button"
              icon="times"
              @click.native="cancelEdit"
            >
              {{ $t('buttons.cancel') }}
            </AppButtonTertiary>
          </div>
        </form>
      </section>
    </section>

    <!-- Confirmation modal -->
    <AppConfirmationModal
      :title="$t('modals.addresses.delete.title')"
      :body="$t('modals.addresses.delete.body')"
      :button-label="$t('buttons.delete')"
      button-icon="trash-alt"
      icon="exclamation-circle"
      color="red"
      @confirm="destroy"
    />

  </div>
</template>

<script>
import { mapActions } from 'vuex'

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
import AppButtonTertiary from '@/components/buttons/AppButtonTertiary'
import AppFormCheckboxLabel from '@/components/forms/AppFormCheckboxLabel'
import AppConfirmationModal from '@/components/modals/AppConfirmationModal'

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
    AppButtonTertiary,
    AppFormCheckboxLabel,
    AppConfirmationModal
  },
  layout: 'account-management',
  middleware: ['authenticated'],
  head() {
    return {
      title: `${this.$t('pages.account.addresses.update_title')} | ${this.$t('pages.account.title')} | ${this.title}`,
      meta: [
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
      form: {},
      address: {},
      errors: {}
    }
  },
  async asyncData({ app, route }) {
    const address = await app.$axios.$get(`/addresses/${route.params.id}`)

    return {
      address: address.data,
      title: app.head.title
    }
  },
  created() {
    this.assignFormValues()
  },
  methods: {
    ...mapActions({
      displayConfirmationModal: 'confirmation/displayConfirmationModal'
    }),
    cancelEdit() {
      this.assignFormValues()
    },
    assignFormValues() {
      this.form = {
        country_id: this.address.country.id,
        ...this.address
      }
    },
    async destroy() {
      try {
        await this.$axios.$delete(`/addresses/${this.address.id}`)
        this.$toast.success(this.$t('toasts.addresses.deleted'))
        this.$router.push(this.localePath({ name: 'account-addresses' }))
      } catch (e) {
        this.$toast.error(this.$t('toasts.general_error'))
      }
    },
    async update() {
      try {
        const res = await this.$axios.$patch(`/addresses/${this.address.id}`, this.form)
        this.address = res.data
        this.$toast.success(this.$t('toasts.addresses.updated'))
      } catch (e) {
        this.errors = e.response.data.errors
      }
    }
  }
}
</script>
