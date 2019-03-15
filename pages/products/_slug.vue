<template>
  <main>

    <!-- Header -->
    <Header :class="bgTheme">
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
    </Header>

    <!-- Product details -->
    <section class="section__container container">
      <ProductDetails :product="product"/>
    </section>

    <!-- Streak newsletter -->
    <section>
      <StreakNewsletter/>
    </section>

  </main>
</template>

<script>
import Header from "@/components/Header";
import ProductDetails from "@/components/products/ProductDetails";
import StreakNewsletter from "@/components/streaks/StreakNewsletter";
import theming from "@/mixins/theming";
import { mapGetters, mapActions } from "vuex";

export default {
  head() {
    return {
      title: `${this.title} | ${this.product.name[this.locale]}`
    };
  },
  components: {
    Header,
    ProductDetails,
    StreakNewsletter
  },
  mixins: [theming],
  data() {
    return {
      product: {},
      shop: {}
    };
  },
  async asyncData({ params, app }) {
    let product = await app.$axios.$get(`/products/${params.slug}`);
    let shop = await app.$axios.$get(`/shops/${product.data.shop.slug}`);

    return {
      title: app.head.title,
      product: product.data,
      shop: shop.data
    };
  },
  computed: {
    ...mapGetters({
      locale: "locale",
      shopAvatar: "shop/shopAvatar"
    })
  },
  mounted() {
    this.setShop(this.shop);
  },
  destroyed() {
    this.resetShop();
  },
  methods: {
    ...mapActions({
      setShop: "shop/setShop",
      resetShop: "shop/resetShop"
    })
  }
};
</script>
