<template>
  <nuxt-link
    :to="{
      name: 'products-slug',
      params: {
        slug: product.slug
      }
    }"
    class="w-full md:w-1/2 xl:w-1/3 group px-16 my-24"
  >

    <!-- Product featured image -->
    <img
      :src="imgUrl"
      :alt="imgAlt"
      class="w-full h-250 sm:h-300 md:h-300 lg:h-350 object-cover rounded-lg group-hover:shadow-lg transform group-hover:-translate-y-1 transition-all duration-200 ease-out"
    >

    <div class="relative px-20 sm:px-30 -mt-36">
      <div class="bg-white outline-none focus:shadow-outline border border-gray-200 rounded-md group-hover:shadow-lg transform group-hover:-translate-y-1 transition-all duration-200 ease-out overflow-hidden">

        <!-- Content -->
        <div class="flex flex-col justify-between px-20 sm:px-24 py-36">

          <!-- Base product name -->
          <Heading
            tag="h3"
            visual="h4"
          >
            {{ productName }}
          </Heading>

          <!-- Base product description -->
          <p class="text-12 sm:text-14 leading-relaxed mt-16">
            {{ productDescription }}
          </p>

          <!-- Base product price and currency -->
          <p class="text-20 flex items-start mt-30">
            <span class="text-14 font-extrabold text-green-500 mr-10">
              {{ productCurrency }}
            </span>
            <span class="text-18 font-extrabold">
              {{ productPrice }}
            </span>
          </p>

        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import { mapGetters } from 'vuex'

import Heading from '@/components/globals/Heading'

export default {
  components: {
    Heading
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
      return this.$t('products.img.alt')
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
    productDescription() {
      const descriptionLength = this.product.description[this.locale].length
      if (descriptionLength > 200) {
        return this.product.description[this.locale]
          .substr(0, 200)
          .concat(' ...')
      }
      return this.product.description[this.locale]
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
