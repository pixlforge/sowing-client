<template>
  <div>
    <div class="flex items-center">

      <!-- Back -->
      <BackButton
        :route="{ name: 'account-addresses' }"
        class="mr-20"
      />

      <!-- Page title -->
      <Heading
        tag="h1"
        visual="h2"
      >
        {{ $t('account.addresses.titles.create') }}
      </Heading>
    </div>

    <Card>
      <form @submit.prevent="store">

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
          <ButtonPrimary
            icon="check-circle"
            type="submit"
            class="mr-10"
          >
            {{ $t('buttons.add') }}
          </ButtonPrimary>

          <!-- Cancel -->
          <ButtonLinkTertiary
            :route="{ name: 'account-addresses' }"
            icon="times"
          >
            {{ $t('buttons.cancel') }}
          </ButtonLinkTertiary>
        </div>
      </form>
    </Card>
  </div>
</template>

<script>
import Card from '@/components/globals/Card'
import Heading from '@/components/globals/Heading'
import FormRow from '@/components/forms/FormRow'
import FormGroup from '@/components/forms/FormGroup'
import FormLabel from '@/components/forms/FormLabel'
import FormInput from '@/components/forms/FormInput'
import BackButton from '@/components/buttons/BackButton'
import FormRowGroup from '@/components/forms/FormRowGroup'
import FormCheckbox from '@/components/forms/FormCheckbox'
import FormValidation from '@/components/forms/FormValidation'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import CountryDropdown from '@/components/forms/CountryDropdown'
import FormCheckboxLabel from '@/components/forms/FormCheckboxLabel'
import ButtonLinkTertiary from '@/components/buttons/ButtonLinkTertiary'

export default {
  components: {
    Card,
    Heading,
    FormGroup,
    FormLabel,
    FormInput,
    BackButton,
    FormRowGroup,
    FormCheckbox,
    FormRow,
    FormValidation,
    ButtonPrimary,
    CountryDropdown,
    ButtonLinkTertiary,
    FormCheckboxLabel
  },
  layout: 'account-management',
  middleware: ['authenticated'],
  head() {
    return {
      title: `${this.$t('account.addresses.titles.create')} | ${this.$t('account.title')}`,
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
      form: {
        first_name: '',
        last_name: '',
        company_name: '',
        address_line_1: '',
        address_line_2: '',
        postal_code: '',
        city: '',
        country_id: '',
        is_default: false
      },
      errors: {}
    }
  },
  methods: {
    async store() {
      try {
        await this.$axios.$post('/addresses', this.form)
        this.$toast.success(this.$t('toasts.addresses.created'))
        this.$router.push({ name: 'account-addresses' })
      } catch (e) {
        this.errors = e.response.data.errors
        this.$toast.error(this.$t('toasts.validation'))
      }
    }
  }
}
</script>
