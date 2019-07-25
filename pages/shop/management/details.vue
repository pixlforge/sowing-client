<template>
  <div>

    <!-- Title -->
    <AppTitle
      semantic="h1"
      visual="h1">
      Détails
    </AppTitle>

    <!-- Shop details -->
    <AppShopDetails
      :countries="countries"
      :errors="errors"
      class="my-72"
      editable/>

    <!-- Save changes -->
    <AppButtonPrimary
      icon="check"
      :color="shopTheme"
      @click.native="update">
      {{ $t("buttons.update") }}
    </AppButtonPrimary>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import AppTitle from '@/components/AppTitle'
import AppShopDetails from '@/components/shops/AppShopDetails'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'

export default {
  middleware: ['authenticated'],
  head() {
    return {
      title: `${this.$t('pages.shop.management.details.title')} | ${this.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex'
        }
      ]
    }
  },
  layout: 'shop-management',
  components: {
    AppTitle,
    AppShopDetails,
    AppButtonPrimary
  },
  mixins: [theming],
  data() {
    return {
      errors: {}
    }
  },
  computed: {
    ...mapGetters({
      shopExists: 'shop/shopExists'
    })
  },
  async asyncData({ app, store }) {
    const shop = await app.$axios.$get('/user/shop')
    const countries = await app.$axios.$get('/countries')

    return {
      shopData: shop.data,
      countries: countries.data,
      title: app.head.title
    }
  },
  mounted() {
    if (!this.shopExists) {
      this.setShop(this.shopData)
    }
  },
  methods: {
    ...mapActions({
      setShop: 'shop/setShop',
      updateShop: 'shop/updateShop'
    }),
    async update() {
      try {
        await this.updateShop()
        this.$toast.success('Votre boutique a été mise à jour avec succès!')
      } catch (e) {
        this.errors = e.response.data.errors
        this.$toast.error(this.$t('toasts.validation'))
      }
    }
  }
}
</script>
