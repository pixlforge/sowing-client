<template>
  <div>

    <!-- Variation label -->
    <FormLabel name="variation">
      {{ variationType }}
    </FormLabel>

    <!-- Variation select -->
    <FormSelect
      :value="selectedVariationId"
      @change.native="changed"
      name="variation"
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
    </FormSelect>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import FormLabel from '@/components/forms/FormLabel'
import FormSelect from '@/components/forms/FormSelect'

export default {
  components: {
    FormLabel,
    FormSelect
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
      return this.$t('product.variations.select.out_of_stock')
    },
    variationType() {
      return this.variations[0].type.name[this.locale]
    },
    selectionLabel() {
      return this.$t('product.variations.labels.selection')
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
