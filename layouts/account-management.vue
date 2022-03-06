<template>
  <div>
    <!-- Alert -->
    <Alert />

    <!-- Navbar -->
    <Navbar />

    <!-- Header -->
    <Header
      :title="$t('account.title')"
      :description="$t('account.description')"
    />

    <!-- Main -->
    <main class="bg-gray-100">
      <ContentSection>
        <!-- Content -->
        <div class="w-full flex flex-wrap">
          <!-- Side menu -->
          <SideMenu>
            <SideMenuList>
              <SideMenuItem
                :label="$t('account.dashboard.title')"
                route="account-dashboard"
                icon="home"
              />
              <SideMenuItem
                :label="$t('account.profile.title')"
                route="account-profile"
                icon="user"
              />
              <SideMenuItem
                :label="$t('account.password.title')"
                route="account-password"
                icon="shield-alt"
              />
              <SideMenuItem
                :label="$t('account.addresses.titles.index')"
                route="account-addresses"
                icon="address-book"
              />
              <SideMenuItem
                :label="$t('account.payment_methods.titles.index')"
                route="account-payment-methods"
                icon="credit-card"
              />
            </SideMenuList>
          </SideMenu>

          <!-- Page content -->
          <section class="w-full lg:w-3/4 xl:w-4/5 mt-72 lg:mt-0">
            <Nuxt />
          </section>
        </div>
      </ContentSection>
    </main>

    <!-- Footer -->
    <Footer />

    <!-- Disclaimer -->
    <FooterDisclaimer />
  </div>
</template>

<script>
import Alert from '@/components/globals/Alert'
import ContentSection from '@/components/globals/ContentSection'
import Disclaimer from '@/components/footer/Disclaimer'
import Footer from '@/components/footer/Footer'
import Header from '@/components/headers/Header'
import Navbar from '@/components/globals/Navbar'
import SideMenu from '@/components/menus/SideMenu'
import SideMenuItem from '@/components/menus/SideMenuItem'
import SideMenuList from '@/components/menus/SideMenuList'

export default {
  components: {
    Alert,
    ContentSection,
    Disclaimer,
    Footer,
    Header,
    Navbar,
    SideMenu,
    SideMenuItem,
    SideMenuList,
  },
}
</script>
