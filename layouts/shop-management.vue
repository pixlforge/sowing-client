<template>
  <div>

    <!-- Alert -->
    <Alert/>

    <!-- Navbar -->
    <Navbar/>

    <!-- Shop cover image -->
    <ShopCover
      v-if="shopCover"
      :shop-cover="shopCover"
    />

    <!-- Header -->
    <Header
      v-if="shopExists"
      :class="bgTheme"
      :title="shopName"
      :description="shop.description_short[locale]"
    >
      <HeaderList>
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
      </HeaderList>
    </Header>

    <!-- Main -->
    <main class="bg-gray-100">

      <!-- User owns a shop -->
      <template v-if="userHasShop">
        <ContentSection>

          <!-- Content -->
          <div class="w-full flex">

            <!-- Side menu -->
            <SideMenu>
              <SideMenuList>
                <SideMenuItem
                  :label="$t('pages.shop.management.dashboard.title')"
                  route="shop-management-dashboard"
                  icon="home"
                />
              </SideMenuList>
              <SideMenuTitle>
                {{ $t('side_menu.shop') }}
              </SideMenuTitle>
              <SideMenuList>
                <SideMenuItem
                  :label="$t('pages.shop.management.details.title')"
                  route="shop-management-details"
                  icon="cog"
                />
                <SideMenuItem
                  :label="$t('pages.shop.management.theme.title')"
                  route="shop-management-theme"
                  icon="palette"
                />
              </SideMenuList>
              <SideMenuTitle>
                {{ $t('side_menu.products') }}
              </SideMenuTitle>
              <SideMenuList>
                <SideMenuItem
                  :label="$t('products.management.index.title')"
                  route="shop-management-products"
                  icon="box-full"
                />
              </SideMenuList>
            </SideMenu>

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
import Alert from '@/components/globals/Alert'
import AppFooter from '@/components/footer/AppFooter'
import Header from '@/components/headers/Header'
import SideMenu from '@/components/menus/SideMenu'
import ShopCover from '@/components/shops/ShopCover'
import AppDisclaimer from '@/components/footer/AppDisclaimer'
import ContentSection from '@/components/ContentSection'
import HeaderList from '@/components/headers/HeaderList'
import SideMenuList from '@/components/menus/SideMenuList'
import SideMenuItem from '@/components/menus/SideMenuItem'
import SideMenuTitle from '@/components/menus/SideMenuTitle'
import AppButtonLinkPrimary from '@/components/buttons/AppButtonLinkPrimary'

export default {
  components: {
    Splash,
    Navbar,
    Alert,
    AppFooter,
    Header,
    SideMenu,
    ShopCover,
    AppDisclaimer,
    ContentSection,
    HeaderList,
    SideMenuList,
    SideMenuItem,
    SideMenuTitle,
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
