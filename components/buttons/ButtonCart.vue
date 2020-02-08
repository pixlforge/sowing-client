<template>
  <nuxt-link
    :to="{ name: 'cart' }"
    :title="$t('aria.links.cart')"
    :aria-label="$t('aria.links.cart')"
    :class="`bg-${shopTheme}-500 hover:bg-${shopTheme}-700`"
    class="block relative w-40 h-40 outline-none focus:shadow-outline rounded-full transition-color transition-faster text-white flex justify-center items-center"
  >
    <font-awesome-icon
      :icon="['far', 'shopping-cart']"
      class="text-18"
    />
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
    })
  }
}
</script>
