<template>
  <nuxt-link
    :to="localePath({ name: 'cart' })"
    :class="btnTheme"
    class="button__round">
    <font-awesome-icon
      :icon="['far', 'shopping-cart']"
      class="button__icon--large"/>
    <div class="button__badge">
      {{ count }}
    </div>
  </nuxt-link>
</template>

<script>
import { mapGetters } from 'vuex';
import theming from '@/mixins/theming';

export default {
  mixins: [theming],
  computed: {
    ...mapGetters({
      count: 'cart/count'
    })
  }
};
</script>
