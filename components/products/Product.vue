<template>
  <nuxt-link
    :to="localePath({ name: 'products-slug', params: { slug: product.slug } })"
    class="card-product">
    <div class="w-1/3">
      <img
        :alt="alt"
        src="https://bulma.io/images/placeholders/1280x960.png"
        class="">
    </div>
    <div class="w-2/3 flex flex-col justify-between p-30">
      {{ product }}
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    alt() {
      return this.$t("product.img.alt");
    }
  }
};
</script>

