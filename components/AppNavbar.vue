<template>
  <nav class="container flex justify-between items-center px-20 py-30">

    <!-- Logo -->
    <nuxt-link :to="localePath({ name: 'index' })">
      <AppLogo class="w-48"/>
    </nuxt-link>

    <div class="flex -mx-10">

      <!-- Languages -->
      <AppButtonLanguages class="mx-10"/>

      <!-- Login -->
      <AppButtonLinkSecondary
        v-if="!loggedIn"
        :to="localePath({ name: 'login' })"
        class="mx-10">
        {{ $t("buttons.login") }}
      </AppButtonLinkSecondary>

      <!-- Register -->
      <AppButtonLinkPrimary
        v-if="!loggedIn"
        :to="localePath({ name: 'register' })"
        icon="rocket"
        color="pink-dark"
        class="mx-10">
        {{ $t("buttons.register") }}
      </AppButtonLinkPrimary>

      <!-- Menu -->
      <AppButtonMenu
        v-if="loggedIn"
        class="mx-10"/>

      <!-- Search page link -->
      <AppButtonSearch class="mx-10"/>

      <!-- Cart page link -->
      <AppButtonCart class="mx-10"/>
    </div>

  </nav>
</template>

<script>
import AppLogo from '@/components/AppLogo'
import AppButtonCart from '@/components/buttons/AppButtonCart'
import AppButtonMenu from '@/components/buttons/AppButtonMenu'
import AppButtonSearch from '@/components/buttons/AppButtonSearch'
import AppButtonLanguages from '@/components/buttons/AppButtonLanguages'
import AppButtonLinkPrimary from '@/components/buttons/AppButtonLinkPrimary'
import AppButtonLinkSecondary from '@/components/buttons/AppButtonLinkSecondary'

export default {
  components: {
    AppLogo,
    AppButtonCart,
    AppButtonMenu,
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
