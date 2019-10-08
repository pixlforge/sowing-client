<template>
  <nav class="container flex flex-col md:flex-row items-center px-20 py-30">

    <div class="w-full flex justify-between items-center">

      <!-- Logo -->
      <nuxt-link :to="{ name: 'index' }">
        <AppLogo class="w-48"/>
      </nuxt-link>

      <div class="flex md:hidden">

        <!-- Search page link -->
        <AppButtonSearch/>

        <!-- Cart page link -->
        <AppButtonCart class="ml-10"/>
      </div>
    </div>

    <div class="w-full md:flex-1 flex justify-between md:justify-end mt-36 md:mt-0">

      <!-- Languages -->
      <AppButtonLanguages/>

      <!-- Login -->
      <AppButtonLinkSecondary
        v-if="!loggedIn"
        :route="{ name: 'login' }"
        class="ml-10 lg:ml-20"
      >
        {{ $t("buttons.login") }}
      </AppButtonLinkSecondary>

      <!-- Register -->
      <AppButtonLinkPrimary
        v-if="!loggedIn"
        :route="{ name: 'register' }"
        icon="rocket"
        color="pink-dark"
        class="hidden md:block ml-10 lg:ml-20"
      >
        {{ $t("buttons.register") }}
      </AppButtonLinkPrimary>

      <!-- Menu -->
      <AppMenu
        v-if="loggedIn"
        class="ml-10 lg:ml-20"
      />

      <div class="hidden md:flex">

        <!-- Search page link -->
        <AppButtonSearch class="ml-10 lg:ml-20"/>

        <!-- Cart page link -->
        <AppButtonCart class="ml-10 lg:ml-20"/>
      </div>
    </div>

  </nav>
</template>

<script>
import AppLogo from '@/components/AppLogo'
import AppMenu from '@/components/menus/AppMenu'
import AppButtonCart from '@/components/buttons/AppButtonCart'
import AppButtonSearch from '@/components/buttons/AppButtonSearch'
import AppButtonLanguages from '@/components/buttons/AppButtonLanguages'
import AppButtonLinkPrimary from '@/components/buttons/AppButtonLinkPrimary'
import AppButtonLinkSecondary from '@/components/buttons/AppButtonLinkSecondary'

export default {
  components: {
    AppLogo,
    AppMenu,
    AppButtonCart,
    AppButtonSearch,
    AppButtonLanguages,
    AppButtonLinkPrimary,
    AppButtonLinkSecondary
  },
  computed: {
    loggedIn() {
      return this.$auth.loggedIn
    }
  }
}
</script>
