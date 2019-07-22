<template>
  <main>

    <!-- Header -->
    <AppHeader :class="bgTheme">
      <template slot="icon">
        <AppHeaderIcon/>
      </template>
      <template slot="title">
        <nuxt-link
          :to="localePath({ name: 'shop-slug-details', params: { slug: product.shop.slug } })"
          class="product-details__link">
          <AppTitle
            semantic="h1"
            visual="header">
            {{ product.shop.name }}
          </AppTitle>
        </nuxt-link>
      </template>
      <template slot="description">
        <nuxt-link
          :to="localePath({ name: 'shop-slug-details', params: { slug: product.shop.slug } })"
          class="product-details__link">
          <AppHeaderDescription>
            {{ product.shop.description_short[locale] }}
          </AppHeaderDescription>
        </nuxt-link>
      </template>
    </AppHeader>

    <!-- Product details -->
    <AppContentSection>
      <AppProductDetails :product="product"/>
    </AppContentSection>

    <!-- Streak newsletter -->
    <AppStreakNewsletter/>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import theming from '@/mixins/theming';

import AppTitle from '@/components/AppTitle';
import AppHeader from '@/components/headers/AppHeader';
import AppContentSection from '@/components/AppContentSection';
import AppHeaderIcon from '@/components/headers/AppHeaderIcon';
import AppProductDetails from '@/components/products/AppProductDetails';
import AppStreakNewsletter from '@/components/streaks/AppStreakNewsletter';
import AppHeaderDescription from '@/components/headers/AppHeaderDescription';

export default {
  head() {
    return {
      title: `${this.product.name[this.locale]} | ${this.title}`
    };
  },
  components: {
    AppTitle,
    AppHeader,
    AppContentSection,
    AppHeaderIcon,
    AppProductDetails,
    AppStreakNewsletter,
    AppHeaderDescription
  },
  mixins: [theming],
  data() {
    return {
      product: {},
      shop: {}
    };
  },
  computed: {
    ...mapGetters({
      locale: 'locale',
      shopAvatar: 'shop/shopAvatar'
    })
  },
  async asyncData({ params, app }) {
    const product = await app.$axios.$get(`/products/${params.slug}`);
    const shop = await app.$axios.$get(`/shops/${product.data.shop.slug}`);

    return {
      title: app.head.title,
      product: product.data,
      shop: shop.data
    };
  },
  mounted() {
    this.setShop(this.shop);
  },
  destroyed() {
    this.resetShop();
  },
  methods: {
    ...mapActions({
      setShop: 'shop/setShop',
      resetShop: 'shop/resetShop'
    })
  }
};
</script>
