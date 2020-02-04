<template>
  <div>

    <!-- Alert -->
    <AppAlert/>

    <!-- Navbar -->
    <Navbar/>

    <!-- Header -->
    <AppHeader
      :title="$t('pages.account.title')"
      :description="$t('pages.account.description')"
    />

    <!-- Main -->
    <main class="bg-gray-100">
      <ContentSection>

        <!-- Content -->
        <div class="w-full flex flex-wrap">

          <!-- Side menu -->
          <AppSideMenu>
            <AppSideMenuList>
              <AppSideMenuItem
                :label="$t('pages.account.dashboard.title')"
                route="account-dashboard"
                icon="home"
              />
              <AppSideMenuItem
                :label="$t('pages.account.profile.title')"
                route="account-profile"
                icon="user"
              />
              <AppSideMenuItem
                :label="$t('pages.account.password.title')"
                route="account-password"
                icon="shield-alt"
              />
              <AppSideMenuItem
                :label="$t('pages.account.addresses.titles.index')"
                route="account-addresses"
                icon="address-book"
              />
              <AppSideMenuItem
                :label="$t('pages.account.payment_methods.titles.index')"
                route="account-payment-methods"
                icon="credit-card"
              />
            </AppSideMenuList>
          </AppSideMenu>

          <!-- Page content -->
          <section class="w-full lg:w-3/4 xl:w-4/5 mt-72 lg:mt-0">
            <nuxt/>
          </section>
        </div>
      </ContentSection>
    </main>

    <!-- Footer -->
    <AppFooter/>

    <!-- Disclaimer -->
    <AppDisclaimer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import AppAlert from '@/components/globals/AppAlert'
import AppFooter from '@/components/footer/AppFooter'
import AppHeader from '@/components/headers/AppHeader'
import AppSideMenu from '@/components/menus/AppSideMenu'
import AppDisclaimer from '@/components/footer/AppDisclaimer'
import ContentSection from '@/components/ContentSection'
import AppSideMenuList from '@/components/menus/AppSideMenuList'
import AppSideMenuItem from '@/components/menus/AppSideMenuItem'

export default {
  components: {
    Navbar,
    AppAlert,
    AppFooter,
    AppHeader,
    AppSideMenu,
    AppDisclaimer,
    ContentSection,
    AppSideMenuList,
    AppSideMenuItem
  }
}
</script>
