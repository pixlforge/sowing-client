<template>
  <div class="mt-20">
    <form @submit.prevent="store">

      <!-- First name -->
      <FormGroup tight>
        <FormLabel name="first_name">
          {{ $t("forms.labels.first_name") }}
        </FormLabel>
        <FormInput
          v-model="form.first_name"
          :errors="errors"
          name="first_name"
          theme="light"
        />
        <FormValidation
          :errors="errors"
          name="first_name"
        />
      </FormGroup>

      <!-- Last name -->
      <FormGroup tight>
        <FormLabel name="last_name">
          {{ $t("forms.labels.last_name") }}
        </FormLabel>
        <FormInput
          v-model="form.last_name"
          :errors="errors"
          name="last_name"
          theme="light"
        />
        <FormValidation
          :errors="errors"
          name="last_name"
        />
      </FormGroup>

      <!-- Company name -->
      <FormGroup tight>
        <FormLabel name="company_name">
          {{ $t("forms.labels.company_name") }}
        </FormLabel>
        <FormInput
          v-model="form.company_name"
          :errors="errors"
          name="company_name"
          theme="light"
        />
        <FormValidation
          :errors="errors"
          name="company_name"
        />
      </FormGroup>

      <!-- Address line 1 -->
      <FormGroup tight>
        <FormLabel name="address_line_1">
          {{ $t("forms.labels.address_line_1") }}
        </FormLabel>
        <FormInput
          v-model="form.address_line_1"
          :errors="errors"
          name="address_line_1"
          theme="light"
        />
        <FormValidation
          :errors="errors"
          name="address_line_1"
        />
      </FormGroup>

      <!-- Address line 2 -->
      <FormGroup tight>
        <FormLabel name="address_line_2">
          {{ $t("forms.labels.address_line_2") }}
        </FormLabel>
        <FormInput
          v-model="form.address_line_2"
          :errors="errors"
          name="address_line_2"
          theme="light"
        />
        <FormValidation
          :errors="errors"
          name="address_line_2"
        />
      </FormGroup>

      <!-- Postal code -->
      <FormGroup tight>
        <FormLabel name="postal_code">
          {{ $t("forms.labels.postal_code") }}
        </FormLabel>
        <FormInput
          v-model="form.postal_code"
          :errors="errors"
          name="postal_code"
          theme="light"
        />
        <FormValidation
          :errors="errors"
          name="postal_code"
        />
      </FormGroup>

      <!-- City -->
      <FormGroup tight>
        <FormLabel name="city">
          {{ $t("forms.labels.city") }}
        </FormLabel>
        <FormInput
          v-model="form.city"
          :errors="errors"
          name="city"
          theme="light"
        />
        <FormValidation
          :errors="errors"
          name="city"
        />
      </FormGroup>

      <!-- Country -->
      <FormGroup tight>
        <CountryDropdown
          v-model="form.country_id"
          :errors="errors"
        />
      </FormGroup>

      <!-- Controls -->
      <FormGroup>

        <!-- Submit -->
        <AppButtonPrimary
          icon="check"
          type="submit"
          class="w-full mt-20"
        >
          {{ $t("buttons.create") }}
        </AppButtonPrimary>

        <!-- Close -->
        <AppButtonTertiary
          class="w-full"
          @click.native="closeAddressCreator"
        >
          {{ $t("buttons.cancel") }}
        </AppButtonTertiary>
      </FormGroup>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import FormGroup from '@/components/forms/FormGroup'
import FormLabel from '@/components/forms/FormLabel'
import FormInput from '@/components/forms/FormInput'
import FormValidation from '@/components/forms/FormValidation'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'
import AppButtonTertiary from '@/components/buttons/AppButtonTertiary'
import CountryDropdown from '@/components/forms/CountryDropdown'

export default {
  components: {
    FormGroup,
    FormLabel,
    FormInput,
    FormValidation,
    AppButtonPrimary,
    AppButtonTertiary,
    CountryDropdown
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
        is_default: true
      },
      errors: {}
    }
  },
  methods: {
    ...mapActions({
      closeAddressCreator: 'checkout/closeAddressCreator'
    }),
    async store() {
      try {
        const res = await this.$axios.$post('/addresses', this.form)
        this.$emit('address:created', res.data)
      } catch (e) {
        this.$toast.error(this.$t('toasts.validation'))
        this.errors = e.response.data.errors
      }
    }
  }
}
</script>
