<template>
  <div
    :style="`background-color: ${theme.value}`"
    class="w-60 h-60 bg-green rounded-lg flex justify-center items-center cursor-pointer"
    @click.prevent="setShopTheme(theme.value)">
    <font-awesome-icon
      v-if="theme.value === shopTheme"
      :icon="['far', 'check-circle']"
      class="text-24 text-white"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    theme: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      shopTheme: "shop/shopTheme"
    })
  },
  methods: {
    ...mapActions({
      setShopTheme: "shop/setShopTheme"
    })
  }
};
</script>

