<template>
  <div>
    <label
      for="country"
      class="label">
      {{ $t("forms.labels.country") }}
    </label>
    <div class="relative">
      <select
        id="country"
        :class="{ 'border-red': errors.length, 'border-green-lightest': !errors.length }"
        name="country"
        class="select bg-white shadow-inner border"
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
        class="select-caret"/>
    </div>
    <template v-if="errors">
      <p class="input-error">{{ errors[0] }}</p>
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
