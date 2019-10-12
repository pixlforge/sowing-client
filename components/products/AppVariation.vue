<template>
  <div>

    <!-- Variation label -->
    <AppFormLabel name="variation">
      {{ variationType }}
    </AppFormLabel>

    <!-- Variation select -->
    <AppFormSelect
      :value="selectedVariationId"
      name="variation"
      @change.native="changed"
    >
      <option
        v-for="variation in variations"
        :key="variation.id"
        :value="variation.id"
        :disabled="!variation.in_stock"
      >

        <!-- Variation name -->
        {{ variationName(variation) }}

        <!-- Price variation -->
        <template v-if="variation.price_varies">
          ({{ variation.price.detailed.currency }} {{ variation.price.detailed.amount }})
        </template>

        <template v-if="!variation.in_stock">
          ({{ outOfStock }})
        </template>

      </option>
    </AppFormSelect>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import AppFormLabel from '@/components/forms/AppFormLabel'
import AppFormSelect from '@/components/forms/AppFormSelect'

export default {
  components: {
    AppFormLabel,
    AppFormSelect
  },
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
      default: ''
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale'
    }),
    outOfStock() {
      return this.$t('products.variations.select.out_of_stock')
    },
    variationType() {
      return this.variations[0].type.name[this.locale]
    },
    selectionLabel() {
      return this.$t('products.variations.labels.selection')
    },
    selectedVariationId() {
      if (!this.value) {
        return ''
      }

      if (!this.findVariation(this.value.id)) {
        return ''
      }

      return this.value.id
    }
  },
  methods: {
    changed(event) {
      this.$emit('input', this.findVariation(event.target.value))
    },
    findVariation(id) {
      const variation = this.variations.find(variation => variation.id === parseInt(id))

      if (typeof variation === 'undefined') {
        return null
      }

      return variation
    },
    variationName(variation) {
      return variation.name[this.locale]
    }
  }
}
</script>
