<template>
  <div>

    <!-- Alert -->
    <TheAlert/>

    <!-- Navbar -->
    <Navbar/>

    <!-- Categories -->
    <AppCategoryBar/>

    <!-- Shop cover image -->
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
          <template v-if="shopName">{{ shopName }}</template>
          <template v-else>{{ $t("pages.shop.title") }}</template>
        </h1>
      </template>
      <template
        v-if="shop.id"
        slot="description">
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
          <li
            v-if="shop.country"
            class="ml-20">
            {{ shop.country.name[locale] }}
          </li>
        </ul>
      </template>
    </Header>

    <!-- Main -->
    <main>
      <section class="section__container container">
        <div class="section__centered">

          <!-- User owns a shop -->
          <template v-if="userHasShop">

            <!-- Title -->
            <h2 class="title__main title--center">
              {{ $t("pages.shop.title") }}
            </h2>

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
            <h2 class="title__main title--center">
              {{ $t("pages.shop.not_created_yet") }}
            </h2>

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
        </div>
      </section>
    </main>

    <!-- Footer -->
    <Footer/>

    <!-- Disclaimer -->
    <Disclaimer :class="bgTheme"/>
  </div>
</template>

<script>
import TheAlert from "@/components/globals/TheAlert";
import Navbar from "@/components/Navbar";
import AppCategoryBar from "@/components/categories/AppCategoryBar";
import AppShopCover from "@/components/shops/AppShopCover";
import Header from "@/components/Header";
import AppSideMenu from "@/components/menus/AppSideMenu";
import AppSideMenuItem from "@/components/menus/AppSideMenuItem";
import Footer from "@/components/footer/Footer";
import Disclaimer from "@/components/footer/Disclaimer";
import theming from "@/mixins/theming";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    TheAlert,
    Navbar,
    AppCategoryBar,
    AppShopCover,
    Header,
    AppSideMenu,
    AppSideMenuItem,
    Footer,
    Disclaimer
  },
  mixins: [theming],
  computed: {
    ...mapGetters({
      shopCover: 'shop/shopCover',
      shopAvatar: 'shop/shopAvatar',
      shopName: 'shop/shopName',
      userHasShop: "userHasShop",
      shop: 'shop/shop',
      locale: 'locale'
    })
  },
  destroyed() {
    this.resetShop();
  },
  methods: {
    ...mapActions({
      resetShop: "shop/resetShop"
    })
  }
};
</script>
