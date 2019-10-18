<template>
  <div class="antialiased text-gray-800 overflow-hidden">

    <!-- Alert -->
    <AppAlert/>

    <!-- Navbar -->
    <AppNavbar/>

    <!-- Header -->
    <AppHeader
      :title="$t('pages.account.title')"
      :description="$t('pages.account.description')"
    />

    <!-- Main -->
    <main class="bg-gray-100">
      <AppContentSection>

        <!-- Content -->
        <div class="w-full flex flex-wrap">

          <!-- Side menu -->
          <AppSideMenu>
            <AppSideMenuList>
              <AppSideMenuItem
                :label="$t('pages.account.dashboard.title')"
                route="account-dashboard"
              />
              <AppSideMenuItem
                :label="$t('pages.account.profile.title')"
                route="account-profile"
              />
              <AppSideMenuItem
                :label="$t('pages.account.password.title')"
                route="account-password"
              />
              <AppSideMenuItem
                :label="$t('pages.account.addresses.titles.index')"
                route="account-addresses"
              />
              <AppSideMenuItem
                :label="$t('pages.account.payment_methods.titles.index')"
                route="account-payment-methods"
              />
            </AppSideMenuList>
          </AppSideMenu>

          <!-- Page content -->
          <section class="w-full lg:w-3/4 xl:w-4/5 mt-72 lg:mt-0">
            <nuxt/>
          </section>
        </div>
      </AppContentSection>
    </main>

    <!-- Footer -->
    <AppFooter/>

    <!-- Disclaimer -->
    <AppDisclaimer/>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar'
import AppAlert from '@/components/globals/AppAlert'
import AppFooter from '@/components/footer/AppFooter'
import AppHeader from '@/components/headers/AppHeader'
import AppSideMenu from '@/components/menus/AppSideMenu'
import AppDisclaimer from '@/components/footer/AppDisclaimer'
import AppContentSection from '@/components/AppContentSection'
import AppSideMenuList from '@/components/menus/AppSideMenuList'
import AppSideMenuItem from '@/components/menus/AppSideMenuItem'

export default {
  components: {
    AppNavbar,
    AppAlert,
    AppFooter,
    AppHeader,
    AppSideMenu,
    AppDisclaimer,
    AppContentSection,
    AppSideMenuList,
    AppSideMenuItem
  }
}
</script>
