<template>
  <div>

    <!-- Alert -->
    <Alert/>

    <!-- Navbar -->
    <Navbar/>

    <!-- Header -->
    <Header
      :title="$t('pages.account.title')"
      :description="$t('pages.account.description')"
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
                :label="$t('pages.account.dashboard.title')"
                route="account-dashboard"
                icon="home"
              />
              <SideMenuItem
                :label="$t('pages.account.profile.title')"
                route="account-profile"
                icon="user"
              />
              <SideMenuItem
                :label="$t('pages.account.password.title')"
                route="account-password"
                icon="shield-alt"
              />
              <SideMenuItem
                :label="$t('pages.account.addresses.titles.index')"
                route="account-addresses"
                icon="address-book"
              />
              <SideMenuItem
                :label="$t('pages.account.payment_methods.titles.index')"
                route="account-payment-methods"
                icon="credit-card"
              />
            </SideMenuList>
          </SideMenu>

          <!-- Page content -->
          <section class="w-full lg:w-3/4 xl:w-4/5 mt-72 lg:mt-0">
            <nuxt/>
          </section>
        </div>
      </ContentSection>
    </main>

    <!-- Footer -->
    <Footer/>

    <!-- Disclaimer -->
    <Disclaimer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Alert from '@/components/globals/Alert'
import Footer from '@/components/footer/Footer'
import Header from '@/components/headers/Header'
import SideMenu from '@/components/menus/SideMenu'
import Disclaimer from '@/components/footer/Disclaimer'
import ContentSection from '@/components/ContentSection'
import SideMenuList from '@/components/menus/SideMenuList'
import SideMenuItem from '@/components/menus/SideMenuItem'

export default {
  components: {
    Navbar,
    Alert,
    Footer,
    Header,
    SideMenu,
    Disclaimer,
    ContentSection,
    SideMenuList,
    SideMenuItem
  }
}
</script>
