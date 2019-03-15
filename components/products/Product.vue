<template>
  <div class="product__body">

    <!-- Product featured image -->
    <div class="product__featured-image-container">
      <nuxt-link :to="localePath({ name: 'products-slug', params: { slug: product.slug } })">
        <img
          :alt="alt"
          :src="imgSrc"
          class="product__featured-image">
      </nuxt-link>
    </div>

    <!-- Content -->
    <div class="product__content">

      <!-- Base product name -->
      <nuxt-link
        :to="localePath({ name: 'products-slug', params: { slug: product.slug } })"
        class="product__name-link">
        <h5 class="product__name">
          {{ product.name[locale] }}
        </h5>
      </nuxt-link>

      <!-- Base product description -->
      <p class="product__description">
        {{ product.description[locale] }}
      </p>

      <!-- Base product price and currency -->
      <p class="product__price-container">
        <span class="product__currency">
          {{ productCurrency }}
        </span>
        <span class="product__price">
          {{ productPrice }}
        </span>
      </p>

      <div class="product__meta">
        <font-awesome-icon
          :icon="['far', 'store']"
          class="product__meta-icon"/>
        <nuxt-link
          :to="localePath({ name: 'shop-slug-details', params: { slug: product.shop.slug } })"
          class="product__meta-link">
          {{ shopName }}
        </nuxt-link>
      </div>
      
    </div>
  </div>
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
    imgSrc() {
      return require("@/assets/img/placeholders/product.svg");
    },
    productCurrency() {
      return this.product.price.currency;
    },
    productPrice() {
      return this.product.price.amount;
    },
    shopName() {
      return this.product.shop.name;
    }
  }
};
</script>
