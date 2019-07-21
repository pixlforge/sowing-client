<template>
  <div class="dropdown__parent">
    <button
      ref="dropdownMenu"
      class="button button__default button--navbar"
      @click.prevent="toggleDropdown">
      {{ username }}
      <font-awesome-icon
        :icon="['fas', 'caret-down']"
        class="button__caret"/>
    </button>

    <ul
      :class="{ 'block': dropdownIsOpen }"
      class="dropdown__child">

      <!-- Orders -->
      <li>
        <nuxt-link
          :to="localePath({ name: 'orders' })"
          class="dropdown__link">
          <font-awesome-icon
            :icon="['far', 'shipping-fast']"
            class="mr-5"/>
          {{ $t("pages.orders.title") }}
        </nuxt-link>
      </li>

      <!-- Shop -->
      <li v-if="userHasShop">
        <nuxt-link
          :to="localePath({ name: 'shop-management-dashboard' })"
          class="dropdown__link">
          <font-awesome-icon
            :icon="['far', 'store']"
            class="mr-5"/>
          {{ $t("pages.shop.title") }}
        </nuxt-link>
      </li>

      <!-- Shop create -->
      <li
        v-else
        class="mt-10">
        <nuxt-link
          :to="localePath({ name: 'shop-creator-terms' })"
          class="button button__secondary whitespace-no-wrap">
          <font-awesome-icon
            :icon="['far', 'store']"
            class="mr-10"/>
          {{ $t("buttons.create_my_shop") }}
        </nuxt-link>
      </li>

      <hr class="dropdown__divider">

      <!-- Logout -->
      <li>
        <a
          class="dropdown__link text-pink-600"
          @click="logout">
          <font-awesome-icon
            :icon="['far', 'sign-out']"
            class="mr-5"/>
          {{ $t("components.navbar.user.logout") }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      dropdownIsOpen: false
    };
  },
  computed: {
    ...mapGetters({
      userHasShop: "userHasShop"
    }),
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
