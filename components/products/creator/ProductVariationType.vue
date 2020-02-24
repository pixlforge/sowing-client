<template>
  <div
    :class="`border-${shopTheme}-200`"
    class="bg-white border rounded-lg"
  >

    <!-- Header -->
    <header class="flex justify-between items-center bg-gray-100 p-20 lg:px-36 lg:py-20">
      <div class="flex items-center">

        <!-- Collapse or expand the content -->
        <ButtonCollapse
          @click.native="toggleCollapse"
          :active="collapse"
        />

        <!-- Type title -->
        <Heading
          :utilities="headingUtilities"
          tag="h5"
          visual="h5"
        >
          {{ form.name[locale] || $t('product_variation_type.unnamed') }}
        </Heading>

        <!-- Info Bubble: Add at least the type name in your own language -->
        <InfoBubble
          v-if="!form.name[locale]"
          :color="shopTheme"
          class="ml-16"
        >
          {{ $t('product_variation_type.add_type_name_in_your_own_language') }}
        </InfoBubble>
      </div>

      <!-- Delete -->
      <ButtonDelete
        @click.native="confirmDelete"
        icon-size="text-16"
      />
    </header>

    <!-- Types -->
    <div
      v-if="!collapse"
      class="flex flex-wrap p-20 lg:px-36 lg:py-20 -mx-10 mt-16"
    >
      <div
        v-for="locale in availableLocales"
        :key="locale.code"
        class="w-full lg:w-1/2 px-10"
      >
        <input
          v-model="form.name[locale.code]"
          :placeholder="$t(`form.product_variation_type.name.${locale.code}`)"
          :class="`border-${shopTheme}-200`"
          type="text"
          class="w-full border-2 border-dashed rounded-lg text-14 lg:text-16 placeholder-gray-300 px-20 py-16 mb-10"
        >
      </div>
    </div>

    <ProductVariation
      v-for="variation in variationsForType"
      :key="variation.id"
      :variation="variation"
    />

    <!-- Add a new variation type -->
    <button
      @click="addVariation"
      type="button"
      class="w-full hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-lg text-14 text-gray-300 hover:text-gray-400 transition-all duration-200 ease-out select-none py-12"
    >
      <font-awesome-icon
        :icon="['far', 'plus']"
        class="mr-10"
      />
      <template v-if="productHasNoVariation">
        {{ $t('product_variation_type.add_type') }}
      </template>
      <template v-else>
        {{ $t('product_variation_type.add_another_type') }}
      </template>
    </button>

  </div>
</template>

<script>
import theming from '@/mixins/theming'
import locales from '@/mixins/locales'
import { debounce as _debounce } from 'lodash'
import { mapActions } from 'vuex'

import ButtonCollapse from '@/components/buttons/ButtonCollapse'
import ButtonDelete from '@/components/buttons/ButtonDelete'
import Heading from '@/components/globals/Heading'
import InfoBubble from '@/components/globals/InfoBubble'
import ProductVariation from '@/components/products/creator/ProductVariation'

export default {
  components: {
    ButtonCollapse,
    ButtonDelete,
    Heading,
    InfoBubble,
    ProductVariation
  },
  mixins: [
    theming,
    locales
  ],
  props: {
    type: {
      type: Object,
      required: true
    },
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      form: {
        name: this.type.name
      },
      collapse: false
    }
  },
  computed: {
    headingUtilities() {
      if (this.form.name[this.locale]) {
        return
      }

      return 'text-gray-300'
    },
    variationsForType() {
      return this.product.variations[this.type.id]
    },
    productHasNoVariation() {
      return !this.variationsForType
    }
  },
  watch: {
    'form.name': {
      deep: true,
      handler: _debounce(async function () {
        await this.$axios.$patch(`/products/${this.product.slug}/product-variation-types/${this.type.id}`, this.form)
      }, 1000)
    }
  },
  methods: {
    ...mapActions({
      openModal: 'confirmation/openModal'
    }),
    confirmDelete() {
      this.openModal(this.type.id)
    },
    toggleCollapse() {
      this.collapse = !this.collapse
    },
    addVariation() {
      console.log('Add a product variation 😄')
    }
  }
}
</script>
