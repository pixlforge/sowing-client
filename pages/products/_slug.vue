<template>
  <main>

    <!-- Header -->
    <AppHeader
      :title="product.shop.name"
      :description="product.shop.description_short[locale]"
      :class="bgTheme"
    >
      <template>
        <AppHeaderButtonLink
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
        </AppHeaderButtonLink>
      </template>
    </AppHeader>

    <!-- Product details -->
    <ContentSection>
      <AppProductDetails :product="product"/>
    </ContentSection>

    <!-- Streak newsletter -->
    <StreakNewsletter/>

  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import AppHeader from '@/components/headers/AppHeader'
import ContentSection from '@/components/ContentSection'
import AppProductDetails from '@/components/products/AppProductDetails'
import StreakNewsletter from '@/components/streaks/StreakNewsletter'
import AppHeaderButtonLink from '@/components/buttons/AppHeaderButtonLink'

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
    AppHeader,
    ContentSection,
    AppProductDetails,
    StreakNewsletter,
    AppHeaderButtonLink
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
