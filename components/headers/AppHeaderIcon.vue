<template>
  <div>
    <div
      v-if="shopAvatar"
      :style="`background-image: url('${shopAvatar}');`"
      class="block w-80 h-80 rounded-full bg-white bg-center bg-no-repeat bg-cover flex justify-center items-center text-24 text-green-400"
    />
    <div
      v-else
      :class="textTheme"
    >
      <font-awesome-icon
        :icon="['far', icon]"
        class="block"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import theming from '@/mixins/theming'

export default {
  mixins: [theming],
  props: {
    icon: {
      type: String,
      required: false,
      default: 'store'
    }
  },
  computed: {
    ...mapGetters({
      shopAvatar: 'shop/shopAvatar'
    })
  }
}
</script>
