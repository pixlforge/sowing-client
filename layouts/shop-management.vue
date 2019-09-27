<template>
  <div class="antialiased text-gray-800 overflow-hidden">

    <!-- Alert -->
    <AppAlert/>

    <!-- Navbar -->
    <AppNavbar/>

    <!-- Categories -->
    <AppCategoryBar/>

    <!-- Shop cover image -->
    <AppShopCover
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
    <main>

      <!-- User owns a shop -->
      <template v-if="userHasShop">
        <AppContentSection>

          <!-- Content -->
          <div class="w-full flex mt-96">

            <!-- Side menu -->
            <aside class="w-1/4">
              <AppSideMenu>
                <AppSideMenuItem
                  label="Tableau de bord"
                  route="shop-management-dashboard"
                />
                <AppSideMenuItem
                  label="Détails"
                  route="shop-management-details"
                />
                <AppSideMenuItem
                  label="Thème"
                  route="shop-management-theme"
                />
              </AppSideMenu>
            </aside>

            <!-- Page content -->
            <section class="w-full lg:w-3/4 lg:pl-60 mt-72 lg:mt-0">
              <nuxt/>
            </section>
          </div>
        </AppContentSection>
      </template>

      <!-- User does not own a shop -->
      <template v-else>
        <AppContentSection class="max-w-800">
          <AppSplash
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
          </AppSplash>

          <!-- Shop creation link -->
          <AppButtonLinkPrimary
            :to="localePath({ name: 'shop-creator-terms' })"
            icon="rocket"
            size="large"
          >
            {{ $t("buttons.create_my_shop") }}
          </AppButtonLinkPrimary>
        </AppContentSection>
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

import AppSplash from '@/components/AppSplash'
import AppNavbar from '@/components/AppNavbar'
import AppAlert from '@/components/globals/AppAlert'
import AppFooter from '@/components/footer/AppFooter'
import AppHeader from '@/components/headers/AppHeader'
import AppSideMenu from '@/components/menus/AppSideMenu'
import AppShopCover from '@/components/shops/AppShopCover'
import AppDisclaimer from '@/components/footer/AppDisclaimer'
import AppContentSection from '@/components/AppContentSection'
import AppHeaderList from '@/components/headers/AppHeaderList'
import AppSideMenuItem from '@/components/menus/AppSideMenuItem'
import AppCategoryBar from '@/components/categories/AppCategoryBar'
import AppButtonLinkPrimary from '@/components/buttons/AppButtonLinkPrimary'

export default {
  components: {
    AppSplash,
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
