<template>
  <div>

    <!-- Title -->
    <Heading
      tag="h1"
      visual="h1"
    >
      Détails
    </Heading>

    <!-- Shop details -->
    <Card>
      <AppShopDetails
        :countries="countries"
        :errors="errors"
        editable
      />

      <!-- Save changes -->
      <AppButtonPrimary
        :color="shopTheme"
        @click.native="update"
        icon="check"
      >
        {{ $t("buttons.update") }}
      </AppButtonPrimary>
    </Card>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import theming from '@/mixins/theming'
import shopManagement from '@/mixins/shop-management'

import Card from '@/components/Card'
import Heading from '@/components/Heading'
import AppShopDetails from '@/components/shops/AppShopDetails'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'

export default {
  middleware: ['authenticated'],
  head() {
    return {
      title: this.$t('pages.shop.management.details.title'),
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
    Card,
    Heading,
    AppShopDetails,
    AppButtonPrimary
  },
  mixins: [
    theming,
    shopManagement
  ],
  data() {
    return {
      errors: {}
    }
  },
  async asyncData({ app }) {
    const shop = await app.$axios.$get('/user/shop')
    const countries = await app.$axios.$get('/countries')

    return {
      shopData: shop.data,
      countries: countries.data
    }
  },
  methods: {
    ...mapActions({
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
