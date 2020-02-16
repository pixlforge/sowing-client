<template>
  <div
    :class="[
      `border-${shopTheme}-200`,
      {
        'mb-10': collapse,
        'mb-48': !collapse
      }
    ]"
    class="bg-white border rounded-lg"
  >

    <!-- Header -->
    <header class="flex justify-between items-center bg-gray-100 p-20 lg:px-36 lg:py-20">
      <div class="flex">

        <!-- Collapse or expand the content -->
        <button
          @click.prevent="toggleCollapse"
          class="text-gray-300 hover:text-gray-500 transition-colors duration-200 ease-out mr-16"
        >
          <font-awesome-icon
            :icon="['far', 'caret-circle-up']"
            :class="{
              'rotate-180': collapse
            }"
            class="text-20 transform"
          />
        </button>

        <!-- Type title -->
        <Heading
          :utilities="headingUtilities"
          tag="h5"
          visual="h5"
        >
          {{ form.name[locale] || $t('product_variation_type.unnamed') }}
        </Heading>
      </div>

      <!-- Info Bubble: Add at least the type name in your own language -->
      <InfoBubble
        v-if="!form.name[locale]"
        :color="shopTheme"
        class="ml-16"
      >
        {{ $t('product_variation_type.add_type_name_in_your_own_language') }}
      </InfoBubble>
    </header>

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
          class="w-full border-2 border-dashed rounded-lg text-16 placeholder-gray-300 px-20 py-16 mb-10"
        >
      </div>
    </div>
  </div>
</template>

<script>
import theming from '@/mixins/theming'
import { debounce as _debounce } from 'lodash'
import { mapGetters } from 'vuex'

import Heading from '@/components/globals/Heading'
import InfoBubble from '@/components/globals/InfoBubble'

export default {
  components: {
    Heading,
    InfoBubble
  },
  mixins: [theming],
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
    ...mapGetters({
      locale: 'locale'
    }),
    availableLocales() {
      return this.$i18n.locales
    },
    currentLocale() {
      return this.availableLocales.find(locale => locale.code === this.locale)
    },
    headingUtilities() {
      if (this.form.name[this.locale]) {
        return
      }

      return 'text-gray-300'
    }
  },
  watch: {
    'form.name': {
      deep: true,
      handler: _debounce(async function () {
        await this.$axios.$patch(`/products/${this.product.slug}/product-variation-types/${this.type.id}`, this.form)
      }, 500)
    }
  },
  methods: {
    toggleCollapse() {
      this.collapse = !this.collapse
    }
  }
}
</script>
