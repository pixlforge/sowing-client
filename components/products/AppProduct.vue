<template>
  <nuxt-link
    :to="localePath({ name: 'products-slug', params: { slug: product.slug } })"
    class="w-full md:w-1/2 xl:w-1/3 px-20 md:px-36 my-24 md:my-48"
  >
    <div class="no-underline outline-none focus:shadow-outline rounded-lg shadow-2xl">

      <!-- Product featured image -->
      <div
        :style="imgUrl"
        class="w-full h-200 md:h-315 rounded-t-lg bg-cover bg-center bg-no-repeat"
      />

      <!-- Content -->
      <div class="flex flex-col justify-between p-30">

        <!-- Base product name -->
        <nuxt-link
          :to="localePath({ name: 'products-slug', params: { slug: product.slug } })"
          class="no-underline"
        >
          <AppTitle
            semantic="h3"
            visual="h3"
          >
            {{ productName }}
          </AppTitle>
        </nuxt-link>

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

        <div class="flex items-start text-14 text-green-400 mt-16">
          <font-awesome-icon
            :icon="['far', 'store']"
            class="mr-10"
          />
          <nuxt-link
            :to="localePath({ name: 'shop-slug-details', params: { slug: product.shop.slug } })"
            class="text-green-400 font-semibold no-underline hover:underline"
          >
            {{ shopName }}
          </nuxt-link>
        </div>

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
    alt() {
      return this.$t('components.products.img.alt')
    },
    imgUrl() {
      if (!this.product.media) {
        const img = require('@/assets/img/placeholders/product.svg')
        return `background-image: url(${img});`
      }

      return `background-image: url(${this.product.media});`
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
