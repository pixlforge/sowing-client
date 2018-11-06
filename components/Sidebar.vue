<template>
  <div class="flex flex-col items-center px-40">
    <nuxt-link
      :to="localePath({ name: 'index' })"
      class="w-100 h-100 bg-white rounded-full flex justify-center items-center mt-80">
      <Logo class="w-80"/>
    </nuxt-link>
    <div class="w-full">

      <nuxt-link
        :to="localePath({ name: 'index' })"
        class="block text-base font-semibold text-white no-underline mt-80">
        <font-awesome-icon
          :icon="['fas', 'long-arrow-alt-left']"
          class="mr-10"/>
        Retour au site
      </nuxt-link>
      
      <ul class="list-reset text-22 font-semibold mt-80">

        <!-- Users -->
        <li class="my-10">
          <nuxt-link
            :to="localePath({ name: 'admin' })"
            class="text-white no-underline">
            <font-awesome-icon
              :icon="['fas', 'home']"
              class="mr-10"/>
            <span>Tableau de bord</span>
          </nuxt-link>
        </li>

        <!-- Users -->
        <li class="my-10">
          <nuxt-link
            :to="localePath({ name: 'admin-users' })"
            class="text-white no-underline">
            <font-awesome-icon
              :icon="['fas', 'users']"
              class="mr-10"/>
            <span>Utilisateurs</span>
          </nuxt-link>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo";

export default {
  components: {
    Logo
  }
};
</script>
