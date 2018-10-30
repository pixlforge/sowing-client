<template>
  <nuxt-link
    :to="localePath({ name: 'products-slug', params: { slug: product.slug } })"
    class="card-product">
    <div class="w-2/5">
      <img
        :alt="alt"
        src="https://bulma.io/images/placeholders/1280x960.png"
        class="block rounded-l-lg">
    </div>
    <div class="w-3/5 flex flex-col justify-between p-30">
      <h5 class="text-26 font-bold text-green-darkest">
        {{ product.name[locale] }}
      </h5>
      <p class="text-base font-semibold text-grey-lighter leading-tight mt-15">
        {{ product.description[locale] }}
      </p>
      <p class="text-24 font-semibold text-green-darkest mt-15">
        CHF 249.&ndash;
      </p>
      <div class="flex items-center text-14 text-green mt-15">
        <font-awesome-icon
          :icon="['far', 'store']"
          class="mr-10"/>
        <p class="font-semibold">Petit coin de paradis</p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      locale: "locale"
    }),
    alt() {
      return this.$t("components.product.img.alt");
    }
  }
};
</script>

