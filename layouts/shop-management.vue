<template>
  <div class="antialiased text-green-900">

    <!-- Alert -->
    <AppAlert/>

    <!-- Navbar -->
    <AppNavbar/>

    <!-- Categories -->
    <AppCategoryBar/>

    <!-- Shop cover image -->
    <AppShopCover
      v-if="shopCover"
      :shop-cover="shopCover"/>

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
        <AppTitle
          semantic="h1"
          visual="header">
          <template v-if="shopName">
            {{ shopName }}
          </template>
          <template v-else>
            {{ $t("pages.shop.title") }}
          </template>
        </AppTitle>
      </template>
      <template
        v-if="shop.id"
        slot="description">
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
          <li
            v-if="shop.country"
            class="ml-20">
            {{ shop.country.name[locale] }}
          </li>
        </AppHeaderList>
      </template>
    </AppHeader>

    <!-- Main -->
    <main>
      <AppContentSection>

        <!-- User owns a shop -->
        <template v-if="userHasShop">

          <!-- Title -->
          <AppTitle
            semantic="h1"
            visual="main">
            {{ $t("pages.shop.title") }}
          </AppTitle>

          <!-- Content -->
          <div class="shop__columns-wrapper">

            <!-- Side menu -->
            <aside class="shop__menu">
              <AppSideMenu>
                <AppSideMenuItem
                  label="Tableau de bord"
                  route="shop-management-dashboard"/>
                <AppSideMenuItem
                  label="Détails"
                  route="shop-management-details"/>
                <AppSideMenuItem
                  label="Thème"
                  route="shop-management-theme"/>
              </AppSideMenu>
            </aside>

            <!-- Page content -->
            <nuxt/>
          </div>
        </template>

        <!-- User does not own a shop -->
        <template v-else>

          <!-- Title -->
          <AppTitle
            semantic="h1"
            visual="main">
            {{ $t("pages.shop.not_created_yet") }}
          </AppTitle>

          <!-- Shop creation CTA -->
          <p class="paragraph__large paragraph--center">
            {{ $t("pages.shop.creation_cta_line_1") }}<br>
            {{ $t("pages.shop.creation_cta_line_2") }}
          </p>

          <!-- Illustration -->
          <div class="illustration__container">
            <img
              src="~assets/img/under_construction.svg"
              alt="Illustration of a building under construction"
              class="illustration__image">
          </div>

          <!-- Shop creation link -->
          <nuxt-link
            :to="localePath({ name: 'shop-creator-terms' })"
            class="button button__primary button--spaced-large">
            <font-awesome-icon
              :icon="['far', 'rocket']"
              class="button__icon button__icon--small"/>
            {{ $t("buttons.create_my_shop") }}
          </nuxt-link>
        </template>
      </AppContentSection>
    </main>

    <!-- Footer -->
    <AppFooter/>

    <!-- Disclaimer -->
    <AppDisclaimer :class="bgTheme"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import theming from '@/mixins/theming';

import AppTitle from '@/components/AppTitle';
import AppNavbar from '@/components/AppNavbar';
import AppAlert from '@/components/globals/AppAlert';
import AppFooter from '@/components/footer/AppFooter';
import AppHeader from '@/components/headers/AppHeader';
import AppSideMenu from '@/components/menus/AppSideMenu';
import AppShopCover from '@/components/shops/AppShopCover';
import AppDisclaimer from '@/components/footer/AppDisclaimer';
import AppContentSection from '@/components/AppContentSection';
import AppHeaderList from '@/components/headers/AppHeaderList';
import AppSideMenuItem from '@/components/menus/AppSideMenuItem';
import AppCategoryBar from '@/components/categories/AppCategoryBar';
import AppHeaderDescription from '@/components/headers/AppHeaderDescription';

export default {
  components: {
    AppTitle,
    AppNavbar,
    AppAlert,
    AppFooter,
    AppHeader,
    AppSideMenu,
    AppShopCover,
    AppDisclaimer,
    AppContentSection,
    AppHeaderList,
    AppSideMenuItem,
    AppCategoryBar,
    AppHeaderDescription
  },
  mixins: [theming],
  computed: {
    ...mapGetters({
      shopCover: 'shop/shopCover',
      shopAvatar: 'shop/shopAvatar',
      shopName: 'shop/shopName',
      userHasShop: 'userHasShop',
      shop: 'shop/shop',
      locale: 'locale'
    })
  },
  destroyed() {
    this.resetShop();
  },
  methods: {
    ...mapActions({
      resetShop: 'shop/resetShop'
    })
  }
};
</script>
