<template>
  <nav class="navbar__container container">

    <!-- Logo -->
    <nuxt-link :to="localePath({ name: 'index' })">
      <Logo/>
    </nuxt-link>

    <div class="navbar__menu">
      
      <!-- Languages -->
      <ButtonLanguages class="navbar__languages"/>

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
      <ButtonUser
        v-if="loggedIn"
        class="mr-20"/>

      <!-- Search page link -->
      <ButtonSearch class="mr-20"/>

      <!-- Cart page link -->
      <ButtonCart/>
    </div>

  </nav>
</template>

<script>
import Logo from "@/components/Logo";
import ButtonCart from "@/components/buttons/ButtonCart";
import ButtonUser from "@/components/buttons/ButtonUser";
import ButtonSearch from "@/components/search/ButtonSearch";
import ButtonLanguages from "@/components/buttons/ButtonLanguages";

export default {
  components: {
    Logo,
    ButtonCart,
    ButtonUser,
    ButtonSearch,
    ButtonLanguages
  },
  computed: {
    loggedIn() {
      return this.$auth.loggedIn;
    }
  }
};
</script>
