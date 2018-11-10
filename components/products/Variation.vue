<template>
  <div>
    <label
      for=""
      class="label">
      {{ variationType }}
    </label>
    <div class="relative">
      <select
        id=""
        name=""
        class="select">
        <option value="">{{ selectionLabel }}</option>
        <option
          v-for="variation in variations"
          :key="variation.id"
          :value="variation.id">
          {{ variationName(variation) }}
        </option>
      </select>
      <font-awesome-icon
        :icon="['fas', 'caret-down']"
        class="absolute h-full pin-y pin-r text-base text-green-dark mr-20"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    type: {
      type: String,
      required: true
    },
    variations: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      locale: "locale"
    }),
    variationType() {
      return this.variations[0].type.name[this.locale];
    },
    selectionLabel() {
      return this.$t("components.variations.selection_label");
    }
  },
  methods: {
    variationName(variation) {
      return variation.name[this.locale];
    }
  }
};
</script>

