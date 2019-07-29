<template>
  <nuxt-link
    :to="localePath({ name: 'cart' })"
    :class="classes"
    class="block relative w-40 h-40 outline-none focus:shadow-outline rounded-full transition text-white flex justify-center items-center">
    <font-awesome-icon
      :icon="['far', 'shopping-cart']"
      class="text-18"/>
    <div class="absolute top-0 right-0 w-20 h-20 rounded-full bg-pink-600 text-12 font-extrabold text-white leading-none flex justify-center items-center">
      {{ count }}
    </div>
  </nuxt-link>
</template>

<script>
import { mapGetters } from 'vuex'
import theming from '@/mixins/theming'

export default {
  mixins: [theming],
  computed: {
    ...mapGetters({
      count: 'cart/count'
    }),
    classes() {
      return `bg-${this.shopTheme}-500 hover:bg-${this.shopTheme}-600`
    }
  }
}
</script>
