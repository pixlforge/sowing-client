<template>
  <div>
    <label
      for="country"
      class="form__label">
      {{ $t("forms.labels.country") }}
    </label>
    <div class="form__select-group">
      <select
        id="country"
        :class="{ 'border-red': errors.length, 'border-green-lightest': !errors.length }"
        name="country"
        class="form__select form__select--white"
        @change="$emit('input', $event.target.value)">
        <option
          value=""
          selected
          disabled>
          {{ $t("forms.select") }}
        </option>
        <option
          v-for="country in countries"
          :key="country.id"
          :value="country.id">
          {{ country.name[locale] }}
        </option>
      </select>
      <font-awesome-icon
        :icon="['fas', 'caret-down']"
        class="form__select-caret"/>
    </div>
    <template v-if="errors">
      <p class="form__feedback">{{ errors[0] }}</p>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    errors: {
      type: Array,
      required: false,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      countries: []
    };
  },
  computed: {
    ...mapGetters({
      locale: "locale"
    })
  },
  created() {
    this.getCountries();
  },
  methods: {
    async getCountries() {
      let res = await this.$axios.$get("/countries");
      this.countries = res.data;
    }
  }
};
</script>
