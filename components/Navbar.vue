<template>
  <div class="container flex justify-between items-center px-20 py-30">

    <!-- Logo -->
    <nuxt-link :to="localePath({ name: 'index' })">
      <Logo/>
    </nuxt-link>

    <div class="flex">
      
      <!-- Languages -->
      <ButtonLanguages class="mr-20"/>

      <!-- Login -->
      <nuxt-link
        v-if="!loggedIn"
        :to="localePath({ name: 'login' })"
        class="btn btn-default w-full md:w-auto text-center mr-20">
        {{ $t("buttons.login") }}
      </nuxt-link>

      <!-- Register -->
      <nuxt-link
        v-if="!loggedIn"
        :to="localePath({ name: 'register' })"
        class="btn btn-secondary w-full md:w-auto text-center mr-20">
        <font-awesome-icon
          :icon="['far', 'rocket']"
          class="mr-5"/>
        {{ $t("buttons.register") }}
      </nuxt-link>
        
      <!-- User -->
      <ButtonUser
        v-if="loggedIn"
        class="w-full md:w-auto text-center mr-20"/>

      <!-- Searchbar -->
      <!-- <Searchbar class="w-full md:w-350 lg:w-250 xl:w-350 md:order-1 mt-20 md:mt-0"/> -->

      <!-- Search page link -->
      <ButtonSearch class="mr-20"/>

      <!-- Cart page link -->
      <ButtonCart class=""/>
    </div>

  </div>
</template>

<script>
import Logo from "@/components/Logo";
import Button from "@/components/buttons/Button";
import Searchbar from "@/components/search/Searchbar";
import ButtonCart from "@/components/buttons/ButtonCart";
import ButtonUser from "@/components/buttons/ButtonUser";
import ButtonSearch from "@/components/search/ButtonSearch";
import ButtonLanguages from "@/components/buttons/ButtonLanguages";

export default {
  components: {
    Logo,
    Button,
    Searchbar,
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
