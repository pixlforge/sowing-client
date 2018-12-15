<template>
  <nuxt-link
    :to="localePath({ name: 'products-slug', params: { slug: product.slug } })"
    class="card-product">

    <!-- Product featured image -->
    <div class="w-2/5">
      <img
        :alt="alt"
        src="https://bulma.io/images/placeholders/1280x960.png"
        class="block rounded-l-lg">
    </div>

    <div class="w-3/5 flex flex-col justify-between p-30">

      <!-- Base product name -->
      <h5 class="text-24 font-bold text-green-darkest">
        {{ product.name[locale] }}
      </h5>

      <!-- Base product description -->
      <p class="text-18 text-grey-lighter leading-tight mt-15">
        {{ product.description[locale] }}
      </p>

      <!-- Base product price and currency -->
      <p class="text-20 flex items-start mt-15">
        <span class="product-currency">{{ productCurrency }}</span>
        <span class="product-price">{{ productPrice }}</span>
      </p>

      <div class="flex items-start text-14 text-green mt-15">
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
      return this.$t("components.products.img.alt");
    },
    productCurrency() {
      return this.product.price.currency;
    },
    productPrice() {
      return this.product.price.amount;
    }
  }
};
</script>

