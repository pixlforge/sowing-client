<template>
  <div>
    <!-- Title -->
    <Heading tag="h1" visual="h1"> Détails </Heading>

    <!-- Shop details -->
    <Card>
      <ShopDetails :countries="countries" :errors="errors" editable />

      <!-- Save changes -->
      <ButtonPrimary :color="shopTheme" icon="check" @click.native="update">
        {{ $t('button.update') }}
      </ButtonPrimary>
    </Card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import theming from '@/mixins/theming'
import shopManagement from '@/mixins/shop-management'

import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import Card from '@/components/globals/Card'
import Heading from '@/components/globals/Heading'
import ShopDetails from '@/components/shops/ShopDetails'

export default {
  components: {
    ButtonPrimary,
    Card,
    Heading,
    ShopDetails,
  },
  mixins: [theming, shopManagement],
  layout: 'shop-management',
  middleware: ['authenticated'],
  async asyncData({ app }) {
    const shop = await app.$axios.$get('/user/shop')
    const countries = await app.$axios.$get('/countries')

    return {
      shopData: shop.data,
      countries: countries.data,
    }
  },
  data() {
    return {
      errors: {},
    }
  },
  head() {
    return {
      title: this.$t('shop.management.details.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex',
        },
      ],
    }
  },
  methods: {
    ...mapActions({
      updateShop: 'shop/updateShop',
    }),
    async update() {
      try {
        await this.updateShop()
        this.$toast.success('Votre boutique a été mise à jour avec succès!')
      } catch (e) {
        this.errors = e.response.data.errors
        this.$toast.error(this.$t('toasts.validation'))
      }
    },
  },
}
</script>
