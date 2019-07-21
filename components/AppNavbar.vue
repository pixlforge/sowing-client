<template>
  <nav class="navbar__container container">

    <!-- Logo -->
    <nuxt-link :to="localePath({ name: 'index' })">
      <AppLogo/>
    </nuxt-link>

    <div class="navbar__menu">

      <!-- Languages -->
      <AppButtonLanguages class="navbar__languages"/>

      <!-- Login -->
      <nuxt-link
        v-if="!loggedIn"
        :to="localePath({ name: 'login' })"
        class="button button__default mr-20">
        {{ $t("buttons.login") }}
      </nuxt-link>

      <!-- Register -->
      <nuxt-link
        v-if="!loggedIn"
        :to="localePath({ name: 'register' })"
        class="button button__secondary mr-20">
        <font-awesome-icon
          :icon="['far', 'rocket']"
          class="mr-5"/>
        {{ $t("buttons.register") }}
      </nuxt-link>

      <!-- User -->
      <AppButtonUser
        v-if="loggedIn"
        class="mr-20"/>

      <!-- Search page link -->
      <AppButtonSearch class="mr-20"/>

      <!-- Cart page link -->
      <AppButtonCart/>
    </div>

  </nav>
</template>

<script>
import AppLogo from '@/components/AppLogo';
import AppButtonCart from '@/components/buttons/AppButtonCart';
import AppButtonUser from '@/components/buttons/AppButtonUser';
import AppButtonSearch from '@/components/buttons/AppButtonSearch';
import AppButtonLanguages from '@/components/buttons/AppButtonLanguages';

export default {
  components: {
    AppLogo,
    AppButtonCart,
    AppButtonUser,
    AppButtonSearch,
    AppButtonLanguages
  },
  computed: {
    loggedIn() {
      return this.$auth.loggedIn;
    }
  }
};
</script>
