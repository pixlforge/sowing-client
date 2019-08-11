<template>
  <nuxt-link
    :to="localePath({ name: 'products-slug', params: { slug: product.slug } })"
    class="w-full md:w-1/2 lg:w-1/3 px-20 my-24"
  >
    <div class="no-underline outline-none focus:shadow-outline rounded-lg shadow-xl overflow-hidden">

      <!-- Product featured image -->
      <img
        :src="imgUrl"
        :alt="imgAlt"
        class="w-full h-200 md:h-250 object-cover"
      >

      <!-- Content -->
      <div class="flex flex-col justify-between p-30">

        <!-- Base product name -->
        <AppTitle
          semantic="h3"
          visual="h3"
        >
          {{ productName }}
        </AppTitle>

        <!-- Base product description -->
        <p class="text-14 leading-relaxed mt-16">
          {{ product.description[locale] }}
        </p>

        <!-- Base product price and currency -->
        <p class="text-20 flex items-start my-30">
          <span class="text-14 font-extrabold text-green-500 mr-10">
            {{ productCurrency }}
          </span>
          <span class="text-18 font-extrabold">
            {{ productPrice }}
          </span>
        </p>

      </div>
    </div>
  </nuxt-link>
</template>

<script>
import { mapGetters } from 'vuex'

import AppTitle from '@/components/AppTitle'

export default {
  components: {
    AppTitle
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale'
    }),
    imgAlt() {
      return this.$t('components.products.img.alt')
    },
    imgUrl() {
      if (!this.product.media) {
        return require('@/assets/img/placeholders/product.svg')
      }

      return this.product.media
    },
    productName() {
      return this.product.name[this.locale]
    },
    productCurrency() {
      return this.product.price.detailed.currency
    },
    productPrice() {
      return this.product.price.detailed.amount
    },
    shopName() {
      return this.product.shop.name
    }
  }
}
</script>
