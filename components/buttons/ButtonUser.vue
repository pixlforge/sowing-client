<template>
  <button class="dropdown-parent btn flex justify-center items-center px-10 md:px-20">
    <font-awesome-icon
      :icon="['far', 'user']"
      class="text-18 mr-10"/>
    {{ username }}
    <ul class="dropdown-child leading-normal">

      <!-- Orders -->
      <li>
        <nuxt-link
          :to="localePath({ name: 'orders' })"
          class="link-dropdown">
          {{ $t("pages.orders.title") }}
        </nuxt-link>
      </li>

      <!-- Shop -->
      <li>
        <nuxt-link
          :to="localePath({ name: 'shop' })"
          class="link-dropdown">
          {{ $t("pages.shop.title") }}
        </nuxt-link>
      </li>

      <!-- Shop create -->
      <li class="mt-10">
        <nuxt-link
          :to="localePath({ name: 'shop-creator-terms' })"
          class="btn btn-secondary nowrap">
          <font-awesome-icon
            :icon="['far', 'store']"
            class="mr-10"/>
          Créer une boutique
        </nuxt-link>
      </li>

      <hr class="border border-green rounded-full -mx-10 my-20">

      <!-- Logout -->
      <li>
        <a
          class="link-dropdown"
          @click="logout">
          {{ $t("components.navbar.user.logout") }}
        </a>
      </li>
    </ul>
  </button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    username() {
      return this.$auth.user.name;
    }
  },
  methods: {
    ...mapActions({
      emptyCart: "cart/emptyCart"
    }),
    async logout() {
      this.$toast.success(`${this.$t("toasts.logged_out")}`);
      this.$router.push(this.localePath({ name: "index" }));
      await this.$auth.logout();
      await this.emptyCart();
    }
  }
};
</script>

