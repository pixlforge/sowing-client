<template>
  <div class="container flex flex-wrap md:justify-center items-center px-20 py-30">

    <!-- Logo -->
    <nuxt-link
      :to="localePath({ name: 'index' })"
      class="md:order-0 md:mr-20 xl:mr-30">
      <Logo/>
    </nuxt-link>

    <!-- Languages -->
    <ButtonLanguages class="ml-auto md:order-2 mr-30 lg:mr-20 xl:mr-30"/>

    <!-- Cart -->
    <ButtonCart class="md:order-3 lg:order-5"/>

    <!-- Searchbar -->
    <Searchbar class="w-full md:w-350 lg:w-250 xl:w-350 md:order-1 mt-20 md:mt-0"/>

    <!-- Register -->
    <nuxt-link
      v-if="!loggedIn"
      :to="localePath({ name: 'register' })"
      class="btn btn-primary w-full md:w-auto text-center md:order-4 xl:order-3 md:mr-20 xl:mr-30 mt-20 lg:mt-0">
      <font-awesome-icon
        :icon="['far', 'rocket']"
        class="mr-5"/>
      {{ $t("buttons.register") }}
    </nuxt-link>
      
    <!-- Login -->
    <nuxt-link
      v-if="!loggedIn"
      :to="localePath({ name: 'login' })"
      class="btn w-full md:w-auto text-center md:order-5 lg:order-4 lg:mr-20 xl:mr-30 mt-10 md:mt-20 lg:mt-0">
      <font-awesome-icon
        :icon="['far', 'user']"
        class="mr-5"/>
      {{ $t("buttons.login") }}
    </nuxt-link>

    <!-- User -->
    <ButtonUser
      v-if="loggedIn"
      class="w-full md:w-auto text-center md:order-5 lg:order-4 lg:mr-20 xl:mr-30 mt-10 md:mt-20 lg:mt-0"/>

  </div>
</template>

<script>
import Logo from "@/components/Logo";
import Searchbar from "@/components/Searchbar";
import Button from "@/components/buttons/Button";
import ButtonCart from "@/components/buttons/ButtonCart";
import ButtonUser from "@/components/buttons/ButtonUser";
import ButtonLanguages from "@/components/buttons/ButtonLanguages";

export default {
  components: {
    Logo,
    Searchbar,
    Button,
    ButtonCart,
    ButtonUser,
    ButtonLanguages
  },
  computed: {
    loggedIn() {
      return this.$auth.loggedIn;
    }
  }
};
</script>
