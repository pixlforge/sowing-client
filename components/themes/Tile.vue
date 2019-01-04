<template>
  <div
    :class="bgTheme"
    class="w-60 h-60 rounded-lg flex justify-center items-center cursor-pointer"
    @click.prevent="setShopTheme(theme)">
    <font-awesome-icon
      v-if="theme === shopTheme"
      :icon="['far', 'check-circle']"
      class="text-24 text-white"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    theme: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      shopTheme: "shop/shopTheme"
    }),
    bgTheme() {
      return `bg-${this.theme}`;
    }
  },
  methods: {
    ...mapActions({
      setShopTheme: "shop/setShopTheme"
    })
  }
};
</script>

