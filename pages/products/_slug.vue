<template>
  <main>

    <!-- Header -->
    <AppHeader :class="bgTheme">
      <template slot="icon">
        <div
          v-if="shopAvatar"
          :style="`background-image: url('${shopAvatar}');`"
          class="header__avatar header__avatar--picture"/>
        <div
          v-else
          :class="textTheme">
          <font-awesome-icon
            :icon="['far', 'store']"
            class="header__icon"/>
        </div>
      </template>
      <template slot="title">
        <nuxt-link
          :to="localePath({ name: 'shop-slug-details', params: { slug: product.shop.slug } })"
          class="product-details__link">
          <h1 class="header__title">
            {{ product.shop.name }}
          </h1>
        </nuxt-link>
      </template>
      <template slot="description">
        <nuxt-link
          :to="localePath({ name: 'shop-slug-details', params: { slug: product.shop.slug } })"
          class="product-details__link">
          <p class="header__description">
            {{ product.shop.description_short[locale] }}
          </p>
        </nuxt-link>
      </template>
    </AppHeader>

    <!-- Product details -->
    <section class="section__container container">
      <AppProductDetails :product="product"/>
    </section>

    <!-- Streak newsletter -->
    <section>
      <AppStreakNewsletter/>
    </section>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import theming from '@/mixins/theming';

import AppHeader from '@/components/AppHeader';
import AppStreakNewsletter from '@/components/streaks/AppStreakNewsletter';
import AppProductDetails from '@/components/products/AppProductDetails';

export default {
  head() {
    return {
      title: `${this.product.name[this.locale]} | ${this.title}`
    };
  },
  components: {
    AppHeader,
    AppProductDetails,
    AppStreakNewsletter
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
