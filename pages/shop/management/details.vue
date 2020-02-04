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
      <ShopDetails
        :countries="countries"
        :errors="errors"
        editable
      />

      <!-- Save changes -->
      <ButtonPrimary
        :color="shopTheme"
        @click.native="update"
        icon="check"
      >
        {{ $t("buttons.update") }}
      </ButtonPrimary>
    </Card>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import theming from '@/mixins/theming'
import shopManagement from '@/mixins/shop-management'

import Card from '@/components/globals/Card'
import Heading from '@/components/globals/Heading'
import ShopDetails from '@/components/shops/ShopDetails'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'

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
    ShopDetails,
    ButtonPrimary
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
