<template>
  <div>

    <!-- Header -->
    <header class="flex flex-wrap items-center my-30">

      <!-- Back -->
      <ButtonBack
        v-if="product"
        :route="{
          name: 'shop-management-products-create-product-slug-types',
          params: {
            slug: product.slug
          }
        }"
        class="mr-20"
      />

      <!-- Page title -->
      <Heading
        tag="h1"
        visual="h4"
        utilities="text-center"
      >
        <span :class="`text-${shopTheme}-500`">
          {{ variationName || $t('product.creator.variation.unnamed') | capitalizeFirstLetter }}
        </span>
      </Heading>
    </header>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import theming from '@/mixins/theming'
import locales from '@/mixins/locales'
import { capitalizeFirstLetter } from '@/mixins/filters'

import ButtonBack from '@/components/buttons/ButtonBack'
import Heading from '@/components/globals/Heading'

export default {
  components: {
    ButtonBack,
    Heading
  },
  mixins: [
    theming,
    locales,
    capitalizeFirstLetter
  ],
  middleware: [
    'authenticated',
    'hasShop'
  ],
  layout: 'create-product',
  head() {
    return {
      title: `${this.$t('product.creator.variation.title')} ${this.form.name[this.locale] || this.$t('product.creator.variation.unnamed')} | ${this.$t('product.management.create.title')} | ${this.product.name[this.locale]} | ${this.shop.name}`,
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex'
        }
      ]
    }
  },
  data() {
    return {
      form: {}
    }
  },
  computed: {
    variationName() {
      return this.form.name[this.locale]
    }
  },
  async asyncData({ app, params }) {
    const shop = await app.$axios.$get('/user/shop')
    const product = await app.$axios.$get(`/products/${params.slug}`)
    const variation = await app.$axios.$get(`/products/${params.slug}/product-variations/${params.id}`)

    return {
      shop: shop.data,
      product: product.data,
      form: variation.data
    }
  },
  mounted() {
    this.setShop(this.shop)
  },
  methods: {
    ...mapActions({
      setShop: 'shop/setShop'
    })
  }
}
</script>
