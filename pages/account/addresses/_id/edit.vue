<template>
  <div>
    <header class="flex items-center">

      <!-- Back -->
      <AppBackButton
        :route="{ name: 'account-addresses' }"
        class="sm:mr-20"
      />

      <!-- Page title -->
      <Heading
        tag="h1"
        visual="h1"
        utilities="mx-auto sm:mx-0"
      >
        {{ $t('pages.account.addresses.titles.edit') }}
      </Heading>
    </header>

    <!-- Edition -->
    <Card>
      <form @submit.prevent="update">

        <!-- First row -->
        <FormRow>

          <!-- First name -->
          <FormRowGroup>
            <FormLabel name="first_name">
              {{ $t('forms.labels.first_name') }}
            </FormLabel>
            <FormInput
              v-model="form.first_name"
              :errors="errors"
              name="first_name"
              required
            />
            <FormValidation
              :errors="errors"
              name="first_name"
            />
          </FormRowGroup>

          <!-- Last name -->
          <FormRowGroup>
            <FormLabel name="last_name">
              {{ $t('forms.labels.last_name') }}
            </FormLabel>
            <FormInput
              v-model="form.last_name"
              :errors="errors"
              name="last_name"
              required
            />
            <FormValidation
              :errors="errors"
              name="last_name"
            />
          </FormRowGroup>
        </FormRow>

        <!-- Company name -->
        <FormGroup>
          <FormLabel name="company_name">
            {{ $t('forms.labels.company_name') }}
          </FormLabel>
          <FormInput
            v-model="form.company_name"
            :errors="errors"
            name="company_name"
          />
          <FormValidation
            :errors="errors"
            name="company_name"
          />
        </FormGroup>

        <FormRow>

          <!-- Address line 1 -->
          <FormRowGroup>
            <FormLabel name="address_line_1">
              {{ $t('forms.labels.address_line_1') }}
            </FormLabel>
            <FormInput
              v-model="form.address_line_1"
              :errors="errors"
              name="address_line_1"
              required
            />
            <FormValidation
              :errors="errors"
              name="address_line_1"
            />
          </FormRowGroup>

          <!-- Address line 2 -->
          <FormRowGroup>
            <FormLabel name="address_line_2">
              {{ $t('forms.labels.address_line_2') }}
            </FormLabel>
            <FormInput
              v-model="form.address_line_2"
              :errors="errors"
              name="address_line_2"
            />
            <FormValidation
              :errors="errors"
              name="address_line_2"
            />
          </FormRowGroup>
        </FormRow>

        <!-- Third row -->
        <FormRow>

          <!-- Postal code -->
          <FormRowGroup>
            <FormLabel name="postal_code">
              {{ $t('forms.labels.postal_code') }}
            </FormLabel>
            <FormInput
              v-model="form.postal_code"
              :errors="errors"
              name="postal_code"
              required
            />
            <FormValidation
              :errors="errors"
              name="postal_code"
            />
          </FormRowGroup>

          <!-- City -->
          <FormRowGroup>
            <FormLabel name="city">
              {{ $t('forms.labels.city') }}
            </FormLabel>
            <FormInput
              v-model="form.city"
              :errors="errors"
              name="city"
              required
            />
            <FormValidation
              :errors="errors"
              name="city"
            />
          </FormRowGroup>
        </FormRow>

        <!-- Country -->
        <FormGroup>
          <CountryDropdown
            v-model="form.country_id"
            :errors="errors"
            required
          />
        </FormGroup>

        <!-- Default -->
        <FormGroup>
          <FormCheckbox
            v-model="form.is_default"
            name="is_default"
          >
            <FormCheckboxLabel name="is_default">
              {{ $t('forms.labels.default_address') }}
            </FormCheckboxLabel>
          </FormCheckbox>
        </FormGroup>

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
            @click.native="cancelEdit"
            type="button"
            icon="times"
          >
            {{ $t('buttons.cancel') }}
          </AppButtonTertiary>
        </div>
      </form>
    </Card>

  </div>
</template>

<script>
import { mapActions } from 'vuex'

import Card from '@/components/Card'
import Heading from '@/components/Heading'
import FormRow from '@/components/forms/FormRow'
import FormGroup from '@/components/forms/FormGroup'
import FormLabel from '@/components/forms/FormLabel'
import FormInput from '@/components/forms/FormInput'
import AppBackButton from '@/components/buttons/AppBackButton'
import FormRowGroup from '@/components/forms/FormRowGroup'
import FormCheckbox from '@/components/forms/FormCheckbox'
import FormValidation from '@/components/forms/FormValidation'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'
import CountryDropdown from '@/components/forms/CountryDropdown'
import AppButtonTertiary from '@/components/buttons/AppButtonTertiary'
import FormCheckboxLabel from '@/components/forms/FormCheckboxLabel'

export default {
  components: {
    Card,
    Heading,
    FormGroup,
    FormLabel,
    FormInput,
    AppBackButton,
    FormRowGroup,
    FormCheckbox,
    FormRow,
    FormValidation,
    AppButtonPrimary,
    CountryDropdown,
    AppButtonTertiary,
    FormCheckboxLabel
  },
  layout: 'account-management',
  middleware: ['authenticated'],
  head() {
    return {
      title: `${this.$t('pages.account.addresses.titles.edit')} | ${this.$t('pages.account.title')}`,
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
      address: address.data
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
    async update() {
      try {
        const res = await this.$axios.$patch(`/addresses/${this.address.id}`, this.form)
        this.address = res.data
        this.$toast.success(this.$t('toasts.addresses.updated'))
        this.$router.push({ name: 'account-addresses' })
      } catch (e) {
        this.errors = e.response.data.errors
      }
    }
  }
}
</script>
