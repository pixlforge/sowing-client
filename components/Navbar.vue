<template>
  <div class="h-80 flex items-center">
    <div class="container flex items-center">
      <nuxt-link
        :to="localePath({ name: 'index' })"
        class="mr-30">
        <Logo/>
      </nuxt-link>
      <Searchbar/>
      <ButtonLanguages class="mr-30"/>

      <!-- Register -->
      <nuxt-link
        :to="localePath({ name: 'register' })"
        class="btn btn-primary mr-30">
        <font-awesome-icon
          :icon="['far', 'rocket']"
          class="mr-5"/>
        {{ $t("components.navbar.buttons.register") }}
      </nuxt-link>

      <!-- Login -->
      <nuxt-link
        :to="localePath({ name: 'login' })"
        class="btn btn-default mr-30">
        <font-awesome-icon
          :icon="['far', 'user']"
          class="mr-5"/>
        {{ $t("components.navbar.buttons.login") }}
      </nuxt-link>
      <ButtonCart/>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import Searchbar from "@/components/Searchbar";
import Button from "@/components/buttons/Button";
import ButtonCart from "@/components/buttons/ButtonCart";
import ButtonLanguages from "@/components/buttons/ButtonLanguages";

export default {
  components: {
    Logo,
    Searchbar,
    Button,
    ButtonCart,
    ButtonLanguages
  }
};
</script>

