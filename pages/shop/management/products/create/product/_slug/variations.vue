<template>
  <div>

    <!-- Step -->
    <AppProductCreatorStep>
      4/5
    </AppProductCreatorStep>

    <!-- Header -->
    <header class="flex flex-wrap items-center my-30">

      <!-- Back -->
      <AppBackButton
        :route="{
          name: 'shop-management-products-create-product-slug-price',
          params: {
            slug: product.slug
          }
        }"
        class="mr-20"
      />

      <!-- Page title -->
      <h1 class="text-20 sm:text-24 md:text-30 font-extrabold leading-relaxed text-center md:text-left">
        {{ $t('products.management.create.variations_for') }}
        <span :class="`text-${shopTheme}-500`">
          {{ product.name[locale] || $t('products.management.create.unnamed') }}
        </span>
      </h1>
    </header>

    <!-- Infotip -->
    <AppInfoTip icon="info">
      {{ $t('products.management.create.tips.variations') }}
    </AppInfoTip>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import AppInfoTip from '@/components/globals/AppInfoTip'
import AppBackButton from '@/components/buttons/AppBackButton'
import AppProductCreatorStep from '@/components/products/creator/AppProductCreatorStep'

export default {
  head() {
    return {
      title: `${this.$t('products.management.create.add_variations')} | ${this.product.name[this.locale]}`,
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
  layout: 'create-product',
  middleware: [
    'authenticated',
    'hasShop'
  ],
  components: {
    AppInfoTip,
    AppBackButton,
    AppProductCreatorStep
  },
  mixins: [theming],
  data() {
    return {
      form: {},
      product: {},
      errors: {}
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale'
    })
  },
  async asyncData({ app, params }) {
    const shop = await app.$axios.$get('/user/shop')
    const product = await app.$axios.$get(`/products/${params.slug}`)

    return {
      shop: shop.data,
      product: product.data
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
