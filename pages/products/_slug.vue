<template>
  <main>

    <!-- Header -->
    <Header
      :title="product.shop.name"
      :description="product.shop.description_short[locale]"
      :class="bgTheme"
    >
      <template>
        <HeaderButtonLink
          :route="{
            name: 'shop-slug-details',
            params: {
              slug: product.shop.slug
            }
          }"
          :color="shopTheme"
          class="mt-16 shadow-2xl"
        >
          {{ $t("pages.shop.visit") }}
        </HeaderButtonLink>
      </template>
    </Header>

    <!-- Product details -->
    <ContentSection>
      <ProductDetails :product="product"/>
    </ContentSection>

    <!-- Streak newsletter -->
    <StreakNewsletter/>

  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import Header from '@/components/headers/Header'
import ContentSection from '@/components/globals/ContentSection'
import ProductDetails from '@/components/products/ProductDetails'
import StreakNewsletter from '@/components/streaks/StreakNewsletter'
import HeaderButtonLink from '@/components/buttons/HeaderButtonLink'

export default {
  head() {
    return {
      title: this.product.name[this.locale],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        }
      ]
    }
  },
  components: {
    Header,
    ContentSection,
    ProductDetails,
    StreakNewsletter,
    HeaderButtonLink
  },
  mixins: [theming],
  data() {
    return {
      product: {},
      shop: {}
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale',
      shopAvatar: 'shop/shopAvatar'
    })
  },
  async asyncData({ params, app }) {
    const product = await app.$axios.$get(`/products/${params.slug}`)
    const shop = await app.$axios.$get(`/shops/${product.data.shop.slug}`)

    return {
      product: product.data,
      shop: shop.data
    }
  },
  mounted() {
    this.setShop(this.shop)
  },
  destroyed() {
    this.resetShop()
  },
  methods: {
    ...mapActions({
      setShop: 'shop/setShop',
      resetShop: 'shop/resetShop'
    })
  }
}
</script>
