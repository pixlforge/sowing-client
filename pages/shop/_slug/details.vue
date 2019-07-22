<template>
  <main>

    <!-- Cover -->
    <AppShopCover
      v-if="shopCover"
      :shop-cover="shopCover"/>

    <!-- Header -->
    <AppHeader :class="bgTheme">
      <template slot="icon">
        <AppHeaderIcon/>
      </template>
      <template slot="title">
        <AppTitle
          semantic="h1"
          visual="header">
          {{ shopName }}
        </AppTitle>
      </template>
      <template slot="description">
        <AppHeaderDescription>
          {{ shop.description_short[locale] }}
        </AppHeaderDescription>
        <AppHeaderList>
          <li>
            <font-awesome-icon
              :icon="['far', 'map-marker-alt']"
              class="mr-5"/>
            {{ shop.postal_code }} {{ shop.city }}
          </li>
          <li class="ml-20">
            {{ shop.country.name[locale] }}
          </li>
        </AppHeaderList>
      </template>
    </AppHeader>

    <!-- Content -->
    <AppContentSection>
      <AppTitle
        semantic="h1"
        visual="main">
        {{ $t("pages.shop_details.welcome") }}
      </AppTitle>

      <p
        class="paragraph__large paragraph--center paragraph--narrow"
        v-html="shop.description_long[locale]"/>
    </AppContentSection>

    <AppContentSection>
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
    </AppContentSection>

    <AppContentSection>
      <AppTitle
        semantic="h2"
        visual="main">
        {{ $t("pages.shop_details.interested") }}
      </AppTitle>

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
    </AppContentSection>

    <!-- Register CTA -->
    <AppStreakRegister/>

  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import theming from '@/mixins/theming';

import AppTitle from '@/components/AppTitle';
import AppHeader from '@/components/headers/AppHeader';
import AppShopCover from '@/components/shops/AppShopCover';
import AppHeaderIcon from '@/components/headers/AppHeaderIcon';
import AppContentSection from '@/components/AppContentSection';
import AppHeaderList from '@/components/headers/AppHeaderList';
import AppStreakRegister from '@/components/streaks/AppStreakRegister';
import AppHeaderDescription from '@/components/headers/AppHeaderDescription';

export default {
  head() {
    return {
      title: `${this.shop.name} | ${this.title}`
    };
  },
  components: {
    AppTitle,
    AppHeader,
    AppShopCover,
    AppHeaderIcon,
    AppContentSection,
    AppHeaderList,
    AppStreakRegister,
    AppHeaderDescription
  },
  mixins: [theming],
  data() {
    return {
      shop: {}
    };
  },
  computed: {
    ...mapGetters({
      locale: 'locale',
      shopAvatar: 'shop/shopAvatar',
      shopCover: 'shop/shopCover',
      shopName: 'shop/shopName'
    }),
    imgUrl() {
      return `https://bulma.io/images/placeholders/1280x960.png`;
    },
    imgAlt() {
      return this.$t('components.products.img.alt');
    }
  },
  async asyncData({ app, route }) {
    const shop = await app.$axios.$get(`/shops/${route.params.slug}`);

    return {
      title: app.head.title,
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
