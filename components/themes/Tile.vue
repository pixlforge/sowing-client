<template>
  <div
    :class="bgTheme"
    @click.prevent="update"
    class="w-60 h-60 rounded-lg flex justify-center items-center cursor-pointer"
  >
    <font-awesome-icon
      v-if="theme === shopTheme"
      :icon="['far', 'check-circle']"
      class="text-24 text-white"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    theme: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      shopTheme: 'shop/shopTheme'
    }),
    bgTheme() {
      return `bg-${this.theme}-500`
    }
  },
  methods: {
    ...mapActions({
      setShopTheme: 'shop/setShopTheme'
    }),
    async update() {
      try {
        await this.setShopTheme(this.theme)
        this.$toast.success(this.$t('toasts.theme_updated'))
      } catch (e) {
        this.$toast.error(this.$t('toasts.general_error'))
      }
    }
  }
}
</script>
