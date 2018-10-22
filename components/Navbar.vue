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
      <Button
        primary
        class="mr-30">
        Inscription / Créer une boutique
      </Button>
      <Button
        default
        class="mr-30">
        Connexion
      </Button>
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

