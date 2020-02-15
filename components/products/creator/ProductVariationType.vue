<template>
  <FormFieldset>
    <Heading
      tag="h5"
      visual="h4"
    >
      {{ form.name[locale] || $t('product_variation_type.unnamed') }}
    </Heading>

    <div class="flex flex-wrap -mx-10 mt-16">
      <div
        v-for="locale in availableLocales"
        :key="locale.code"
        class="w-full lg:w-1/2 px-10"
      >
        <input
          v-model="form.name[locale.code]"
          :placeholder="$t(`form.product_variation_type.name.${locale.code}`)"
          :class="`border-${shopTheme}-200 placeholder-${shopTheme}-300`"
          type="text"
          class="w-full border-2 border-dashed rounded-lg text-20 px-20 py-16 mb-10"
        >
      </div>
    </div>
  </FormFieldset>
</template>

<script>
import theming from '@/mixins/theming'
import { debounce as _debounce } from 'lodash'
import { mapGetters } from 'vuex'

import Heading from '@/components/globals/Heading'
import FormFieldset from '@/components/forms/FormFieldset'

export default {
  components: {
    Heading,
    FormFieldset
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
