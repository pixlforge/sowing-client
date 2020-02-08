<template>
  <div>
    <FormLabel name="country_id">
      {{ $t("form.labels.country") }}
    </FormLabel>
    <FormSelect
      :errors="errors"
      :required="required"
      @change.native="$emit('input', $event.target.value)"
      name="country_id"
    >
      <option
        v-for="country in countries"
        :key="country.id"
        :value="country.id"
        :selected="country.id == value"
      >
        {{ country.name[locale] }}
      </option>
    </FormSelect>
    <FormValidation
      :errors="errors"
      name="country_id"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import FormLabel from '@/components/forms/FormLabel'
import FormSelect from '@/components/forms/FormSelect'
import FormValidation from '@/components/forms/FormValidation'

export default {
  components: {
    FormLabel,
    FormSelect,
    FormValidation
  },
  props: {
    value: {
      type: [String, Number],
      required: false,
      default: ''
    },
    errors: {
      type: Object,
      required: true
    },
    required: {
      type: Boolean,
      required: false,
      default: false
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
