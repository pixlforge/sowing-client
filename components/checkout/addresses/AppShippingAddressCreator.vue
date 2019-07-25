<template>
  <div>
    <form @submit.prevent="store">

      <!-- First name -->
      <div class="form__group from__group--first">
        <label
          for="first_name"
          class="form__label">
          {{ $t("forms.labels.first_name") }}
        </label>
        <input
          id="first_name"
          v-model="form.first_name"
          :class="{ 'border-red': errors.first_name }"
          type="text"
          name="first_name"
          class="form__input form__input--white">
        <template v-if="errors.first_name">
          <p class="form__feedback">
            {{ errors.first_name[0] }}
          </p>
        </template>
      </div>

      <!-- Last name -->
      <div class="form__group form__group--tight">
        <label
          for="last_name"
          class="form__label">
          {{ $t("forms.labels.last_name") }}
        </label>
        <input
          id="last_name"
          v-model="form.last_name"
          :class="{ 'border-red': errors.last_name }"
          type="text"
          name="last_name"
          class="form__input form__input--white">
        <template v-if="errors.last_name">
          <p class="form__feedback">
            {{ errors.last_name[0] }}
          </p>
        </template>
      </div>

      <!-- Company name -->
      <div class="form__group form__group--tight">
        <label
          for="company_name"
          class="form__label">
          {{ $t("forms.labels.company_name") }}
        </label>
        <input
          id="company_name"
          v-model="form.company_name"
          :class="{ 'border-red': errors.company_name }"
          type="text"
          name="company_name"
          class="form__input form__input--white">
        <template v-if="errors.company_name">
          <p class="form__feedback">
            {{ errors.company_name[0] }}
          </p>
        </template>
      </div>

      <!-- Address line 1 -->
      <div class="form__group form__group--tight">
        <label
          for="address_line_1"
          class="form__label">
          {{ $t("forms.labels.address_line_1") }}
        </label>
        <input
          id="address_line_1"
          v-model="form.address_line_1"
          :class="{ 'border-red': errors.address_line_1 }"
          type="text"
          name="address_line_1"
          class="form__input form__input--white">
        <template v-if="errors.address_line_1">
          <p class="form__feedback">
            {{ errors.address_line_1[0] }}
          </p>
        </template>
      </div>

      <!-- Address line 2 -->
      <div class="form__group form__group--tight">
        <label
          for="address_line_2"
          class="form__label">
          {{ $t("forms.labels.address_line_2") }}
        </label>
        <input
          id="address_line_2"
          v-model="form.address_line_2"
          :class="{ 'border-red': errors.address_line_2 }"
          type="text"
          name="address_line_2"
          class="form__input form__input--white">
        <template v-if="errors.address_line_2">
          <p class="form__feedback">
            {{ errors.address_line_2[0] }}
          </p>
        </template>
      </div>

      <!-- Postal code -->
      <div class="form__group form__group--tight">
        <label
          for="postal_code"
          class="form__label">
          {{ $t("forms.labels.postal_code") }}
        </label>
        <input
          id="postal_code"
          v-model="form.postal_code"
          :class="{ 'border-red': errors.postal_code }"
          type="text"
          name="postal_code"
          class="form__input form__input--white">
        <template v-if="errors.postal_code">
          <p class="form__feedback">
            {{ errors.postal_code[0] }}
          </p>
        </template>
      </div>

      <!-- City -->
      <div class="form__group form__group--tight">
        <label
          for="city"
          class="form__label">
          {{ $t("forms.labels.city") }}
        </label>
        <input
          id="city"
          v-model="form.city"
          :class="{ 'border-red': errors.city }"
          type="text"
          name="city"
          class="form__input form__input--white">
        <template v-if="errors.city">
          <p class="form__feedback">
            {{ errors.city[0] }}
          </p>
        </template>
      </div>

      <!-- Country -->
      <AppCountryDropdown
        v-model="form.country_id"
        :errors="errors.country_id"
        class="form__group form__group--tight"/>

      <!-- Submit -->
      <div class="form__group form__group--inline">
        <button
          type="submit"
          class="button button__primary mr-20">
          {{ $t("buttons.create") }}
        </button>
        <button
          class="button"
          @click.prevent="closeAddressCreator">
          {{ $t("buttons.cancel") }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import AppCountryDropdown from '@/components/forms/AppCountryDropdown'

export default {
  components: {
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
