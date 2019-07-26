<template>
  <section class="flex flex-col sm:flex-row justify-center items-center">
    <input
      id="name"
      v-model="localShopName"
      :disabled="shopExists && !editable"
      :class="{ 'form__input--disabled': shopExists && !editable }"
      :placeholder="$t('shop_creator.steps.name.placeholder')"
      name="name"
      type="text"
      class="form__input sm:rounded-r-none mt-0">

    <AppButtonPrimary
      :disabled="(shopExists || !shopName) && !editable"
      icon="rocket"
      class="w-full sm:w-auto sm:rounded-l-none"
      @click.native="check">
      {{ $t("buttons.check_availability") }}
    </AppButtonPrimary>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'

export default {
  components: {
    AppButtonPrimary
  },
  mixins: [theming],
  props: {
    editable: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      shopName: 'shop/shopName',
      shopExists: 'shop/shopExists'
    }),
    localShopName: {
      get() {
        return this.shopName
      },
      set(name) {
        this.setShopName(name)
      }
    }
  },
  methods: {
    ...mapActions({
      flash: 'alert/flash',
      close: 'alert/close',
      setShopName: 'shop/setShopName'
    }),
    async check() {
      try {
        await this.$axios.$post('/shops/checker', {
          name: this.shopName
        })
        this.$toast.success(
          `"<em>${this.shopName}</em>" ${this.$t('toasts.is_available')}!`
        )
        this.flash({
          type: 'success',
          message: `"<em>${this.shopName}</em>" ${this.$t(
            'toasts.is_available'
          )}!`
        })
      } catch (e) {
        this.$toast.error(
          `"<em>${this.shopName}</em>" ${this.$t('toasts.is_already_in_use')}.`
        )
        this.flash({
          type: 'danger',
          message: `"<em>${this.shopName}</em>" ${this.$t(
            'toasts.is_already_in_use'
          )}!`
        })
      }
    }
  }
}
</script>
