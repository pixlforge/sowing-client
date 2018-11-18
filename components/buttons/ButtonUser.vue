<template>
  <button class="dropdown-parent btn shadow flex justify-center items-center px-10 md:px-20">
    <font-awesome-icon
      :icon="['far', 'user']"
      class="text-18 mr-10"/>
    {{ username }}
    <ul class="dropdown-child">
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
export default {
  computed: {
    username() {
      return "Raffaella Gigante";
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout();
    }
  }
};
</script>

