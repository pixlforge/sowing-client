<template>
  <li>
    <nuxt-link
      :to="to"
      :class="[
        `text-${color}-500 hover:text-${shopTheme}-500`,
        {
          'text-pink-600': color === 'pink-dark'
        }
      ]"
      class="block text-14 md:text-12 font-bold leading-normal uppercase no-underline whitespace-no-wrap cursor-pointer transition-colors duration-200 ease-out py-5"
    >
      <font-awesome-icon
        v-if="icon"
        :icon="['far', icon]"
        class="mr-5"
      />
      <slot/>
    </nuxt-link>
  </li>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    to: {
      type: Object,
      required: false,
      default: () => {
        return {}
      }
    },
    color: {
      type: String,
      required: false,
      default: 'gray'
    },
    icon: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    ...mapGetters({
      shopTheme: 'shop/shopTheme'
    })
  }
}
</script>
