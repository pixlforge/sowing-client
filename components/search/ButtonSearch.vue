<template>
  <nuxt-link
    :to="localePath({ name: 'search' })"
    :class="btnTheme"
    class="button__round">
    <font-awesome-icon
      :icon="['far', 'search']"
      class="button__icon--large"/>
  </nuxt-link>
</template>

<script>
import theming from "@/mixins/theming";

export default {
  mixins: [theming]
}
</script>
