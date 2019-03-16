<template>
  <main>
    
    <!-- Cover -->
    <AppShopCover
      v-if="shopCover"
      :shop-cover="shopCover"/>

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
        <h1 class="header__title">
          {{ shopName }}
        </h1>
      </template>
      <template slot="description">
        <p class="header__description">
          {{ shop.description_short[locale] }}
        </p>

        <ul class="list__address list__address--white">
          <li>
            <font-awesome-icon
              :icon="['far', 'map-marker-alt']"
              class="mr-5"/>
            {{ shop.postal_code }} {{ shop.city }}
          </li>
          <li class="ml-20">
            {{ shop.country.name[locale] }}
          </li>
        </ul>
      </template>
    </Header>

    <!-- Content -->
    <section class="section__container container">
      <h2 class="title__main title--center">
        {{ $t("pages.shop_details.welcome") }}
      </h2>

      <p
        class="paragraph__large paragraph--center paragraph--narrow"
        v-html="shop.description_long[locale]"/>
    </section>

    <section class="section__container container">
      <div class="shop-details__images-section">
        <div
          v-for="n in 10"
          :key="n"
          class="shop-details__images-container">
          <img
            :src="imgUrl"
            :alt="imgAlt"
            class="shop-details__image">
        </div>
      </div>
    </section>

    <section class="section__container">
      <h2 class="title__main title--center">
        {{ $t("pages.shop_details.interested") }}
      </h2>

      <div class="shop-details__interested">
        <a
          :class="btnTheme"
          class="button button--large">
          <font-awesome-icon
            :icon="['far', 'search']"
            class="button__icon"/>
          {{ $t("buttons.see_all_articles") }}
        </a>
      </div>
    </section>

    <!-- Register CTA -->
    <section>
      <StreakRegister/>
    </section>

  </main>
</template>

<script>
import Header from "@/components/Header";
import AppShopCover from "@/components/shops/AppShopCover";
import StreakRegister from "@/components/streaks/StreakRegister";
import theming from "@/mixins/theming";
import { mapGetters, mapActions } from "vuex";

export default {
  head() {
    return {
      title: `${this.title} | ${this.shop.name}`
    };
  },
  components: {
    Header,
    AppShopCover,
    StreakRegister
  },
  mixins: [theming],
  data() {
    return {
      shop: {}
    };
  },
  async asyncData({ app, route }) {
    let shop = await app.$axios.$get(`/shops/${route.params.slug}`);

    return {
      title: app.head.title,
      shop: shop.data
    };
  },
  computed: {
    ...mapGetters({
      locale: "locale",
      shopAvatar: "shop/shopAvatar",
      shopCover: "shop/shopCover",
      shopName: "shop/shopName"
    }),
    imgUrl() {
      return `https://bulma.io/images/placeholders/1280x960.png`;
    },
    imgAlt() {
      return this.$t("components.products.img.alt");
    }
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
