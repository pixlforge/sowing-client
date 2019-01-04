<template>
  <div>

    <!-- Variation label -->
    <label
      for="variation"
      class="label">
      {{ variationType }}
    </label>

    <!-- Variation select -->
    <div class="relative">
      <select
        id="variation"
        :value="selectedVariationId"
        name="variation"
        class="select"
        @change="changed">
        <option
          value=""
          selected>
          {{ selectionLabel }}
        </option>
        <option
          v-for="variation in variations"
          :key="variation.id"
          :value="variation.id"
          :disabled="!variation.in_stock">

          <!-- Variation name -->
          {{ variationName(variation) }}

          <!-- Price variation -->
          <template v-if="variation.price_varies">
            ({{ variation.price.currency }} {{ variation.price.amount }})
          </template>

          <template v-if="!variation.in_stock">
            ({{ outOfStock }})
          </template>

        </option>
      </select>
      <font-awesome-icon
        :icon="['fas', 'caret-down']"
        class="select-caret"/>
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
    },
    value: {
      type: [Object, String],
      required: false,
      default: ""
    }
  },
  computed: {
    ...mapGetters({
      locale: "locale"
    }),
    outOfStock() {
      return this.$t("components.variations.select.out_of_stock");
    },
    variationType() {
      return this.variations[0].type.name[this.locale];
    },
    selectionLabel() {
      return this.$t("components.variations.labels.selection");
    },
    selectedVariationId() {
      if (!this.value) {
        return "";
      }

      if (!this.findVariation(this.value.id)) {
        return "";
      }

      return this.value.id;
    }
  },
  methods: {
    changed(event) {
      this.$emit("input", this.findVariation(event.target.value));
    },
    findVariation(id) {
      const variation = this.variations.find(variation => variation.id == id);

      if (typeof variation === "undefined") {
        return null;
      }

      return variation;
    },
    variationName(variation) {
      return variation.name[this.locale];
    }
  }
};
</script>
