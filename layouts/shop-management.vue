<template>
  <div>

    <!-- Alert -->
    <AppAlert/>

    <!-- Navbar -->
    <Navbar/>

    <!-- Shop cover image -->
    <ShopCover
      v-if="shopCover"
      :shop-cover="shopCover"
    />

    <!-- Header -->
    <AppHeader
      v-if="shopExists"
      :class="bgTheme"
      :title="shopName"
      :description="shop.description_short[locale]"
    >
      <AppHeaderList>
        <li>
          <font-awesome-icon
            :icon="['far', 'map-marker-alt']"
            class="mr-5"
          />
          {{ shop.postal_code }} {{ shop.city }}
        </li>
        <li
          v-if="shop.country"
          class="ml-20"
        >
          {{ shop.country.name[locale] }}
        </li>
      </AppHeaderList>
    </AppHeader>

    <!-- Main -->
    <main class="bg-gray-100">

      <!-- User owns a shop -->
      <template v-if="userHasShop">
        <ContentSection>

          <!-- Content -->
          <div class="w-full flex">

            <!-- Side menu -->
            <AppSideMenu>
              <AppSideMenuList>
                <AppSideMenuItem
                  :label="$t('pages.shop.management.dashboard.title')"
                  route="shop-management-dashboard"
                  icon="home"
                />
              </AppSideMenuList>
              <AppSideMenuTitle>
                {{ $t('side_menu.shop') }}
              </AppSideMenuTitle>
              <AppSideMenuList>
                <AppSideMenuItem
                  :label="$t('pages.shop.management.details.title')"
                  route="shop-management-details"
                  icon="cog"
                />
                <AppSideMenuItem
                  :label="$t('pages.shop.management.theme.title')"
                  route="shop-management-theme"
                  icon="palette"
                />
              </AppSideMenuList>
              <AppSideMenuTitle>
                {{ $t('side_menu.products') }}
              </AppSideMenuTitle>
              <AppSideMenuList>
                <AppSideMenuItem
                  :label="$t('products.management.index.title')"
                  route="shop-management-products"
                  icon="box-full"
                />
              </AppSideMenuList>
            </AppSideMenu>

            <!-- Page content -->
            <section class="w-full lg:w-3/4 mt-72 lg:mt-0">
              <nuxt/>
            </section>
          </div>
        </ContentSection>
      </template>

      <!-- User does not own a shop -->
      <template v-else>
        <ContentSection class="max-w-800">
          <Splash
            :title="$t('pages.shop.not_created_yet')"
            class="max-w-800"
          >
            <template slot="subtitle">
              {{ $t("pages.shop.creation_cta_line_1") }}
            </template>
            <template slot="illustration">
              <img
                src="~assets/img/under_construction.svg"
                alt="Illustration of a building under construction"
              >
            </template>
          </Splash>

          <!-- Shop creation link -->
          <AppButtonLinkPrimary
            :route="{ name: 'shop-creator-terms' }"
            icon="rocket"
            size="large"
            class="w-full"
          >
            {{ $t("buttons.create_my_shop") }}
          </AppButtonLinkPrimary>
        </ContentSection>
      </template>
    </main>

    <!-- Footer -->
    <AppFooter/>

    <!-- Disclaimer -->
    <AppDisclaimer :class="bgTheme"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import Splash from '@/components/Splash'
import Navbar from '@/components/Navbar'
import AppAlert from '@/components/globals/AppAlert'
import AppFooter from '@/components/footer/AppFooter'
import AppHeader from '@/components/headers/AppHeader'
import AppSideMenu from '@/components/menus/AppSideMenu'
import ShopCover from '@/components/shops/ShopCover'
import AppDisclaimer from '@/components/footer/AppDisclaimer'
import ContentSection from '@/components/ContentSection'
import AppHeaderList from '@/components/headers/AppHeaderList'
import AppSideMenuList from '@/components/menus/AppSideMenuList'
import AppSideMenuItem from '@/components/menus/AppSideMenuItem'
import AppSideMenuTitle from '@/components/menus/AppSideMenuTitle'
import AppButtonLinkPrimary from '@/components/buttons/AppButtonLinkPrimary'

export default {
  components: {
    Splash,
    Navbar,
    AppAlert,
    AppFooter,
    AppHeader,
    AppSideMenu,
    ShopCover,
    AppDisclaimer,
    ContentSection,
    AppHeaderList,
    AppSideMenuList,
    AppSideMenuItem,
    AppSideMenuTitle,
    AppButtonLinkPrimary
  },
  mixins: [theming],
  computed: {
    ...mapGetters({
      shopCover: 'shop/shopCover',
      shopAvatar: 'shop/shopAvatar',
      shopName: 'shop/shopName',
      shopExists: 'shop/shopExists',
      userHasShop: 'userHasShop',
      shop: 'shop/shop',
      locale: 'locale'
    })
  },
  destroyed() {
    this.resetShop()
  },
  methods: {
    ...mapActions({
      resetShop: 'shop/resetShop'
    })
  }
}
</script>
