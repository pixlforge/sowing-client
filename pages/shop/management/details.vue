<template>
  <section class="shop__content">
    <AppTitle
      semantic="h1"
      visual="h3">
      Détails
    </AppTitle>
    <div class="shop__section">
      <AppShopDetails
        :countries="countries"
        :errors="errors"
        editable/>

      <div class="shop__controls">
        <button
          :class="btnTheme"
          class="button button--spaced-larger"
          @click.prevent="update">
          <font-awesome-icon
            :icon="['far', 'check']"
            class="button__icon button__icon--small"/>
          {{ $t("buttons.update") }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import theming from '@/mixins/theming';

import AppTitle from '@/components/AppTitle';
import AppShopDetails from '@/components/shops/AppShopDetails';

export default {
  middleware: ['authenticated'],
  head() {
    return {
      title: `${this.$t('pages.shop.management.details.title')} | ${this.title}`
    };
  },
  layout: 'shop-management',
  components: {
    AppTitle,
    AppShopDetails
  },
  mixins: [theming],
  data() {
    return {
      errors: {}
    };
  },
  computed: {
    ...mapGetters({
      shopExists: 'shop/shopExists'
    })
  },
  async asyncData({ app, store }) {
    const shop = await app.$axios.$get('/user/shop');
    const countries = await app.$axios.$get('/countries');

    return {
      shopData: shop.data,
      countries: countries.data,
      title: app.head.title
    };
  },
  mounted() {
    if (!this.shopExists) {
      this.setShop(this.shopData);
    }
  },
  methods: {
    ...mapActions({
      setShop: 'shop/setShop',
      updateShop: 'shop/updateShop'
    }),
    async update() {
      try {
        await this.updateShop();
        this.$toast.success('Votre boutique a été mise à jour avec succès!');
      } catch (e) {
        this.errors = e.response.data.errors;
        this.$toast.error(this.$t('toasts.validation'));
      }
    }
  }
};
</script>
