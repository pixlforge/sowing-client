<template>
  <div
    :class="`border-${shopTheme}-200`"
    class="bg-white border rounded-lg"
  >

    <!-- Header -->
    <header class="flex items-baseline bg-gray-100 p-20 lg:px-36 lg:py-20">
      <Heading
        :utilities="headingUtilities"
        tag="h5"
        visual="h5"
      >
        {{ form.name[locale] || $t('product_variation_type.unnamed') }}
      </Heading>
      <div
        v-if="!form.name[locale]"
        class="relative group cursor-pointer ml-16"
      >
        <font-awesome-icon
          :icon="['fas', 'exclamation-triangle']"
          :class="`text-${shopTheme}-400`"
          class="text-14"
        />
        <div class="w-200 absolute top-0 left-0 hidden group-hover:block text-12 text-center leading-relaxed bg-white rounded-lg shadow-xl px-20 py-16 ml-18 mt-18">
          Il est recommandé d'ajouter un nom en <span class="lowercase">{{ currentLocale.name }}</span>
        </div>
      </div>
    </header>

    <div class="flex flex-wrap p-20 lg:px-36 lg:py-20 -mx-10 mt-16">
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

export default {
  components: {
    Heading
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
      }
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
  }
}
</script>
