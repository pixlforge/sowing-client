<template>
  <div>
    <AppFormLabel name="country_id">
      {{ $t("forms.labels.country") }}
    </AppFormLabel>
    <AppFormSelect
      :errors="errors"
      name="country_id"
      theme="light"
      @change.native="$emit('input', $event.target.value)"
    >
      <option
        v-for="country in countries"
        :key="country.id"
        :value="country.id"
      >
        {{ country.name[locale] }}
      </option>
    </AppFormSelect>
    <AppFormValidation
      :errors="errors"
      name="country_id"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import AppFormLabel from '@/components/forms/AppFormLabel'
import AppFormSelect from '@/components/forms/AppFormSelect'
import AppFormValidation from '@/components/forms/AppFormValidation'

export default {
  components: {
    AppFormLabel,
    AppFormSelect,
    AppFormValidation
  },
  props: {
    errors: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      countries: []
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale'
    })
  },
  created() {
    this.getCountries()
  },
  methods: {
    async getCountries() {
      const res = await this.$axios.$get('/countries')
      this.countries = res.data
    }
  }
}
</script>
