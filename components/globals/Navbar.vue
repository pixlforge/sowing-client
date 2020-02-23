<template>
  <nav class="container flex flex-col md:flex-row items-center px-20 py-30">

    <div class="w-full flex justify-between items-center">

      <!-- Logo -->
      <nuxt-link :to="{ name: 'index' }">
        <Logo class="w-48"/>
      </nuxt-link>

      <div class="flex md:hidden">

        <!-- Search page link -->
        <ButtonSearch/>

        <!-- Cart page link -->
        <ButtonCart class="ml-10"/>
      </div>
    </div>

    <div class="w-full md:flex-1 flex justify-between md:justify-end mt-36 md:mt-0">

      <!-- Languages -->
      <ButtonLanguages/>

      <!-- Login -->
      <ButtonLinkSecondary
        v-if="!loggedIn"
        :route="{ name: 'auth-login' }"
        class="ml-10 lg:ml-20"
      >
        {{ $t("buttons.login") }}
      </ButtonLinkSecondary>

      <!-- Register -->
      <ButtonLinkPrimary
        v-if="!loggedIn"
        :route="{ name: 'auth-register' }"
        icon="rocket"
        color="pink-dark"
        class="hidden md:block ml-10 lg:ml-20"
      >
        {{ $t("buttons.register") }}
      </ButtonLinkPrimary>

      <!-- Menu -->
      <Menu
        v-if="loggedIn"
        class="ml-10 lg:ml-20"
      />

      <div class="hidden md:flex">

        <!-- Search page link -->
        <ButtonSearch class="ml-10 lg:ml-20"/>

        <!-- Cart page link -->
        <ButtonCart class="ml-10 lg:ml-20"/>
      </div>
    </div>

  </nav>
</template>

<script>
import ButtonCart from '@/components/buttons/ButtonCart'
import ButtonLanguages from '@/components/buttons/ButtonLanguages'
import ButtonLinkPrimary from '@/components/buttons/ButtonLinkPrimary'
import ButtonLinkSecondary from '@/components/buttons/ButtonLinkSecondary'
import ButtonSearch from '@/components/buttons/ButtonSearch'
import Logo from '@/components/globals/Logo'
import Menu from '@/components/menus/Menu'

export default {
  components: {
    ButtonCart,
    ButtonLanguages,
    ButtonLinkPrimary,
    ButtonLinkSecondary,
    ButtonSearch,
    Logo,
    Menu
  },
  computed: {
    loggedIn() {
      return this.$auth.loggedIn
    }
  }
}
</script>
