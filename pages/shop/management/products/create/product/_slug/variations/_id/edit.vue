<template>
  <div>
    Edit a variation
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import theming from '@/mixins/theming'
import locales from '@/mixins/locales'

export default {
  mixins: [
    theming,
    locales
  ],
  middleware: [
    'authenticated',
    'hasShop'
  ],
  layout: 'create-product',
  head() {
    return {
      title: `${this.$t('product.creator.variation.title')} ${this.$t('product.creator.variation.unnamed')} | ${this.$t('product.management.create.title')} | ${this.product.name[this.locale]} | ${this.shop.name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex'
        }
      ]
    }
  },
  async asyncData({ app, params }) {
    const shop = await app.$axios.$get('/user/shop')
    const product = await app.$axios.$get(`/products/${params.slug}`)
    const variation = await app.$axios.$get(`/products/${params.slug}/product-variations/${params.id}`)

    return {
      shop: shop.data,
      product: product.data,
      variation: variation.data
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
