<template>
  <main>

    <!-- Page contents -->
    <AppContentSection>

      <!-- Title -->
      <AppTitle
        semantic="h1"
        visual="main">
        {{ $t("shop_creator.steps.details.title") }}
      </AppTitle>

      <p class="paragraph__medium paragraph--center paragraph--narrow paragraph--spaced">
        {{ $t("shop_creator.steps.details.paragraph") }}
      </p>

      <!-- Shop details -->
      <AppShopFeatureContainer>
        <AppShopDetails
          :countries="countries"
          :errors="errors"/>
      </AppShopFeatureContainer>

      <div class="shop-creator__controls">

        <!-- Previous -->
        <button
          class="button button__previous"
          @click.prevent="prev">
          <font-awesome-icon
            :icon="['far', 'chevron-circle-left']"
            class="button__icon button__icon--small"/>
          {{ $t("buttons.back") }}
        </button>

        <!-- Next -->
        <button
          :disabled="!shopPostalCode || !shopCity || !shopCountryId"
          :class="!shopPostalCode || !shopCity || !shopCountryId ? 'button__disabled' : btnTheme"
          class="button button__next"
          @click.prevent="store">
          <font-awesome-icon
            :icon="['far', 'chevron-circle-right']"
            class="button__icon button__icon--small"/>
          {{ $t("buttons.next") }}
        </button>
      </div>
    </AppContentSection>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import theming from '@/mixins/theming';

import AppTitle from '@/components/AppTitle';
import AppShopDetails from '@/components/shops/AppShopDetails';
import AppContentSection from '@/components/AppContentSection';
import AppShopFeatureContainer from '@/components/shops/AppShopFeatureContainer';

export default {
  middleware: ['authenticated'],
  head() {
    return {
      title: `${this.$t('shop_creator.steps.details.title')} | ${this.title}`
    };
  },
  layout: 'shop-creator',
  transition: {
    name: 'slide',
    mode: 'out-in'
  },
  components: {
    AppTitle,
    AppShopDetails,
    AppContentSection,
    AppShopFeatureContainer
  },
  mixins: [theming],
  data() {
    return {
      countries: [],
      errors: {}
    };
  },
  computed: {
    ...mapGetters({
      locale: 'locale',
      shop: 'shop/shop',
      terms: 'shop/terms',
      stepName: 'shop/stepName',
      shopCity: 'shop/shopCity',
      shopExists: 'shop/shopExists',
      stepDetails: 'shop/stepDetails',
      shopCountryId: 'shop/shopCountryId',
      shopPostalCode: 'shop/shopPostalCode'
    })
  },
  async asyncData({ app }) {
    const countries = await app.$axios.$get('/countries');

    return {
      countries: countries.data,
      title: app.head.title
    };
  },
  mounted() {
    if (!this.terms) {
      return this.$router.push(this.localePath('shop-creator-terms'));
    }

    if (!this.shopExists && this.$auth.user.has_shop) {
      this.getShop();
      this.setStepDetails(true);
    }

    this.setStepName(true);
  },
  methods: {
    ...mapActions({
      setShop: 'shop/setShop',
      getShop: 'shop/getShop',
      setStepName: 'shop/setStepName',
      setStepDetails: 'shop/setStepDetails',
      setUserHasShop: 'setUserHasShop'
    }),
    async store() {
      if (this.stepDetails) {
        this.next();
      } else {
        try {
          if (this.terms) {
            const res = await this.$axios.$post('/shops', this.shop);
            this.setShop(res.data);
            this.setUserHasShop(true);
            this.$toast.success(
              'Votre nouvelle boutique a été créée avec succès!'
            );
            this.next();
          } else {
            this.$toast.error(this.$t('toasts.terms'));
          }
        } catch (e) {
          this.errors = e.response.data.errors;
          this.$toast.error(this.$t('toasts.validation'));
        }
      }
    },
    prev() {
      this.$router.push(this.localePath({ name: 'shop-creator-name' }));
    },
    next() {
      this.$router.push(
        this.localePath({ name: 'shop-creator-customization' })
      );
    }
  }
};
</script>
