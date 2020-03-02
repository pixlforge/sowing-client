<template>
  <ResourceListItem>
    <nuxt-link
      :to="{
        name: 'shop-management-products-create-product-slug-variation-id-edit',
        params: {
          slug: variation.product.slug,
          id: variation.id
        }
      }"
      class="w-full flex justify-between items-center text-center group"
    >
      <div class="w-1/3 px-20">
        <h5
          :class="{
            'text-gray-300': !hasVariationName,
            'text-gray-800': hasVariationName
          }"
          class="text-14"
        >
          {{ variationName }}
        </h5>
      </div>

      <!-- Price -->
      <div class="w-1/3 text-14 px-20">
        <small class="text-gray-400">
          {{ variationCurrency }}
        </small>
        <span
          :class="`text-${shopTheme}-500`"
          class="font-extrabold"
        >
          {{ variationPrice }}
        </span>
      </div>

      <!-- Chevron -->
      <div class="w-1/3 text-center px-20">
        <font-awesome-icon
          :icon="['fas', 'chevron-right']"
          class="text-16 text-gray-300 group-hover:text-gray-800 transform group-hover:translate-x-2 transition-all duration-200 ease-out"
        />
      </div>
    </nuxt-link>
  </ResourceListItem>
</template>

<script>
import locales from '@/mixins/locales'
import theming from '@/mixins/theming'

import ResourceListItem from '@/components/resources/ResourceListItem'

export default {
  components: {
    ResourceListItem
  },
  mixins: [
    locales,
    theming
  ],
  props: {
    variation: {
      type: Object,
      required: true
    }
  },
  computed: {
    variationName() {
      return this.variation.name[this.locale] || this.$t('product.creator.variation.unnamed')
    },
    hasVariationName() {
      return this.variation.name[this.locale]
    },
    variationCurrency() {
      return this.variation.price.detailed.currency
    },
    variationPrice() {
      return this.variation.price.detailed.amount
    }
  }
}
</script>
