<template>
  <section class="flex flex-col sm:flex-row justify-center items-center">
    <FormInput
      v-model="localShopName"
      :disabled="shopExists && !editable"
      :placeholder="$t('shop_creator.steps.name.placeholder')"
      name="name"
      class="sm:rounded-r-none"
    />

    <ButtonPrimary
      :disabled="(shopExists || !shopName) && !editable"
      @click.native="check"
      icon="rocket"
      class="w-full h-46 sm:w-auto sm:rounded-l-none"
    >
      {{ $t("button.check_availability") }}
    </ButtonPrimary>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import FormInput from '@/components/forms/FormInput'

export default {
  components: {
    ButtonPrimary,
    FormInput
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
