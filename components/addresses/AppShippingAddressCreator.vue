<template>
  <div class="mt-20">
    <form @submit.prevent="store">

      <!-- First name -->
      <AppFormGroup tight>
        <AppFormLabel name="first_name">
          {{ $t("forms.labels.first_name") }}
        </AppFormLabel>
        <AppFormInput
          v-model="form.first_name"
          :errors="errors"
          name="first_name"
          theme="light"
        />
        <AppFormValidation
          :errors="errors"
          name="first_name"
        />
      </AppFormGroup>

      <!-- Last name -->
      <AppFormGroup tight>
        <AppFormLabel name="last_name">
          {{ $t("forms.labels.last_name") }}
        </AppFormLabel>
        <AppFormInput
          v-model="form.last_name"
          :errors="errors"
          name="last_name"
          theme="light"
        />
        <AppFormValidation
          :errors="errors"
          name="last_name"
        />
      </AppFormGroup>

      <!-- Company name -->
      <AppFormGroup tight>
        <AppFormLabel name="company_name">
          {{ $t("forms.labels.company_name") }}
        </AppFormLabel>
        <AppFormInput
          v-model="form.company_name"
          :errors="errors"
          name="company_name"
          theme="light"
        />
        <AppFormValidation
          :errors="errors"
          name="company_name"
        />
      </AppFormGroup>

      <!-- Address line 1 -->
      <AppFormGroup tight>
        <AppFormLabel name="address_line_1">
          {{ $t("forms.labels.address_line_1") }}
        </AppFormLabel>
        <AppFormInput
          v-model="form.address_line_1"
          :errors="errors"
          name="address_line_1"
          theme="light"
        />
        <AppFormValidation
          :errors="errors"
          name="address_line_1"
        />
      </AppFormGroup>

      <!-- Address line 2 -->
      <AppFormGroup tight>
        <AppFormLabel name="address_line_2">
          {{ $t("forms.labels.address_line_2") }}
        </AppFormLabel>
        <AppFormInput
          v-model="form.address_line_2"
          :errors="errors"
          name="address_line_2"
          theme="light"
        />
        <AppFormValidation
          :errors="errors"
          name="address_line_2"
        />
      </AppFormGroup>

      <!-- Postal code -->
      <AppFormGroup tight>
        <AppFormLabel name="postal_code">
          {{ $t("forms.labels.postal_code") }}
        </AppFormLabel>
        <AppFormInput
          v-model="form.postal_code"
          :errors="errors"
          name="postal_code"
          theme="light"
        />
        <AppFormValidation
          :errors="errors"
          name="postal_code"
        />
      </AppFormGroup>

      <!-- City -->
      <AppFormGroup tight>
        <AppFormLabel name="city">
          {{ $t("forms.labels.city") }}
        </AppFormLabel>
        <AppFormInput
          v-model="form.city"
          :errors="errors"
          name="city"
          theme="light"
        />
        <AppFormValidation
          :errors="errors"
          name="city"
        />
      </AppFormGroup>

      <!-- Country -->
      <AppFormGroup tight>
        <AppCountryDropdown
          v-model="form.country_id"
          :errors="errors"
        />
      </AppFormGroup>

      <!-- Controls -->
      <AppFormGroup>

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
      </AppFormGroup>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import AppFormGroup from '@/components/forms/AppFormGroup'
import AppFormLabel from '@/components/forms/AppFormLabel'
import AppFormInput from '@/components/forms/AppFormInput'
import AppFormValidation from '@/components/forms/AppFormValidation'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'
import AppButtonTertiary from '@/components/buttons/AppButtonTertiary'
import AppCountryDropdown from '@/components/forms/AppCountryDropdown'

export default {
  components: {
    AppFormGroup,
    AppFormLabel,
    AppFormInput,
    AppFormValidation,
    AppButtonPrimary,
    AppButtonTertiary,
    AppCountryDropdown
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
