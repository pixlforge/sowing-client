<template>
  <div class="antialiased text-gray-800 overflow-hidden">

    <!-- Alert -->
    <AppAlert/>

    <!-- Navbar -->
    <AppNavbar/>

    <!-- Categories -->
    <AppCategoryBar/>

    <!-- Header -->
    <AppHeader
      :title="$t('pages.account.title')"
    />

    <main>
      <AppContentSection>

        <!-- Content -->
        <div class="w-full flex mt-96">

          <!-- Side menu -->
          <aside class="w-1/5 pr-30">
            <AppSideMenu>
              <AppSideMenuItem
                :label="$t('pages.account.dashboard.title')"
                route="account-dashboard"
              />
              <AppSideMenuItem
                :label="$t('pages.account.details.title')"
                route="account-details"
              />
              <AppSideMenuItem
                :label="$t('pages.account.password.title')"
                route="account-password"
              />
            </AppSideMenu>
          </aside>

          <!-- Page content -->
          <section class="w-4/5 pl-30">
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
import AppSideMenuItem from '@/components/menus/AppSideMenuItem'
import AppCategoryBar from '@/components/categories/AppCategoryBar'

export default {
  components: {
    AppNavbar,
    AppAlert,
    AppFooter,
    AppHeader,
    AppSideMenu,
    AppDisclaimer,
    AppContentSection,
    AppSideMenuItem,
    AppCategoryBar
  }
}
</script>
