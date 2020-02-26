<template>
  <div>
    {{ variationName }}
  </div>
</template>

<script>
export default {
  props: {
    variation: {
      type: Object,
      required: true
    }
  },
  computed: {
    variationName() {
      return this.variation.name[this.locale] || this.$t('product.creator.variation.unnamed')
    }
  }
}
</script>
