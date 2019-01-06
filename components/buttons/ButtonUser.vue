<template>
  <div class="dropdown-parent">
    <button
      ref="dropdownMenu"
      class="btn flex justify-center items-center px-10 md:px-20"
      @click.prevent="toggleDropdown">
      <font-awesome-icon
        :icon="['far', 'user']"
        class="text-18 mr-10"/>
      {{ username }}
    </button>

    <ul
      :class="{ 'block': dropdownIsOpen }"
      class="dropdown-child leading-normal">

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

      <hr class="border border-green rounded-full my-20">

      <!-- Logout -->
      <li>
        <a
          class="link-dropdown"
          @click="logout">
          {{ $t("components.navbar.user.logout") }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      dropdownIsOpen: false
    };
  },
  computed: {
    username() {
      return this.$auth.user.name;
    }
  },
  mounted() {
    const escapeHandler = event => {
      if (event.key === "Escape" && this.dropdownIsOpen) {
        this.dropdownIsOpen = false;
      }
    };
    document.addEventListener("keydown", escapeHandler);

    const clickHandler = event => {
      let element = this.$refs.dropdownMenu;
      let target = event.target;
      if (element !== target && !element.contains(target)) {
        this.dropdownIsOpen = false;
      }
    };
    document.addEventListener("click", clickHandler);

    this.$once("hook:destroyed", () => {
      document.removeEventListener("keydown", escapeHandler);
      document.removeEventListener("click", clickHandler);
    });
  },
  methods: {
    ...mapActions({
      emptyCart: "cart/emptyCart"
    }),
    toggleDropdown() {
      this.dropdownIsOpen = !this.dropdownIsOpen;
    },
    async logout() {
      this.$toast.success(`${this.$t("toasts.logged_out")}`);
      this.$router.push(this.localePath({ name: "index" }));
      await this.$auth.logout();
      await this.emptyCart();
    }
  }
};
</script>
