<template>
  <FormFieldset>
    <div class="flex flex-wrap">
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

import FormFieldset from '@/components/forms/FormFieldset'

export default {
  components: {
    FormFieldset
  },
  mixins: [theming],
  props: {
    type: {
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
    availableLocales() {
      return this.$i18n.locales
    }
  }
}
</script>
