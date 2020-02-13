<template>
  <div>

    <!-- Step -->
    <ProductCreatorStep>
      4/5
    </ProductCreatorStep>

    <!-- Header -->
    <header class="flex flex-wrap items-center my-30">

      <!-- Back -->
      <BackButton
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
    <InfoTip icon="info">
      {{ $t('products.management.create.tips.variations') }}
    </InfoTip>

    <!-- Types -->
    <ProductVariationType
      v-for="type in product.types"
      :key="type.id"
      :type="type"
      class="mb-20"
    />

    <ButtonPrimary @click.native="addVariationType">
      Add type
    </ButtonPrimary>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import InfoTip from '@/components/globals/InfoTip'
import FormInput from '@/components/forms/FormInput'
import BackButton from '@/components/buttons/BackButton'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import ProductCreatorStep from '@/components/products/creator/ProductCreatorStep'
import ProductVariationType from '@/components/products/creator/ProductVariationType'

export default {
  components: {
    InfoTip,
    FormInput,
    BackButton,
    ButtonPrimary,
    ProductCreatorStep,
    ProductVariationType
  },
  mixins: [theming],
  middleware: [
    'authenticated',
    'hasShop'
  ],
  layout: 'create-product',
  head() {
    return {
      title: `${this.$t('products.management.create.variations')} | ${this.$t('products.management.create.title')} | ${this.product.name[this.locale]} | ${this.shop.name}`,
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
  data() {
    return {
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

    if (!this.product.types.length) {
      this.addVariationType()
    }
  },
  methods: {
    ...mapActions({
      setShop: 'shop/setShop'
    }),
    async addVariationType() {
      try {
        const product = await this.$axios.$post(`/products/${this.product.slug}/product-variation-types`)
        this.product = product.data
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
