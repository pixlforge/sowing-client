<template>
  <div class="mt-20">
    <form @submit.prevent="store">

      <!-- First name -->
      <FormGroup tight>
        <FormLabel name="first_name">
          {{ $t("form.first_name.label") }}
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
          {{ $t("form.last_name.label") }}
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
          {{ $t("form.company_name.label") }}
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
          {{ $t("form.address_line_1.label") }}
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
          {{ $t("form.address_line_2.label") }}
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
          {{ $t("form.postal_code.label") }}
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
          {{ $t("form.city.label") }}
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
        <ButtonPrimary
          icon="check"
          type="submit"
          class="w-full mt-20"
        >
          {{ $t("button.create") }}
        </ButtonPrimary>

        <!-- Close -->
        <ButtonTertiary
          @click.native="closeAddressCreator"
          class="w-full"
        >
          {{ $t("button.cancel") }}
        </ButtonTertiary>
      </FormGroup>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import ButtonTertiary from '@/components/buttons/ButtonTertiary'
import CountryDropdown from '@/components/forms/CountryDropdown'
import FormGroup from '@/components/forms/FormGroup'
import FormLabel from '@/components/forms/FormLabel'
import FormInput from '@/components/forms/FormInput'
import FormValidation from '@/components/forms/FormValidation'

export default {
  components: {
    ButtonPrimary,
    ButtonTertiary,
    CountryDropdown,
    FormGroup,
    FormLabel,
    FormInput,
    FormValidation
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
